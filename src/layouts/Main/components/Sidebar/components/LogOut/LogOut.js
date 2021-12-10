import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { Button, colors } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "store/slices/sesion";
import { withRouter } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: colors.grey[50],
  },
  media: {
    paddingTop: theme.spacing(2),
    height: 80,
    textAlign: "center",
    "& > img": {
      height: "100%",
      width: "auto",
    },
  },
  content: {
    padding: theme.spacing(1, 2),
  },
  actions: {
    padding: theme.spacing(1, 2),
    display: "flex",
    justifyContent: "center",
  },
}));

const LogOut = (props) => {
  const { className, setOpenSidebar, ...rest } = props;
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.sesion);
  const classes = useStyles();

  const handleSesion = () => {
    setOpenSidebar(false);
    if (isLogin) {
      dispatch(setLogin(false));
    } else {
      props.history.push("/sign-in");
    }
  };

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.actions}>
        <Button
          id="CloseSession"
          aria-label="Cerrar Sesion"
          color="secondary"
          component="a"
          variant="outlined"
          onClick={handleSesion}
        >
          {isLogin ? "Cerrar Session" : "Iniciar Session"}
        </Button>
      </div>
    </div>
  );
};

export default withRouter(LogOut);
