import * as React from 'react';
import { TextField, Box } from '@mui/material';
import StickyHeadTable from './UserOutput';
import { useState, useEffect } from 'react';
// import Header from "../components/nav";
import {Button, CssBaseline, FormControlLabel, Checkbox, Link, Grid,Typography,Container 
 } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';

const centerDivStyle = {
  display: 'flex',
  justifyContent:'center',
  alignItems:'center',
  height: '100vh'
};
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

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

export default function UserDashboard() {
  
  const [targetRetirement, setTarget] = useState(200000);
  const [userAnnualIncome, setUserAnnualIncome] = useState(80000);
  const [annualExpenses, setAnnualExpenses] = useState(40000);
  const [incomeGrowthRate, setIncomeGrowthRate] = useState(2);

  const handleTarget = (event) => {
    console.log(event.target.value);
    setTarget(event.target.value);
  };

  const handleIncome = (event) => {
    console.log(event.target.value);
    setUserAnnualIncome(event.target.value);
  };

  const handleExpenses = (event) => {
    console.log(event.target.value);
    setAnnualExpenses(event.target.value);
  };

  const handleGrowthRate = (event) => {
    console.log(event.target.value);
    setIncomeGrowthRate(event.target.value);
  };
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }
  return (
    <ThemeProvider theme={defaultTheme}>
    <div style={{marginTop:"150px"}}>

    {/* <Header title="Finance Buddy" sections={sections} /> */}
      <div style={centerDivStyle}>


      
      <Container component="main" maxWidth="50" style={{border: '1px solid white',}}>
   
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            justifyContent: "center",
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        {/* target retirement amount */}
 
        <Typography component="h1" variant="h5">Target Retirement Amount</Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>

        <TextField
          id='outlined-basic'
          label='Outlined'
          aria-describedby='targetRetirementAmount'
          variant='outlined'
          onBlur={handleTarget}
          value={1000000}
        />
        </Box>
        <Typography component="h1" variant="h5"> Total Annual Income </Typography> 
        <Box component="form" noValidate sx={{ mt: 1 }}>
        {/*annual income amount */}
        <TextField
          id='outlined-basic'
          label='Outlined'
          aria-describedby='userAnnualIncome'
          variant='outlined'
          onBlur={handleIncome}
          value={115000}
        />
        </Box>
        <Typography component="h1" variant="h5">Estimated Annual Expenses</Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
        {/* annual expenses  */}
        <TextField
          id='outlined-basic'
          label='Outlined'
          aria-describedby='userAnnualExpenses'
          variant='outlined'
          onBlur={handleExpenses}
          value={40000}
        />
        </Box>
        <Typography component="h1" variant="h5">Income Growth Rate for year</Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
        {/* custom */}
        <TextField
          id='outlined-basic'
          label='Outlined'
          aria-describedby='incomeGrowthRate'
          variant='outlined'
          onBlur={handleGrowthRate}
          value={3}
        />
        </Box>
        
        <StickyHeadTable
          targetRetirement={targetRetirement}
          annualExpenses={annualExpenses}
          userAnnualIncome={userAnnualIncome}
          incomeGrowthRate={incomeGrowthRate}
        />
      </Box>
      </Container>
      </div>
    </div>
    </ThemeProvider>
  );
  
}