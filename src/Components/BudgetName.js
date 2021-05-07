import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  h2: {
    marginTop: '0'
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  editIcon: {
    margin: '5px 0 0 10px',
    color: '#5f5f5f',
    fontSize: '1.2rem'
  }
}));

export const BudgetName = props => {
   const classes = useStyles();

    return (
        // <form className={classes.root} noValidate autoComplete="off">
        //     <TextField fullWidth id="filled-basic" name="expense" label="Add expense..." variant="filled" />
        // </form>
        <div className={classes.flex}>
          <h2 className={classes.h2}>D.I.Y Peloton</h2>
          <EditIcon className={classes.editIcon} />
        </div>
        
    );
}