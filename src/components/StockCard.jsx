import React from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '36px 0 36px 0',
    minWidth: 375,
    height: 200,
    cursor: 'pointer',
    backgroundColor: fade('#827a7a', 0.15),
    '&:hover': {
      backgroundColor: fade('#f0f0f0', 0.55),
    },
  },
  clickedItem: {
    cursor: 'pointer',
  },
  title: {
    fontSize: 24,
  },
  pos: {
    marginBottom: 12,
  },
}));

const StockCard = ({ stock, index }) => {
  const classes = useStyles();

  const displayAlert = (event, { title, content }) => {
    event.stopPropagation();
    alert(title + '\n' + content);
  };

  return (
    <Card
      className={classes.root}
      variant='outlined'
      onClick={(event) => displayAlert(event, { title: index + 1, content: stock.label })}
    >
      <CardContent>
        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom
        >
          Label: {stock.label}
        </Typography>
        <Typography variant='h5' component='h2'>
          Value: {stock.value}
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          Category: {stock.category}
        </Typography>
        <Typography
          variant='body2'
          component='p'
          onClick={(event) =>
            displayAlert(event, { title: 'Stock ID', content: stock.uid })
          }
          className={classes.clickedItem}
        >
          Stock ID: {stock.uid}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StockCard;
