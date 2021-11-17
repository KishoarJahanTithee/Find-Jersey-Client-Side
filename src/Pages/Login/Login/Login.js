import React, {useState} from 'react';
import {Container, TextField, Typography, Button, CircularProgress, Alert} from "@mui/material";
import {Grid} from "@mui/material";
import {NavLink, useLocation, useHistory} from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, loginUser, isLoading, authError, signInUsingGoogle} = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
      };
    
      const handleLoginSubmit = (e) => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
      };

    return (
            <Container>
      <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
          <img style={{width: "100%"}} src="https://image.freepik.com/free-vector/access-control-system-illustration_335657-4640.jpg" alt="" />
        </Grid>
        <Grid item sx={{mt: 8}} xs={12} md={6}>
          <Typography sx={{fontSize: '1.5rem', fontWeight: '600'}} variant="body1" gutterBottom>
            Plaese Login
          </Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{width: "75%", m: 1}}
              id="standard-basic"
              label="Your Email"
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

            <Button sx={{width: "75%", m: 1, backgroundColor: "rgb(218, 120, 63)"}} variant="contained" type="submit">
              Login
            </Button>

            <NavLink to="/register" style={{textDecoration: "none"}}>
              <Button variant="text" type="submit" sx={{color: 'rgb(83, 109, 62)'}}>
                New User? Please Register
              </Button>
            </NavLink>

            <Typography variant="body1" gutterBottom>
           -----or-----
          </Typography>
          <Button onClick={signInUsingGoogle} sx={{width: "75%", m: 1, backgroundColor: "rgb(55, 55, 61)"}} variant="contained">
              Sign in with Google
            </Button>
          </form>
          {isLoading && <CircularProgress />}
          {user?.email && <Alert severity="success">User login successfull!</Alert>}
          {authError && <Alert severity="error">{authError}</Alert>
}
        </Grid>
      </Grid>
    </Container>

    );
};

export default Login;