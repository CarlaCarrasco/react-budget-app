import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 200,
      height: 100,
      background: '#f6826f6e',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
      marginBottom: 10
    },
    pos: {
      marginBottom: 12,
    },
  });

export const Expenses = props => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Expenses
            </Typography>
            <Typography variant="h5" component="h2">
              0.00
            </Typography>
            {/* <Typography className={classes.pos} color="textSecondary">
              adjective
            </Typography> 
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography> */}
          </CardContent>
          {/* <CardActions>
            <Button size="small" style={{margin: 'auto'}}>Edit</Button>
          </CardActions> */}
        </Card>
      );

    // return (
    // <div>
    //     <h2>Expenses Total</h2>
    //     <span>{props.expensesTotal}</span>
    // </div>);
}