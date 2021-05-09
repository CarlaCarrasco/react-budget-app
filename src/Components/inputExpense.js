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
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField fullWidth id="standard-basic" name="expense" label="Add expense..." />
            <AddIcon className={classes.addIcon} />
        </form>
    );
}