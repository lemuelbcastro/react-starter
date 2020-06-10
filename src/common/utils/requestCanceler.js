import axios from 'axios';

let source = axios.CancelToken.source();

export default {
  token: () => source.token,
  cancel: () => source.cancel(),
  renew: () => (source = axios.CancelToken.source())
};
