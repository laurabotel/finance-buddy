import { TextField, Avatar, Box } from "@mui/material";
import StickyHeadTable from "./UserOutput";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

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
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export default function UserDashboard() {
  return (
    <div className="Dashboard">
      <Box>
        <Avatar
          {...stringAvatar("First Last")}
          alt="First Last"
          src="/broken-image.jpg"
        />
        {/* target retirement amount */}
        <TextField
          id="outlined-basic"
          label="Outlined"
          aria-describedby="targetRetirementAmount"
          variant="outlined"
        />
        <span id="targetRetirementAmount">Target Retirement Amount</span>
        {/*annual income amount */}
        <TextField
          id="outlined-basic"
          label="Outlined"
          aria-describedby="userAnnualIncome"
          variant="outlined"
        />
        <span id="userAnnualIncome">We'll never share your email.</span>
        {/* annual expenses  */}
        <TextField
          id="outlined-basic"
          label="Outlined"
          aria-describedby="userAnnualExpenses"
          variant="outlined"
        />
        <span id="userAnnualExpenses">Estimated Annual Expenses</span>
        {/* custom */}
        <TextField
          id="outlined-basic"
          label="Outlined"
          aria-describedby="my-helper-text"
          variant="outlined"
        />
        <span id="my-helper-text">We'll never share your email.</span>
        <StickyHeadTable />
      </Box>
    </div>
  );
}
