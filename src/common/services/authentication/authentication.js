import axios from '../../utils/axios';

import history from '../../utils/history';
import sessionService from '../session';

const authenticationService = {
  login: (data) =>
    axios.post('/users/login', data).then((response) => {
      const { user, token } = response.data;

      sessionService.create({ user, token });
      history.push('/');

      return response;
    }),
  logout: () => {
    sessionService.destroy();
    history.push('/login');
  },
  authenticated: () => {
    const session = sessionService.get();

    return session ? !!session.token : false;
  }
};

export default authenticationService;
