import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';

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
  },
  textField: {
    maxWidth: 500,
  }
}));

export const BudgetName = props => {
   const classes = useStyles();
   const [edit, setEdit] = useState(false);
   const [name, setName] = useState(`What is your budget for?`);
   const editClicked = () => edit ? setEdit(false) : setEdit(true);

    if(edit) {
      return(
        <div className={classes.flex}>
          <TextField className={classes.textField} 
          fullWidth id="standard-basic" 
          name="expense" label="Add expense..."
          onChange={(e) => setName(e.target.value)}
          onKeyPress={(e) => {if(e.key === 'Enter') editClicked()}}          
          />
          <AddIcon className={classes.editIcon} 
            onClick={editClicked}/>
          </div>
      );
    }
    else {
      return(
          <div className={classes.flex}>
          <h2 className={classes.h2}>{name}</h2>  
          <EditIcon className={classes.editIcon} 
          onClick={editClicked}/>
        </div>
      );
    }
        // <form className={classes.root} noValidate autoComplete="off">
        //     <TextField fullWidth id="filled-basic" name="expense" label="Add expense..." variant="filled" />
        // </form>
          
}