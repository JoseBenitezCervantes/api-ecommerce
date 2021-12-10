import React, { useState } from "react";
import { Link as RouterLink, withRouter } from "react-router-dom";
import validate from "validate.js";
import { Grid, Button, TextField, Link, Typography } from "@material-ui/core";
import { useForm } from "hooks/useForm";
import { errorAlert, loader } from "../../misc/alerts";
import useStyles from "./styles";
import { setLogin } from "store/slices/sesion";
import { useDispatch } from "react-redux";

const schema = {
  email: {
    presence: { allowEmpty: false, message: "Es requerido" },
    length: {
      maximum: 64,
    },
  },
  password: {
    presence: { allowEmpty: false, message: "Es requerido" },
    length: {
      maximum: 128,
    },
  },
};

const SignIn = (props) => {
  const { history } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({ msg: "", errorField: "" });

  const getLogin = async () => {
    loader("Iniciando Sesion");
    const response = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: formValues.email,
        password: formValues.password,
      }),
    });
    const result = await response.json();
    if (result?.token) {
      dispatch(setLogin(true));
      loader("Iniciando Sesion", true);
      history.push("/");
    } else {
      dispatch(setLogin(false));
      errorAlert("Error al iniciar sesion");
    }
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    // Valida que los campos esten correctos
    const hasErrors = validate(formValues, schema);
    if (hasErrors?.email) {
      setErrors({ msg: hasErrors?.email[0], errorField: "email" });
    } else if (hasErrors?.password) {
      setErrors({ msg: hasErrors?.password[0], errorField: "password" });
    } else {
      setErrors({ msg: "", errorField: "" });
      getLogin();
    }
  };

  const hasError = (field) => {
    return errors.errorField === field;
  };

  return (
    <div className={classes.root}>
      <Grid className={classes.grid} container>
        <Grid className={classes.content} item lg={12} xs={12}>
          <div className={classes.content}>
            <div className={classes.contentBody}>
              <form className={classes.form} onSubmit={handleSignIn}>
                <Typography className={classes.title} variant="h2">
                  Inicia Sesion
                </Typography>

                <TextField
                  className={classes.textField}
                  fullWidth
                  label="Email address"
                  name="email"
                  type="text"
                  color="secondary"
                  variant="outlined"
                  error={hasError("email")}
                  helperText={hasError("email") ? errors.msg : null}
                  value={formValues.email}
                  onChange={handleInputChange}
                />
                <TextField
                  className={classes.textField}
                  fullWidth
                  color="secondary"
                  label="Password"
                  name="password"
                  type="password"
                  error={hasError("password")}
                  helperText={hasError("password") ? errors.msg : null}
                  variant="outlined"
                  value={formValues.password}
                  onChange={handleInputChange}
                />
                <Button
                  className={classes.signInButton}
                  color="secondary"
                  fullWidth
                  size="large"
                  type="submit"
                  aria-label="sign In Button"
                  id="signInButton"
                  variant="contained"
                >
                  Iniciar
                </Button>
                <p>
                  CREDENCIALES FAKE API: username: "mor_2314", password:
                  "83r5^_"
                </p>
                <br />
                <Typography color="textSecondary" variant="body1">
                  No tienes cuenta?{" "}
                  <Link
                    component={RouterLink}
                    to="/sign-up"
                    variant="h6"
                    color="secondary"
                  >
                    Crear Cuenta
                  </Link>
                </Typography>
              </form>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default withRouter(SignIn);
