import React from "react";
import { IconButton, Grid, Typography } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ProductsToolbar from "./components/ProductsToolbar/ProductsToolbar";
import ProductCard from "./components/ProductCard/ProductCard";
import Carousel from "components/Carousel/Carousel";
import { useFetch } from "hooks/useFetch";
import useStyles from "./styles";

const ProductList = () => {
  const classes = useStyles();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const category = urlParams.get("category");
  const url = category
    ? `https://fakestoreapi.com/products/category/${category}`
    : `https://fakestoreapi.com/products/?limit=10`;

  const { data, loading, error } = useFetch(url);

  return (
    <div className={classes.heroContent}>
      <div className={classes.root}>
        <Carousel />
        <ProductsToolbar />
        {!loading && !error && data?.data?.length !== 0 ? (
          <div className={classes.content}>
            <Grid container spacing={3}>
              {data.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </Grid>
          </div>
        ) : (
          <h4>Cargando Productos</h4>
        )}

        <div className={classes.pagination}>
          <Typography variant="caption">1-6 of 20</Typography>
          <IconButton aria-label="Left Icon" id="ClickLeftIcon">
            <ChevronLeftIcon />
          </IconButton>
          <IconButton aria-label="Right Icon" id="ClickRightIcon">
            <ChevronRightIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
