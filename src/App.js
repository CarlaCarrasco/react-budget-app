import './App.css';
import {Budget} from './Components/budget';
import {Expenses} from './Components/expenses';
import {InputExpense} from './Components/inputExpense';
import {BudgetName} from './Components/BudgetName';



function App() {
  return (
    <div className="App">
    <h1>Budget App</h1>
    <BudgetName />
      <div className="totals">
        <Budget budgetTotal={200.00}/>
        <Expenses expensesTotal={100.00}/>
      </div>
      <InputExpense />
    </div>
  );
}

export default App;
