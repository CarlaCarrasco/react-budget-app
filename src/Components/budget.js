import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles({
    root: {
      minWidth: 200,
      height: 100,
      background: '#1BDD826B'
    },
    title: {
      fontSize: 14,
      marginBottom: 10,
      marginLeft: 5
    },
    pos: {
      marginBottom: 12,
    },
    editIcon: {
      marginLeft: 10,
      color: '#5f5f5f',
      fontSize: '1rem'
    },
    flex: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
    }
  });

export const Budget = props => {
    const classes = useStyles();
    return (
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <div className={classes.flex}>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Budget
              </Typography>
              <EditIcon className={classes.editIcon}/>
              </div>
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
    //     <h2>Budget Total</h2>
    //     <span>{props.budgetTotal}</span>
    // </div>);
}