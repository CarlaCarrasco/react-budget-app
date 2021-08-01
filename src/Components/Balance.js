import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 200,
      height: 100,
      background: '#cecece',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
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
  });

export const Balance = props => {
    const classes = useStyles();
    const {addExpense, budgetTotal} = props;
    const total = addExpense.reduce(function (accumulator, currentValue) { 
      return accumulator + currentValue.amount
    }, 0.00)
    
    return (
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Balance
            </Typography>
            <Typography variant="h5" component="h2">
            {'$' + parseFloat(budgetTotal - total).toFixed(2)}
            </Typography>
          </CardContent>
        </Card>
      );
}