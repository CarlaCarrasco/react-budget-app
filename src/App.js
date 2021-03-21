import './App.css';
import {Budget} from './Components/budget';
import {Expenses} from './Components/expenses';


function App() {
  return (
    <div className="App">
      <div className="totals">
        <Budget total={200.00}/>
        <Expenses total={200.00}/>
      </div>
    </div>
  );
}

export default App;
