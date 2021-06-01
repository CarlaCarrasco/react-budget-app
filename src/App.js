import React, {useState} from 'react';
import './App.css';
import {Budget} from './Components/budget';
import {Expenses} from './Components/expenses';
import {InputExpense} from './Components/inputExpense';
import {BudgetName} from './Components/BudgetName';
import {DisplayExpense} from './Components/DisplayExpense'
import Paper from '@material-ui/core/Paper';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

function App() {

  const [addExpense, setExpense] = useState([]);
  
  return (
    <div className="App">
    {/* <div><MonetizationOnIcon /></div> */}
    <h1>Budget App</h1>
      <Paper elevation={12} style={{width: '70vw', margin: 'auto', padding: 30}}>
        <BudgetName />
        <div className="totals">
          <Budget budgetTotal={200.00}/>
          <Expenses expensesTotal={100.00}/>
        </div>
        <DisplayExpense addExpense={addExpense}/>
        <InputExpense addExpense={addExpense} setExpense={setExpense}/>
      </Paper>
    </div>
  );
}

export default App;
