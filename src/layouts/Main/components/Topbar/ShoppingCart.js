import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Grid } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import useStyles from "./Styles";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserList } from "../../../../store/slices/products";
import { DeleteRounded } from "@material-ui/icons";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const { list } = useSelector((state) => state.products);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onDelete = (id) => {
    dispatch(deleteUserList(id));
  };

  return (
    <div>
      <IconButton
        aria-label="Abrir Carrito"
        id="CartIcon"
        onClick={handleClickOpen}
      >
        <Badge badgeContent={list.length} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Productos
            </Typography>
            <IconButton
              aria-label="Cerrar"
              id="CloseIcon"
              autoFocus
              color="secondary"
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <List>
          {list.length ? (
            list.map((item, key) => (
              <ListItem key={key} button>
                <ListItemText
                  primary={item.title}
                  secondary={`$ ${item.price}`}
                />
                <IconButton onClick={() => onDelete(item.id)}>
                  <DeleteRounded />
                </IconButton>
              </ListItem>
            ))
          ) : (
            <Typography variant="h4">Sin Productos</Typography>
          )}
          <Divider />
        </List>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={3} lg={3}></Grid>
          {!!list.length && (
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <RouterLink to="/Checkout">
                <Button
                  fullWidth
                  color="secondary"
                  variant="outlined"
                  aria-label="Pagar"
                  id="payCart"
                  onClick={handleClose}
                >
                  Pagar
                </Button>
              </RouterLink>
            </Grid>
          )}
          <Grid item xs={12} sm={12} md={3} lg={3}></Grid>
        </Grid>
      </Dialog>
    </div>
  );
}
