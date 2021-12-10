const { makeStyles } = require("@material-ui/styles");

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  content: {
    marginTop: theme.spacing(7),
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default useStyles;
