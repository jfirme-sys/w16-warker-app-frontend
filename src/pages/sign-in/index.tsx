import React, { FormEvent, useContext, useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from 'providers/authProvider';
import { HTTP_STATUS } from 'consts';
import { UserCredentials } from 'modules/auth/sign-in/models';
import { login } from 'modules/auth/sign-in/services/signIn';

const theme = createTheme();

export default function SignIn() {
  const { setUserToken } = useContext(AuthContext)
  const navigate = useNavigate();
  const handleLogin = async (credentials: UserCredentials) => {
    const response = await login(credentials)
    console.log(response);

    if (response.status !== HTTP_STATUS.SUCCESS) {
      console.error("Not authorized");
      return
    }

    if (response.status === HTTP_STATUS.SUCCESS) {
      setUserToken(response.token)
      navigate('/home')
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    handleLogin({
      email: data.get('email') as string,
      password: data.get('password') as string,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
              </Grid>
              <Grid item>
                <Link to="/sign-up">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}