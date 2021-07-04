import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '40vw',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'row'
  },
  addIcon: {
      marginTop: '10px',
      marginLeft: '10px',
      padding: '5px',
      border: '1px solid #7e7e7e',
      color: '#7e7e7e'
     
  }
}));

export const InputExpense = props => {
    const {addExpense, setExpense} = props;
    const [addExp, setExp] = useState();
    const [addAmt, setAmt] = useState();
    //const {addAmount, setAmount} = props;

    const classes = useStyles();
    //const [addExpense, setExpense] = useState([]);


    // const submitExpense = (e) => {
    //   setExpense(addExpense => [...addExpense, e]);
    // }

    const submitAmount = () => {
      setExpense(addExpense => [...addExpense, {expense: addExp, amount: addAmt}]);
      console.log(addExpense);
      //setAmount(addAmount => [...addAmount, e]);
    }

    return (
        <div className={classes.root} noValidate autoComplete="off">
            <TextField 
            fullWidth id="standard-basic" 
            name="expense" label="Add expense..." 
            className='input-expense'
            onChange={(e) => setExp(e.target.value)}
            onKeyPress={(e) => {
              if(e.key === 'Enter') { 
                let inputVal = e;
                //setExp(e.target.value);
                inputVal.target.value = '';
            }}} 
            />
            <TextField 
              id="standard-basic" 
              name="expense" label="Amount" 
              className="exp-amount"
              type="number"
              onChange={(e) => setAmt(parseFloat(e.target.value))}
              onKeyPress={(e) => {
                if(e.key === 'Enter') { 
                  let inputVal = e;
                  //setAmt(e.target.value)
                  submitAmount()
                  inputVal.target.value = '';
            }}} 
            />
            <AddIcon className={classes.addIcon} />
        </div>
    );
}