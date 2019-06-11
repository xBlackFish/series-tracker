import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300
  },
  textFieldsGroup: {
    display: "flex",
    flexDirection: "column",
    margiBottom: 12
  },
  button: {
    margin: theme.spacing(1)
  },
  paper: {
    position: "absolute",
    width: 400,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transform: `translate(50%, 50%)`,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: "none",
  }
}));

const SignInModal = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div>
     <Button onClick={handleOpen} variant="contained" color="primary" className={classes.button}>
          Sign In
        </Button>
      <Modal
        aria-labelledby="sign-in-modal-title"
        aria-describedby="sign-in-modal-description"
        open={open}
        onClose={handleClose}
      >
        <form>
          <div className={classes.paper}>
            <div className={classes.textFieldsGroup}>
              <TextField
                id="email"
                label="email"
                className={classes.textField}
                value={values.email}
                onChange={handleChange("email")}
                margin="normal"
              />
              <TextField
                id="password"
                label="Password"
                type="password"
                className={classes.textField}
                value={values.password}
                onChange={handleChange("password")}
                margin="normal"
              />
              <TextField
                id="confirm-password"
                label="Confirm Password"
                type="password"
                className={classes.textField}
                value={values.confirmPassword}
                onChange={handleChange("confirmPassword")}
                margin="normal"
              />
            </div>
            <div>
              <Button
                onClick={handleClose}
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Sign In
              </Button>
              <Button
                onClick={handleClose}
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Cancel
              </Button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default SignInModal;
