import React, {useState} from 'react';
import './App.css';
import {Budget} from './Components/budget';
import {Expenses} from './Components/Expenses';
import {Balance} from './Components/Balance';
import {InputExpense} from './Components/inputExpense';
import {BudgetName} from './Components/BudgetName';
import {DisplayExpense} from './Components/DisplayExpense'
import Paper from '@material-ui/core/Paper';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'


function App() {

  const [addExpense, setExpense] = useState([]); 
  const [budgetTotal, setBudget] = useState('0.00');

  
  const theme = createMuiTheme({
    overrides: {
      MuiFormLabel: {
        root: {
          "&$focused": {
            color: "#c5c5c59",
            fontWeight: "bold"
          }
        }
      }
    //   MuiInput: {
    //     underline: {
    //             '&:after': {
    //               backgroundColor: 'any_color_hex',
    //             }
    //       },
    // },
    }
  });

  
  return (
    <div className="App">
    {/* <div><MonetizationOnIcon /></div> */}
    <h1>Budget App</h1>
      <Paper elevation={12} style={{width: '70vw', margin: 'auto', padding: 30}}>
      <ThemeProvider theme={theme}>
        <BudgetName />
        <div className="totals">
          <Budget budgetTotal={budgetTotal} setBudget={setBudget}/>
          <Expenses addExpense={addExpense}/>
          <Balance addExpense={addExpense} budgetTotal={budgetTotal}/>
        </div>
        <DisplayExpense addExpense={addExpense} setExpense={setExpense}/>
        <InputExpense addExpense={addExpense} setExpense={setExpense} />
      </ThemeProvider>
        
      </Paper>
    </div>
  );
}

export default App;
