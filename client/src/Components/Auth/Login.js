import React, { useState, useEffect, useContext } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import AlertContext from "../../Context/Alert/alertContext";
import AuthContext from "../../Context/Auth/authContext";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "30ch"
    }
  }
}));

const Login = props => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const { email, password } = user;

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const authContext = useContext(AuthContext);
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
    if (error === "Invalid Credentials") {
      setAlert(error, "warning");
      clearErrors();
    }
    if (error === "Internal Server Error") {
      setAlert(error, "error");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const clearForm = e => {
    setUser({
      email: "",
      password: ""
    });
  };

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Please Fill All Fields", "warning");
    } else {
      login({
        email: email.toLowerCase(),
        password
      });
    }
  };

  const classes = useStyles();

  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      m={4}
    >
      <Typography variant='h2' gutterBottom>
        Login
      </Typography>
      <form onSubmit={onSubmit} className={classes.root}>
        <Box display='flex' flexDirection='column'>
          <TextField
            required
            label='Email'
            variant='outlined'
            name='email'
            value={email}
            type='email'
            onChange={onChange}
          />
          <TextField
            required
            label='Password'
            variant='outlined'
            name='password'
            type='password'
            value={password}
            onChange={onChange}
          />
          <Box display='flex' justifyContent='space-evenly'>
            <Button onClick={clearForm} color='primary'>
              Clear
            </Button>
            <Button type='submit' color='primary' value='Add Contact'>
              Login
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default Login;
