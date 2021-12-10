import React from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import "./ProductCard.sass";
const useStyles = makeStyles((theme) => ({
  image: {
    width: "100%",
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    height: 0,
    paddingTop: "56.25%", // 16:9,
    marginTop: "30",
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const ProductCard = ({ product }) => {
  const classes = useStyles();
  return (
    <Grid item key={product.id} xs={12} sm={12} md={6} lg={3}>
      <RouterLink
        to={{
          pathname: "/ProductDetail",
          search: `?id=${product.id}`,
        }}
      >
        <Card className={classes.card}>
          <div className="divImg">
            <img src={product.image} alt="" />
          </div>
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {product.title}
            </Typography>
          </CardContent>
          <CardActions>
            <Typography gutterBottom variant="h3" component="h1">
              {" "}
              $ {product.price}
            </Typography>
          </CardActions>
        </Card>
      </RouterLink>
    </Grid>
  );
};

export default ProductCard;
