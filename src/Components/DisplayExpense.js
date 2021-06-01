import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

export const DisplayExpense = props => {
    const {addExpense} = props;
    const listExpense = addExpense.map((exp, i) => <li key={i}>{exp}</li>);

    const classes = useStyles();

    return (
        <div className={classes.root} noValidate autoComplete="off">
            <ul>
                {listExpense}
            </ul>
        </div>
    );
}