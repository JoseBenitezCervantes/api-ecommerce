import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default useStyles;
