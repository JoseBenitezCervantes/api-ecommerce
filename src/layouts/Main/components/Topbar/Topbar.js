import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { AppBar, Toolbar, Hidden, IconButton, Grid } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import headerLinksStyle from "assets/jss/headerLinksStyle";
import classNames from "classnames";
import Poppers from "@material-ui/core/Popper";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Divider from "@material-ui/core/Divider";
import ShoppingCart from "./ShoppingCart";
import useStyles from "./Styles";
import { ReactComponent as LogoHoum } from "../../../../icons/houmLogo.svg";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "store/slices/sesion";
import { withRouter } from "react-router-dom";

const useHeaderLinksStyle = makeStyles(headerLinksStyle);

const Topbar = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.sesion);
  const { isDesktop, className, onSidebarOpen, ...rest } = props;
  const classesHeaderLinksStyle = useHeaderLinksStyle();
  const [openProfile, setOpenProfile] = useState(null);

  const handleClickProfile = (event) => {
    if (openProfile && openProfile.contains(event.target)) {
      setOpenProfile(null);
    } else {
      setOpenProfile(event.currentTarget);
    }
  };

  const handleCloseProfile = () => {
    setOpenProfile(null);
  };

  const handleSesion = () => {
    setOpenProfile(null);
    if (isLogin) {
      dispatch(setLogin(false));
    } else {
      props.history.push("/sign-in");
    }
  };

  return (
    <AppBar {...rest} className={clsx(classes.root, className)}>
      <Toolbar>
        <Hidden mdDown>
          <Grid container spacing={8}>
            <Grid item>
              <RouterLink to="/Products">
                <Typography variant="h6">
                  <LogoHoum />
                </Typography>
              </RouterLink>
            </Grid>
          </Grid>
          <div className={classes.flexGrow} />
          <div className={classesHeaderLinksStyle.manager}>
            <IconButton
              id="CircleIcon"
              color="secondary"
              aria-owns={openProfile ? "profile-menu-list-grow" : null}
              aria-haspopup="true"
              aria-label="Circle Icon"
              onClick={handleClickProfile}
              className={classesHeaderLinksStyle.buttonLink}
            >
              <AccountCircleIcon />
            </IconButton>

            <Poppers
              open={Boolean(openProfile)}
              anchorEl={openProfile}
              transition
              disablePortal
              className={
                classNames({
                  [classesHeaderLinksStyle.popperClose]: !openProfile,
                }) +
                " " +
                classesHeaderLinksStyle.popperNav
              }
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  id="profile-menu-list-grow"
                  style={{
                    transformOrigin:
                      placement === "bottom" ? "center top" : "center bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleCloseProfile}>
                      <MenuList role="menu">
                        <RouterLink to="/Account">
                          <MenuItem
                            onClick={handleCloseProfile}
                            className={classesHeaderLinksStyle.dropdownItem}
                          >
                            Mi Perfil
                          </MenuItem>
                        </RouterLink>
                        <Divider light />
                        <MenuItem
                          onClick={handleSesion}
                          className={classesHeaderLinksStyle.dropdownItem}
                        >
                          {isLogin ? "Cerrar Session" : "Iniciar Session"}
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Poppers>
          </div>

          <ShoppingCart />
        </Hidden>

        <Hidden lgUp>
          <RouterLink to="/">
            <LogoHoum />
          </RouterLink>

          <div className={classes.toolbarButtons}>
            <div className={classes.toolbarButtonsXl}>
              <Grid container>
                {!isDesktop && (
                  <Grid item xs={12} sm={12} md={6} lg={4}>
                    <Grid container>
                      <Grid item xs={6} sm={6} md={6} lg={6}>
                        <ShoppingCart />
                      </Grid>
                      <Grid item xs={6} sm={6} md={6} lg={6}>
                        <IconButton
                          id="MenuIcon"
                          aria-label="Menu Icon"
                          onClick={onSidebarOpen}
                        >
                          <MenuIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Grid>
                )}
              </Grid>
            </div>
          </div>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Topbar);
