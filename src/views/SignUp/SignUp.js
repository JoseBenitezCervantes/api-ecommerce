import React, { useState } from "react";
import { Link as RouterLink, withRouter } from "react-router-dom";
import validate from "validate.js";
import { Grid, Button, TextField, Link, Typography } from "@material-ui/core";
import { useForm } from "hooks/useForm";
import { errorAlert, loader, successAlert } from "../../misc/alerts";
import useStyles from "./Styles";

const schema = {
  name: {
    presence: { allowEmpty: false, message: "Es requerido" },
    length: {
      maximum: 128,
    },
  },
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
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({ msg: "", errorField: "" });

  const addUser = async () => {
    try {
      loader("Registrando Usuario");
      const response = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formValues.email,
          username: formValues.name,
          password: formValues.password,
          name: {
            firstname: formValues.name,
            lastname: formValues.name,
          },
          address: {
            city: "kilcoole",
            street: "7835 new road",
            number: 3,
            zipcode: "12926-3874",
            geolocation: {
              lat: "-37.3159",
              long: "81.1496",
            },
          },
          phone: "1-570-236-7033",
        }),
      });
      await response.json();
      successAlert("Usuario Registrado")
      setTimeout(() => {
        history.push("/");
      }, 3000);

    } catch (error) {
      console.log("🚀 ~ file: SignUp.js ~ line 73 ~ addUser ~ error", error);
      errorAlert("Error al resgistrar");
    }
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    // Valida que los campos esten correctos
    const hasErrors = validate(formValues, schema);

    if (hasErrors) {
      const firstKey = Object.keys(hasErrors)[0];
      setErrors({ msg: hasErrors[firstKey][0], errorField: firstKey });
    } else {
      setErrors({ msg: "", errorField: "" });
      addUser();
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
                  Crear Cuenta
                </Typography>
                <TextField
                  className={classes.textField}
                  fullWidth
                  label="Nombre Completo"
                  name="name"
                  type="text"
                  error={hasError("name")}
                  helperText={hasError("name") ? errors.msg : null}
                  variant="outlined"
                  value={formValues.name}
                  onChange={handleInputChange}
                />
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
                  Registrar
                </Button>
                <br />
                <Typography color="textSecondary" variant="body1">
                  Ya tienes cuenta?{" "}
                  <Link
                    component={RouterLink}
                    to="/sign-in"
                    variant="h6"
                    color="secondary"
                  >
                    Iniciar Sesion
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
