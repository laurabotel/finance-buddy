import { TextField, Avatar, Box } from '@mui/material';
import StickyHeadTable from './UserOutput';
import { useState, useEffect } from 'react';

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

  return (
    <div className='Dashboard'>
      <Box>
        <Avatar
          {...stringAvatar('First Last')}
          alt='First Last'
          src='/broken-image.jpg'
        />
        {/* target retirement amount */}
        <TextField
          id='outlined-basic'
          label='Outlined'
          aria-describedby='targetRetirementAmount'
          variant='outlined'
          onBlur={handleTarget}
          value={1000000}
        />
        <span id='targetRetirementAmount'>Target Retirement Amount</span>
        {/*annual income amount */}
        <TextField
          id='outlined-basic'
          label='Outlined'
          aria-describedby='userAnnualIncome'
          variant='outlined'
          onBlur={handleIncome}
          value={115000}
        />
        <span id="userAnnualIncome">We'll never share your email.</span>
        {/* annual expenses  */}
        <TextField
          id='outlined-basic'
          label='Outlined'
          aria-describedby='userAnnualExpenses'
          variant='outlined'
          onBlur={handleExpenses}
          value={40000}
        />
        <span id='userAnnualExpenses'>Estimated Annual Expenses</span>
        {/* custom */}
        <TextField
          id='outlined-basic'
          label='Outlined'
          aria-describedby='incomeGrowthRate'
          variant='outlined'
          onBlur={handleGrowthRate}
          value={3}
        />
        <span id='my-helper-text'>incomeGrowthRate.</span>
        <StickyHeadTable
          targetRetirement={targetRetirement}
          annualExpenses={annualExpenses}
          userAnnualIncome={userAnnualIncome}
          incomeGrowthRate={incomeGrowthRate}
        />
      </Box>
    </div>
  );
}
