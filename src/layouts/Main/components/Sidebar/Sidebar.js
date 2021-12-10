import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { Divider, Drawer } from "@material-ui/core";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";

import Profile from "./components/Profile/Profile";
import SidebarNav from "./components/SidebarNav/SidebarNav";
import LogOut from "./components/LogOut/LogOut";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up("lg")]: {
      marginTop: 64,
      height: "calc(100% - 64px)",
    },
  },
  root: {
    backgroundColor: theme.palette.white,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: theme.spacing(2),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  nav: {
    marginBottom: theme.spacing(2),
  },
}));

const Sidebar = (props) => {
  const { setOpenSidebar, open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  const pages = [
    {
      title: "Mi cuenta",
      href: "/account",
      icon: <AccountBoxIcon />,
    },
    {
      title: "Productos",
      href: "/products",
      icon: <CardGiftcardIcon />,
    },
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div {...rest} className={clsx(classes.root, className)}>
        <Profile />
        <Divider className={classes.divider} />
        <SidebarNav
          className={classes.nav}
          pages={pages}
          setOpenSidebar={setOpenSidebar}
        />
        <LogOut setOpenSidebar={setOpenSidebar}/>
      </div>
    </Drawer>
  );
};

export default Sidebar;
