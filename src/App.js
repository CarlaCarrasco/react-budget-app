import './App.css';
import {Budget} from './Components/budget';
import {Expenses} from './Components/expenses';
import {InputExpense} from './Components/inputExpense';



function App() {
  return (
    <div className="App">
      <div className="totals">
        <Budget budgetTotal={200.00}/>
        <Expenses expensesTotal={100.00}/>
      </div>
      <InputExpense />
    </div>
  );
}

export default App;
