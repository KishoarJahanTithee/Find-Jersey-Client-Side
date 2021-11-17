import {Alert, Button, CircularProgress, Container, Grid, TextField, Typography} from "@mui/material";
import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import './Register.css';


const Register = () => {
  const [loginData, setLoginData] = useState({});

  const {user, registerUser, isLoading, authError} = useAuth();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = {...loginData};
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("password didn't match");
      return;
    }
    registerUser(loginData.email, loginData.password);
    e.preventDefault();
  };

  return (
    <Container>
      <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
          <img style={{width: "100%", height: "80%"}} src="https://image.freepik.com/free-vector/secure-login-concept-illustration_114360-4685.jpg" alt="" />
        </Grid>
        <Grid item sx={{mt: 8}} xs={12} md={6}>
          <Typography className="reg-title" variant="" gutterBottom >
            Plaese Register
          </Typography>

          { !isLoading && <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{width: "75%", m: 1}}
              id="standard-basic"
              label="Your Email"
              type="email"
              name="email"
              onChange={handleOnChange}
              variant="standard"
            />
            <TextField
              sx={{width: "75%", m: 1}}
              id="standard-basic"
              label="Password"
              type="password"
              name="password"
              onChange={handleOnChange}
              variant="standard"
            />
            <TextField
              sx={{width: "75%", m: 1}}
              id="standard-basic"
              label="Re-type Password"
              type="password"
              name="password2"
              onChange={handleOnChange}
              variant="standard"
            />

            <Button sx={{width: "75%", m: 1, backgroundColor: 'gray'}} variant="contained" type="submit">
              Register
            </Button>

            <NavLink to="/login" style={{textDecoration: "none"}}>
              <Button variant="text" type="submit">
                Already registered? Please Login
              </Button>
            </NavLink>
          </form>}
          {isLoading && <CircularProgress />}
          {user?.email && <Alert severity="success">Congratulations! User created successfully.</Alert>}
          {authError && <Alert severity="error">{authError}</Alert>
}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
