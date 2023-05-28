import * as React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";

const columns = [
  {
    id: "annualIncome",
    label: "Annual\u00a0Income",
    minWidth: 170,
    format: (value) => value.toFixed(2),
  },
  {
    id: "annualExpense",
    label: "Annual\u00a0Expenses",
    minWidth: 100,
    format: (value) => value.toFixed(2),
  },
  {
    id: "annualSavings",
    label: "Annual\u00a0Saved",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "differenceTotal",
    label: "Remaining\u00a0Until\u00a0Retirement",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
//   {
//     id: "targetRetirement",
//     label: "Target\u00a0Retirement",
//     minWidth: 170,
//     align: "right",
//     format: (value) => value.toFixed(2),
//   },
//   {
//     id: "lifetimeSaved",
//     label: "Lifetime\u00a0Saved",
//     minWidth: 170,
//     align: "right",
//     format: (value) => value.toFixed(2),
//   },
];

// function calculateAnnualSavings(userIncome, userExpenses, targetRetirement) {
//   let userSaved = userIncome - userExpenses;
//   let targetRemaining = targetRetirement - userSaved;
//   return { userIncome, userExpenses, userSaved, targetRemaining };
// }

// function calculateAnnualSavings(
//   annualIncomes,
//   annualExpense,
//   targetRetirement
// ) {
//   const totalAnnualIncome = annualIncomes.reduce(
//     (sum, income) => sum + income,
//     0
//   );
//   let annualSavings = totalAnnualIncome - annualExpense;

//   while (targetRetirement > annualSavings) {
//     targetRetirement -= annualSavings;
//   }

//   return annualSavings;
// }

// const rows = [
//   calculateAnnualSavings(80000, 40000),
//   calculateAnnualSavings(85000, 40000,),
//   calculateAnnualSavings(90000, 40000),
//   calculateAnnualSavings(95000, 40000),
//   calculateAnnualSavings(100000, 40000),
//   calculateAnnualSavings("Australia", "AU", 25475400, 7692024),
//   calculateAnnualSavings("Germany", "DE", 83019200, 357578),
//   calculateAnnualSavings("Ireland", "IE", 4857000, 70273),
//   calculateAnnualSavings("Mexico", "MX", 126577691, 1972550),
//   calculateAnnualSavings("Japan", "JP", 126317000, 377973),
//   calculateAnnualSavings("France", "FR", 67022000, 640679),
//   calculateAnnualSavings("United Kingdom", "GB", 67545757, 242495),
//   calculateAnnualSavings("Russia", "RU", 146793744, 17098246),
//   calculateAnnualSavings("Nigeria", "NG", 200962417, 923768),
//   calculateAnnualSavings("Brazil", "BR", 210147125, 8515767),
// ];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

//   testing gpt
function calculateRetirementChart(
  initialIncome,
  annualExpense,
  targetRetirement
) {
  let year = 1;
  let annualIncome = initialIncome;
  let annualSavings = annualIncome - annualExpense;
  let differenceTotal = targetRetirement - annualSavings;
  const chartData = [];

  do {
    chartData.push({
      year,
      annualIncome,
      annualExpense,
      annualSavings,
      differenceTotal,
    });

    year++;
    annualIncome *= 1 + annualIncomeIncreasePercentage / 100;
    annualSavings = annualIncome - annualExpense;
    differenceTotal = differenceTotal - annualSavings;
  } while (differenceTotal > 0);

  chartData.push({
    year,
    annualIncome,
    annualExpense,
    annualSavings,
    differenceTotal,
  });

  return chartData;
}

// Example usage:
const initialIncome = 80000; // Initial annual income
const annualExpense = 40000; // Annual expense (fixed)
const targetRetirement = 200000; // Target retirement amount
const annualIncomeIncreasePercentage = 5;

const rows = calculateRetirementChart(
  initialIncome,
  annualExpense,
  targetRetirement
);
console.log(rows);


  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
