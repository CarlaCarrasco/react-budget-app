import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '500px',
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
    const classes = useStyles();
    //const [addExpense, setExpense] = useState([]);


    const submitExpense = (e) => {
      setExpense(addExpense => [...addExpense, e]);

    }
    return (
        <div className={classes.root} noValidate autoComplete="off">
            <TextField 
            fullWidth id="standard-basic" 
            name="expense" label="Add expense..." 
            className='input-expense'
            onKeyPress={(e) => {
              if(e.key === 'Enter') { 
                let inputVal = e;
                submitExpense(e.target.value)
                inputVal.target.value = '';
            }}} 
            />
            <AddIcon className={classes.addIcon} />
            {console.log(addExpense)}
        </div>
    );
}