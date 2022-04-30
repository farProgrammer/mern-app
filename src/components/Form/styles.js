import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: "teal",

    borderRadius: "15%",
    fontWeight: "bold",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    color: "white",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 15,
    backgroundColor: "green",
    borderRadius: "25%",
  },
}));
