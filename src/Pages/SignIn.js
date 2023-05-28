import * as React from 'react';
import { Avatar,Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box,Typography,Container 
 } from '@mui/material';
 import { useNavigate } from 'react-router';
import { createTheme, ThemeProvider } from '@mui/material';

const centerDivStyle = {
  display: 'flex',
  justifyContent:'center',
  alignItems:'center',
  height: '100vh'
};

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#d3dfea',
      },
      secondary: {
        main: '#f3e5f5',
      },
      background: {
        default: '#0c1035',
      },
  
      
    }
  });

// TODO remove, this demo shouldn't need to reset the theme.


export default function SignIn() {

 const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    navigate('/dashboard')
    // fetch(`http://localhost:4000/login/signin`)
    // .then((data) => data.json()
    // )
    // .then((data) => {
    //   console.log(data);
    //   navigate('/dashboard')
      
    // });







  };

  return (
    <ThemeProvider theme={defaultTheme}>
        <div>
      <div style={centerDivStyle}>
      <Container component="main" maxWidth="xs" style={{border: '1px solid white',}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {/* <LockOutlinedIcon /> */}
            </Avatar>
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
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
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      </div>
      </div>
    </ThemeProvider>
  );
}