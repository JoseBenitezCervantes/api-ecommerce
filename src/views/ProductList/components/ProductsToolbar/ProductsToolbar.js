import React from "react";
import { makeStyles } from "@material-ui/styles";
import Order from "./Order/Order";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  row: {
    height: "42px",
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(1),
  },
  spacer: {
    flexGrow: 1,
  },
  importButton: {
    marginRight: theme.spacing(1),
  },
  exportButton: {
    marginRight: theme.spacing(1),
  },
  searchInput: {
    marginRight: theme.spacing(1),
  },
}));

const ProductsToolbar = (props) => {
  const classes = useStyles();

  return (
      <div className={classes.row}>
        <span className={classes.spacer} />
        <div className={classes.searchInput}>
          <Order />
        </div>
      </div>
  );
};

export default ProductsToolbar;
