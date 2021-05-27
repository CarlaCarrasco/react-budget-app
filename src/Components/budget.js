import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles({
    root: {
      minWidth: 200,
      height: 100,
      background: '#1BDD826B'
    },
    label: {
      
    },
    title: {
      fontSize: 20,
      fontWeight: 500,
      letterSpacing: 1,
      marginBottom: 5,
      marginLeft: 5
    },
    pos: {
      marginBottom: 12,
    },
    editIcon: {
      marginLeft: 3,
      marginTop: 5,
      color: '#5f5f5f',
      fontSize: '1rem'
    },
    flex: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      maxHeight: 30
    },
    h5: {
      marginLeft: 5
    },
    textField: {
      marginTop: -10
    }
  });

export const Budget = props => {
    const classes = useStyles();
    const [editAmt, setEditAmt] = useState(false);
    const [amount, setAmount] = useState('0.00');
    const editClicked = () => editAmt ? setEditAmt(false) : setEditAmt(true);
    const returnBudget = () => {
      if(editAmt) {
        return (<div className={classes.flex}>
          <TextField className={classes.textField} 
            id="standard-basic" 
            name="expense" label="Add expense..."
            onChange={(e) => setAmount(e.target.value)}
            onKeyPress={(e) => {if(e.key === 'Enter') editClicked()}} 
            type="number"         
          />
          <AddIcon className={classes.editIcon} onClick={editClicked}/>
        </div>)
      }
      else {
        return (<div className={classes.flex}>
          <Typography className={classes.h5} variant="h5" component="h2">
            {parseFloat(amount).toFixed(2)}
          </Typography>
          <EditIcon className={classes.editIcon} onClick={editClicked}/>
        </div>)
      }
    }
    return (
        <Card className={classes.root} variant="outlined">
          <CardContent>            
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Budget
              </Typography>
              {returnBudget()}
          </CardContent>
        </Card>
      );
}