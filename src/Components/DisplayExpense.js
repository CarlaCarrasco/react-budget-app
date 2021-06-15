import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';

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
    const listExpense = addExpense.map((exp, i) => <li key={i}>{exp.expense}---{exp.amount}</li>);
    console.log(addExpense)
    //console.log(addAmount);
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);

    return (
        <div className={classes.root} noValidate autoComplete="off">
            {/* <ul>
                {listExpense}
            </ul> */}
            <List dense={dense}>
                <ListItem>
                  <ListItemText
                    primary="Expense item goes here"
                    secondary="30.00"
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>,
              
            </List>
        </div>
    );
}