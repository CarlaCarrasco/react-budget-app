import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '40vw',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'row'
  },
  addIcon: {
      padding: '5px',
      border: '1px solid #7e7e7e',
      color: '#7e7e7e'
     
  }
}));

export const InputExpense = props => {
    const {addExpense, setExpense} = props;
    const [addExp, setExp] = useState('');
    const [addAmt, setAmt] = useState('');
    const classes = useStyles();
    const submitAmount = (e) => {
      setExpense(addExpense => [...addExpense, {expense: addExp, amount: addAmt}]);
      setAmt('');
      setExp('');
    }

    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={submitAmount}>
            <TextField 
            fullWidth id="standard-basic" 
            name="expense" label="Add expense..." 
            className='input-expense'
            value={addExp}
            onChange={(e) => setExp(e.target.value)}
            />
            <TextField 
              id="standard-basic" 
              name="expense" label="Amount" 
              className="exp-amount"
              value={addAmt}
              type="number"
              onChange={(e) => setAmt(parseFloat(e.target.value))}
              onKeyPress={(e) => {
                if(e.key === 'Enter') { 
                  submitAmount(e)
            }}} 
            />
            <IconButton>
              <AddIcon className={classes.addIcon} type='submit' onClick={(e) => submitAmount(e)}/>
            </IconButton>
        </form>
    );
}