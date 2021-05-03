import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '500px',
    margin: 'auto'
  },
}));

export const BudgetName = props => {
   //const classes = useStyles();

    return (
        // <form className={classes.root} noValidate autoComplete="off">
        //     <TextField fullWidth id="filled-basic" name="expense" label="Add expense..." variant="filled" />
        // </form>
        <h2>D.I.Y Peloton</h2>
    );
}