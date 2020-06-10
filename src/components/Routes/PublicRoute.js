import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import authenticationService from '../../common/services/authentication';
import RouteWithLayout from './RouteWithLayout';

const PublicRoute = (props) => {
  const { layout, component, path, restricted, ...rest } = props;

  return authenticationService.authenticated() && restricted ? (
    <Redirect to="/" />
  ) : (
    <RouteWithLayout
      component={component}
      layout={layout}
      path={path}
      {...rest}
    />
  );
};

PublicRoute.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string.isRequired,
  restricted: PropTypes.bool
};

export default PublicRoute;
