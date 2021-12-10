const { makeStyles } = require("@material-ui/styles");

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  titleCart: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  root: {
    boxShadow: "none",
  },
  flexGrow: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    color: "#FF452B",
  },
  titleActual: {
    color: "#FF452B",
    borderBottom: "1px solid #FF452B",
  },
  toolbarButtons: {
    marginLeft: "auto",
  },
  toolbarButtonsXl: {
    marginLeft: theme.spacing(2),
  },
  margin: {
    margin: theme.spacing(0),
  },
  textField: {
    width: "20ch",
  },
}));

export default useStyles;
