import React from "react";
import { Grid } from "@material-ui/core";
import AccountProfile from "./components/AccountProfile/AccountProfile";
import useStyles from "./styles";

const Account = () => {
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item lg={4} md={6} xl={4} xs={12}>
            <AccountProfile />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Account;
