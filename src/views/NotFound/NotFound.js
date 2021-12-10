import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import useStyles from "./styles";

const NotFound = (props) => {
  const classes = useStyles();
  const { history } = props;
  const handleBack = () => {
    history.goBack();
  };
  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={4}>
        <Grid item lg={6} xs={12}>
          <div className={classes.content}>
            <Typography variant="h1">
              404: La pagina que estas buscando no se encuentra.
            </Typography>

            <Button
              fullWidth
              size="large"
              variant="outlined"
              color="secondary"
              onClick={handleBack}
              aria-label="Regresar"
              id="BackNotFound"
            >
              Regresar
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default NotFound;
