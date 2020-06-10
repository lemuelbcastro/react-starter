import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import authenticationService from '../../common/services/authentication';
import sessionService from '../../common/services/session';
import RouteWithLayout from './RouteWithLayout';

const PrivateRoute = (props) => {
  const { layout, component, path, roles, ...rest } = props;

  if (!authenticationService.authenticated()) {
    return <Redirect to="/login" />;
  }

  const { user: currentUser } = sessionService.get();
  const userRoles = currentUser.role;

  return roles &&
    !roles.filter((element) => userRoles.includes(element)).length ? (
    <Redirect to="/forbidden" />
  ) : (
    <RouteWithLayout
      component={component}
      layout={layout}
      path={path}
      {...rest}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string.isRequired,
  roles: PropTypes.array
};

export default PrivateRoute;
