import './App.css';
import {Budget} from './Components/budget';
import {Expenses} from './Components/expenses';
import {InputExpense} from './Components/inputExpense';
import {BudgetName} from './Components/BudgetName';
import Paper from '@material-ui/core/Paper';


function App() {
  return (
    <div className="App">
    <h1>Budget App</h1>
      <Paper elevation={12} style={{width: '70vw', margin: 'auto', padding: 30}}>
        <BudgetName />
        <div className="totals">
          <Budget budgetTotal={200.00}/>
          <Expenses expensesTotal={100.00}/>
        </div>
        <InputExpense />
      </Paper>
    </div>
  );
}

export default App;
