import * as React from 'react';
import { Avatar,Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box,Typography,Container 
 } from '@mui/material';
 import { useNavigate } from 'react-router';
import { createTheme, ThemeProvider } from '@mui/material';
import Header from '../components/nav';
const centerDivStyle = {
  display: 'flex',
  justifyContent:'center',
  alignItems:'center',
  height: '100vh'
};
const sections = [
    { title: 'Technology', url: '#' },
    { title: 'Design', url: '#' },
    { title: 'Culture', url: '#' },
    { title: 'Business', url: '#' },
    { title: 'Politics', url: '#' },
    { title: 'Opinion', url: '#' },
    { title: 'Science', url: '#' },
    { title: 'Health', url: '#' },
    { title: 'Style', url: '#' },
    { title: 'Travel', url: '#' },
  ];
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
       Home
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


export default function Home() {

 const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    fetch(`http://localhost:4000/login/signin`)
    .then((data) => data.json()
    )
    .then((data) => {
      console.log(data);
      navigate('/dashboard')
      
    });







  };

  return (
    <ThemeProvider theme={defaultTheme}>

        <div>
           
            <Header title="Finance Buddy" sections={sections} />
      <div style={centerDivStyle}>
      <Container component="main" maxWidth="xs" style={{border: '1px solid white',}}>
        <CssBaseline />

        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      </div>
      </div>
    </ThemeProvider>
  );
}