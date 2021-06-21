import React from 'react';
import { debounce } from '../utils/utils';
import { Input, Box, InputAdornment, Container, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import { getStocksBySearchTerm } from '../api/api';
import StockCard from './StockCard';

const useStyles = makeStyles((theme) => ({
  input: {
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20vw',
    },
  },
}));

const StocksList = () => {
  const classes = useStyles();
  const [stocks, setStocks] = React.useState([]);
  const [term, setTerm] = React.useState('');

  const onSearchChange = debounce(async (e) => {
    e.preventDefault();
    setTerm(e.target.value);

    const stocksResponse = await getStocksBySearchTerm(e.target.value);
    setStocks(stocksResponse);
  });

  const renderSearchInput = () => {
    return (
      <Box>
        <Input
          id='standard-search'
          label='Search field'
          type='search'
          defaultValue={''}
          onChange={(e) => onSearchChange(e)}
          className={classes.input}
          startAdornment={
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          }
        />
      </Box>
    );
  };

  const renderStockCard = () => {
    if (stocks && stocks.length > 0) {
      return (
        <Grid container spacing={2}>
          {stocks.map((stock, index) => (
            <Grid key={stock.uid} item lg={4} xs={12}>
                  <StockCard stock={stock} index={index}/>
            </Grid>
          ))}
        </Grid>
      );
    }
  };

  return (
    <Container>
      {renderSearchInput()}
      {renderStockCard()}
    </Container>
  );
};

export default StocksList;
