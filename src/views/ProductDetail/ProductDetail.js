import React from "react";
import Typography from "@material-ui/core/Typography";
import Carousel from "components/Carousel/Carousel";
import { Button, Grid } from "@material-ui/core";
import { useFetch } from "hooks/useFetch";
import useStyles from "./styles";
import { setUserList } from "../../store/slices/products";
import { useDispatch } from "react-redux";

const ProductDetail = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get("id");

  const url = `https://fakestoreapi.com/products/${product}`;
  const { data, loading, error } = useFetch(url);

  if (loading || error || data?.data?.length === 0) {
    return <h4>Cargando Producto ... </h4>;
  }

  const { title, price, description, category, id } = data;

  const onAddCart = () => {
    dispatch(setUserList({title, price, id}));
  };
  return (
    <div className={classes.heroContent}>
      <Grid container>
        <Grid item xs={12} sm={7} md={7} lg={7}>
          <Carousel dataParam={[data, data, data]} />
        </Grid>
        <Grid item xs={12} sm={5} md={5} lg={5}>
          <div className={classes.paper}>
            <form className={classes.form} noValidate>
              <Typography id="productName" variant="h1">
                {title}
              </Typography>
            </form>
            <form className={classes.form} noValidate>
              <Typography id="productPrice" variant="h3">
                $ {price}
              </Typography>
            </form>
            <form className={classes.description} noValidate>
              <Typography id="description" variant="h4">
                {category}
              </Typography>
              <div className={classes.form} noValidate>
                <Typography id="descriptionContent" variant="h5">
                  {description}
                </Typography>
              </div>
            </form>
            <form className={classes.description} noValidate>
              <Button
                fullWidth
                color="secondary"
                variant="outlined"
                id="payCart"
                onClick={() => onAddCart()}
              >
                Agregar al carrito
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductDetail;
