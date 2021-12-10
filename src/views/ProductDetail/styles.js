const { makeStyles } = require("@material-ui/styles");

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(4, 2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "90%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  description: {
    width: "90%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  marginLeftDdl: {
    marginLeft: theme.spacing(1),
  },
}));


export default useStyles