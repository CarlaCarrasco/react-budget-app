import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  h2: {
    marginTop: '0'
  },
}));

export const BudgetName = props => {
   const classes = useStyles();

    return (
        // <form className={classes.root} noValidate autoComplete="off">
        //     <TextField fullWidth id="filled-basic" name="expense" label="Add expense..." variant="filled" />
        // </form>
        <h2 className={classes.h2}>D.I.Y Peloton</h2>
    );
}