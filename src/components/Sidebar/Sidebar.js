import React, { forwardRef } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Divider,
  Drawer,
  List,
  ListItem,
  Button,
  colors
} from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';

import roles from '../../common/utils/roles';
import sessionService from '../../common/services/session';
import Banner from './Banner';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  },
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: colors.blueGrey[800],
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightMedium
  },
  icon: {
    color: theme.palette.icon,
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1)
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    '& $icon': {
      color: theme.palette.primary.main
    }
  }
}));

const CustomRouterLink = forwardRef((props, ref) => (
  <div ref={ref} style={{ flexGrow: 1 }}>
    <NavLink {...props} />
  </div>
));

const Sidebar = (props) => {
  const { open, variant, onClose } = props;
  const classes = useStyles();
  const { user: currentUser } = sessionService.get();
  const userRoles = currentUser.role;

  const bannerText = {
    heading: 'React App',
    subheading: 'Starter'
  };

  const pages = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: <DashboardIcon />,
      roles: [roles.admin]
    }
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div className={classes.root}>
        <Banner
          heading={bannerText.heading}
          subheading={bannerText.subheading}
        />
        <Divider className={classes.divider} />
        <List className={classes.nav}>
          {pages
            .filter(
              (page) =>
                page.roles.filter((role) => userRoles.includes(role)).length
            )
            .map((page) => (
              <ListItem
                className={classes.item}
                disableGutters
                key={page.title}
              >
                <Button
                  activeClassName={classes.active}
                  className={classes.button}
                  component={CustomRouterLink}
                  to={page.href}
                >
                  <div className={classes.icon}>{page.icon}</div>
                  {page.title}
                </Button>
              </ListItem>
            ))}
        </List>
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
