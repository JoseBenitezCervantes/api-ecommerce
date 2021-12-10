import React, { useState } from "react";
import clsx from "clsx";
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Typography,
  Divider,
  Button,
  LinearProgress,
} from "@material-ui/core";

import ChangePassword from "./ChangePassword";
import { useFetch } from "hooks/useFetch";
import useStyles from "./styles"


const AccountProfile = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { data, loading, error } = useFetch("https://fakestoreapi.com/users/1");
  if (loading || error || data?.data?.length === 0) {
    return <h4>Cargando ... </h4>;
  }

  const { email, address, name, phone } = data;

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent>
        <div className={classes.details}>
          <div>
            <Typography gutterBottom variant="h2">
              {`${name.firstname} ${name.lastname}`}
            </Typography>
            <Typography
              className={classes.locationText}
              color="textSecondary"
              variant="body1"
            >
              {`${address.city}, ${address.street}`}
            </Typography>
            <Typography
              className={classes.locationText}
              color="textSecondary"
              variant="body1"
            >
              {email}
            </Typography>
            <Typography
              className={classes.locationText}
              color="textSecondary"
              variant="body1"
            >
              {phone}
            </Typography>
          </div>
          <Avatar className={classes.avatar} />
        </div>
        <div className={classes.progress}>
          <LinearProgress value={70} variant="determinate" />
        </div>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          className={classes.uploadButton}
          color="secondary"
          variant="text"
          aria-label="Cambiar Contraseña"
          onClick={handleClickOpen}
          id="ChangePassword"
        >
          Cambiar Contraseña
        </Button>
      </CardActions>
      <ChangePassword open={open} setOpen={setOpen} />
    </Card>
  );
};

export default AccountProfile;
