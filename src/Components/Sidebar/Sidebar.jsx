import React from 'react';
import clsx from 'clsx';
import { useNavigate, useLocation } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import Tooltip from '@material-ui/core/Tooltip';
import CssBaseline from '@material-ui/core/CssBaseline';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useStyles } from './SidebarStyles';

import Menu1 from '../../Assets/Svg/Sidebar/menu1.svg';
import Menu2 from '../../Assets/Svg/Sidebar/menu2.svg';
import Menu3 from '../../Assets/Svg/Sidebar/menu3.svg';
import Menu4 from '../../Assets/Svg/Sidebar/menu4.svg';
import Menu5 from '../../Assets/Svg/Sidebar/menu5.svg';
import Menu6 from '../../Assets/Svg/Sidebar/menu6.svg';
import Menu7 from '../../Assets/Svg/Sidebar/menu7.svg';
import Menu8 from '../../Assets/Svg/Sidebar/menu8.svg';
import Menu9 from '../../Assets/Svg/Sidebar/menu9.svg';
import Menu10 from '../../Assets/Svg/cNft.svg';

// eslint-disable-next-line react/prop-types
export default function Sidebar({ open, setHeaderText }) {
  const navigate = useNavigate();
  const adminRoutes = ['/admin/dashboard', '/admin/administrator', '/admin/category', '/admin/collection', '/admin/collectible', '/admin/user', '/admin/support', '/admin/analytics-and-reports', '/admin/cms', '/admin/createNft'];
  const adminRouteNames = ['Dashboard', 'Admin', 'Category', 'Collection', 'Collectible', 'User', 'Support', 'Analytics & Reports', 'CMS'];
  const [active, setActive] = React.useState(0);
  const classes = useStyles();
  const location = useLocation();
  const pathName = location.pathname;

  React.useEffect(() => {
    adminRoutes.map((route, index) => {
      if (route === pathName) {
        setActive(index); setHeaderText(adminRouteNames[index]);
      }
      return true;
    });
  }, [pathName]);

  const onButtonClick = (index, text, path) => {
    setActive(index);
    setHeaderText(text);
    navigate(path);
  };

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, classes.sectionDesktop, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <List>
            {['Dashboard', 'Admin', 'Category', 'Collection', 'Collectible', 'User', 'Support', 'Analytics & Reports', 'CMS', 'Create NFT'].map((text, index) => {
              if (active === index) {
                return (
                  <ListItem
                    button
                    key={text}
                    className={`${classes.menuSelected} ${classes.listItem} `}
                    onClick={() => onButtonClick(index, text, adminRoutes[index])}
                  >
                    { text === 'Dashboard' && (
                      <Tooltip title="Dashboard">
                        <ListItemIcon className={classes.iconSelected}>
                          <Icon className={classes.iconHeight}>
                            <img alt="imageAlt" src={Menu1} />
                          </Icon>
                        </ListItemIcon>
                      </Tooltip>
                    ) }
                    { text === 'Admin' && (
                      <Tooltip title="Admin">
                        <ListItemIcon className={classes.iconSelected}>
                          <Icon className={classes.iconHeight}>
                            <img alt="imageAlt" src={Menu2} />
                          </Icon>
                        </ListItemIcon>
                      </Tooltip>
                    ) }
                    { text === 'Category' && (
                      <Tooltip title="Category">
                        <ListItemIcon className={classes.iconSelected}>
                          <Icon className={classes.iconHeight}>
                            <img alt="imageAlt" src={Menu3} />
                          </Icon>
                        </ListItemIcon>
                      </Tooltip>
                    ) }
                    { text === 'Collection' && (
                      <Tooltip title="Collection">
                        <ListItemIcon className={classes.iconSelected}>
                          <Icon className={classes.iconHeight}>
                            <img alt="imageAlt" src={Menu4} />
                          </Icon>
                        </ListItemIcon>
                      </Tooltip>
                    ) }
                    { text === 'Collectible' && (
                      <Tooltip title="Collectible">
                        <ListItemIcon className={classes.iconSelected}>
                          <Icon className={classes.iconHeight}>
                            <img alt="imageAlt" src={Menu5} />
                          </Icon>
                        </ListItemIcon>
                      </Tooltip>
                    ) }
                    { text === 'User' && (
                      <Tooltip title="User">
                        <ListItemIcon className={classes.iconSelected}>
                          <Icon className={classes.iconHeight}>
                            <img alt="imageAlt" src={Menu6} />
                          </Icon>
                        </ListItemIcon>
                      </Tooltip>
                    ) }
                    { text === 'Support' && (
                      <Tooltip title="Support">
                        <ListItemIcon className={classes.iconSelected}>
                          <Icon className={classes.iconHeight}>
                            <img alt="imageAlt" src={Menu7} />
                          </Icon>
                        </ListItemIcon>
                      </Tooltip>
                    ) }
                    { text === 'Analytics & Reports' && (
                      <Tooltip title="Analytics & Reports">
                        <ListItemIcon className={classes.iconSelected}>
                          <Icon className={classes.iconHeight}>
                            <img alt="imageAlt" src={Menu8} />
                          </Icon>
                        </ListItemIcon>
                      </Tooltip>
                    ) }
                    { text === 'CMS' && (
                      <Tooltip title="CMS">
                        <ListItemIcon className={classes.iconSelected}>
                          <Icon className={classes.iconHeight}>
                            <img alt="imageAlt" src={Menu9} />
                          </Icon>
                        </ListItemIcon>
                      </Tooltip>
                    ) }
                    { text === 'Create NFT' && (
                      <Tooltip title="Create NFT">
                        <ListItemIcon className={classes.iconSelected}>
                          <Icon className={classes.iconHeight}>
                            <img alt="imageAlt" src={Menu10} />
                          </Icon>
                        </ListItemIcon>
                      </Tooltip>
                    ) }
                    <ListItemText primary={text} classes={{ primary: classes.menuTextSelected }} />
                  </ListItem>
                );
              }
              return (
                <ListItem
                  button
                  key={text}
                  className={classes.listItem}
                  onClick={() => onButtonClick(index, text, adminRoutes[index])}
                >
                  { text === 'Dashboard' && (
                    <Tooltip title="Dashboard">
                      <ListItemIcon className={classes.icon}>
                        <Icon className={classes.iconHeight}>
                          <img alt="imageAlt" src={Menu1} />
                        </Icon>
                      </ListItemIcon>
                    </Tooltip>
                  ) }
                  { text === 'Admin' && (
                    <Tooltip title="Admin">
                      <ListItemIcon className={classes.icon}>
                        <Icon className={classes.iconHeight}>
                          <img alt="imageAlt" src={Menu2} />
                        </Icon>
                      </ListItemIcon>
                    </Tooltip>
                  ) }
                  { text === 'Category' && (
                    <Tooltip title="Category">
                      <ListItemIcon className={classes.icon}>
                        <Icon className={classes.iconHeight}>
                          <img alt="imageAlt" src={Menu3} />
                        </Icon>
                      </ListItemIcon>
                    </Tooltip>
                  ) }
                  { text === 'Collection' && (
                    <Tooltip title="Collection">
                      <ListItemIcon className={classes.icon}>
                        <Icon className={classes.iconHeight}>
                          <img alt="imageAlt" src={Menu4} />
                        </Icon>
                      </ListItemIcon>
                    </Tooltip>
                  ) }
                  { text === 'Collectible' && (
                    <Tooltip title="Collectible">
                      <ListItemIcon className={classes.icon}>
                        <Icon className={classes.iconHeight}>
                          <img alt="imageAlt" src={Menu5} />
                        </Icon>
                      </ListItemIcon>
                    </Tooltip>
                  ) }
                  { text === 'User' && (
                    <Tooltip title="User">
                      <ListItemIcon className={classes.icon}>
                        <Icon className={classes.iconHeight}>
                          <img alt="imageAlt" src={Menu6} />
                        </Icon>
                      </ListItemIcon>
                    </Tooltip>
                  ) }
                  { text === 'Support' && (
                    <Tooltip title="Support">
                      <ListItemIcon className={classes.icon}>
                        <Icon className={classes.iconHeight}>
                          <img alt="imageAlt" src={Menu7} />
                        </Icon>
                      </ListItemIcon>
                    </Tooltip>
                  ) }
                  { text === 'Analytics & Reports' && (
                    <Tooltip title="Analytics & Reports">
                      <ListItemIcon className={classes.icon}>
                        <Icon className={classes.iconHeight}>
                          <img alt="imageAlt" src={Menu8} />
                        </Icon>
                      </ListItemIcon>
                    </Tooltip>
                  ) }
                  { text === 'CMS' && (
                    <Tooltip title="CMS">
                      <ListItemIcon className={classes.icon}>
                        <Icon className={classes.iconHeight}>
                          <img alt="imageAlt" src={Menu9} />
                        </Icon>
                      </ListItemIcon>
                    </Tooltip>
                  ) }
                  { text === 'Create NFT' && (
                    <Tooltip title="Create NFT">
                      <ListItemIcon className={classes.icon}>
                        <Icon className={classes.iconHeight}>
                          <img alt="imageAlt" src={Menu10} />
                        </Icon>
                      </ListItemIcon>
                    </Tooltip>
                  ) }
                  <ListItemText primary={text} classes={{ primary: classes.menuText }} />
                </ListItem>
              );
            })}
          </List>
        </Drawer>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, classes.sectionMobile, {
            [classes.drawerClose]: true,
          })}
          classes={{
            paper: clsx({
              [classes.drawerClose]: true,
            }),
          }}
        >
          <List>
            {adminRouteNames.map((text, index) => {
              if (active === index) {
                return (
                  <ListItem
                    button
                    key={text}
                    className={`${classes.menuSelected} ${classes.listItem} `}
                    onClick={() => onButtonClick(index, text, adminRoutes[index])}
                  >
                    { text === 'Dashboard' && (
                      <Tooltip title="Dashboard">
                        <ListItemIcon className={classes.icon}>
                          <Icon className={classes.iconHeight}>
                            <img alt="imageAlt" src={Menu1} />
                          </Icon>
                        </ListItemIcon>
                      </Tooltip>
                    ) }
                    { text === 'Admin' && (
                      <Tooltip title="Admin">
                        <ListItemIcon className={classes.icon}>
                          <Icon className={classes.iconHeight}>
                            <img alt="imageAlt" src={Menu2} />
                          </Icon>
                        </ListItemIcon>
                      </Tooltip>
                    ) }
                    { text === 'Category' && (
                      <Tooltip title="Category">
                        <ListItemIcon className={classes.icon}>
                          <Icon className={classes.iconHeight}>
                            <img alt="imageAlt" src={Menu3} />
                          </Icon>
                        </ListItemIcon>
                      </Tooltip>
                    ) }
                    { text === 'Collection' && (
                      <Tooltip title="Collection">
                        <ListItemIcon className={classes.icon}>
                          <Icon className={classes.iconHeight}>
                            <img alt="imageAlt" src={Menu4} />
                          </Icon>
                        </ListItemIcon>
                      </Tooltip>
                    ) }
                    { text === 'Collectible' && (
                      <Tooltip title="Collectible">
                        <ListItemIcon className={classes.icon}>
                          <Icon className={classes.iconHeight}>
                            <img alt="imageAlt" src={Menu5} />
                          </Icon>
                        </ListItemIcon>
                      </Tooltip>
                    ) }
                    { text === 'User' && (
                      <Tooltip title="User">
                        <ListItemIcon className={classes.icon}>
                          <Icon className={classes.iconHeight}>
                            <img alt="imageAlt" src={Menu6} />
                          </Icon>
                        </ListItemIcon>
                      </Tooltip>
                    ) }
                    { text === 'Support' && (
                      <Tooltip title="Support">
                        <ListItemIcon className={classes.icon}>
                          <Icon className={classes.iconHeight}>
                            <img alt="imageAlt" src={Menu7} />
                          </Icon>
                        </ListItemIcon>
                      </Tooltip>
                    ) }
                    { text === 'Analytics & Reports' && (
                      <Tooltip title="Analytics & Reports">
                        <ListItemIcon className={classes.icon}>
                          <Icon className={classes.iconHeight}>
                            <img alt="imageAlt" src={Menu8} />
                          </Icon>
                        </ListItemIcon>
                      </Tooltip>
                    ) }
                    { text === 'CMS' && (
                      <Tooltip title="CMS">
                        <ListItemIcon className={classes.icon}>
                          <Icon className={classes.iconHeight}>
                            <img alt="imageAlt" src={Menu9} />
                          </Icon>
                        </ListItemIcon>
                      </Tooltip>
                    ) }
                    <ListItemText primary={text} className={classes.menuText} />
                  </ListItem>
                );
              }
              return (
                <ListItem
                  button
                  key={text}
                  className={classes.listItem}
                  onClick={() => onButtonClick(index, text, adminRoutes[index])}
                >
                  { text === 'Dashboard' && (
                    <Tooltip title="Dashboard">
                      <ListItemIcon className={classes.icon}>
                        <Icon className={classes.iconHeight}>
                          <img alt="imageAlt" src={Menu1} />
                        </Icon>
                      </ListItemIcon>
                    </Tooltip>
                  ) }
                  { text === 'Admin' && (
                    <Tooltip title="Admin">
                      <ListItemIcon className={classes.icon}>
                        <Icon className={classes.iconHeight}>
                          <img alt="imageAlt" src={Menu2} />
                        </Icon>
                      </ListItemIcon>
                    </Tooltip>
                  ) }
                  { text === 'Category' && (
                    <Tooltip title="Category">
                      <ListItemIcon className={classes.icon}>
                        <Icon className={classes.iconHeight}>
                          <img alt="imageAlt" src={Menu3} />
                        </Icon>
                      </ListItemIcon>
                    </Tooltip>
                  ) }
                  { text === 'Collection' && (
                    <Tooltip title="Collection">
                      <ListItemIcon className={classes.icon}>
                        <Icon className={classes.iconHeight}>
                          <img alt="imageAlt" src={Menu4} />
                        </Icon>
                      </ListItemIcon>
                    </Tooltip>
                  ) }
                  { text === 'Collectible' && (
                    <Tooltip title="Collectible">
                      <ListItemIcon className={classes.icon}>
                        <Icon className={classes.iconHeight}>
                          <img alt="imageAlt" src={Menu5} />
                        </Icon>
                      </ListItemIcon>
                    </Tooltip>
                  ) }
                  { text === 'User' && (
                    <Tooltip title="User">
                      <ListItemIcon className={classes.icon}>
                        <Icon className={classes.iconHeight}>
                          <img alt="imageAlt" src={Menu6} />
                        </Icon>
                      </ListItemIcon>
                    </Tooltip>
                  ) }
                  { text === 'Support' && (
                    <Tooltip title="Support">
                      <ListItemIcon className={classes.icon}>
                        <Icon className={classes.iconHeight}>
                          <img alt="imageAlt" src={Menu7} />
                        </Icon>
                      </ListItemIcon>
                    </Tooltip>
                  ) }
                  { text === 'Analytics & Reports' && (
                    <Tooltip title="Analytics & Reports">
                      <ListItemIcon className={classes.icon}>
                        <Icon className={classes.iconHeight}>
                          <img alt="imageAlt" src={Menu8} />
                        </Icon>
                      </ListItemIcon>
                    </Tooltip>
                  ) }
                  { text === 'CMS' && (
                    <Tooltip title="CMS">
                      <ListItemIcon className={classes.icon}>
                        <Icon className={classes.iconHeight}>
                          <img alt="imageAlt" src={Menu9} />
                        </Icon>
                      </ListItemIcon>
                    </Tooltip>
                  ) }
                  <ListItemText primary={text} className={classes.menuText} />
                </ListItem>
              );
            })}
          </List>
        </Drawer>
      </div>
    </>
  );
}
