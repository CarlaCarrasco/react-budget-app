import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '400px',
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
     
  },
  ul: {
    minWidth: '30vw'
  }
}));

export const DisplayExpense = props => {
    const {addExpense, setExpense} = props;
    const deleteExpense = (i) => {
      addExpense.splice(i,1)
      setExpense(addExpense => [...addExpense]);
    }
    const listExpense = addExpense.map((exp, i) => {
    
      return (
        <ListItem key={i}>
          <ListItemText primary={exp.expense} secondary={`$${exp.amount}`} />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete" onClick ={() => deleteExpense(i)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem> 
      );      
    })

    //console.log(addAmount);
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);

    return (
        <div className={classes.root} noValidate autoComplete="off">
            <List dense={dense} className={classes.ul}>
                {listExpense}
            </List>
        </div>
    );
}