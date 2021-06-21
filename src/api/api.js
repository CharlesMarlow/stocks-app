import axios from 'axios';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const getStocksBySearchTerm = async (term) => {
  const stocksApi = `api/Autocomplete/GetAutocomplete?name=${term}`;

  try {
    const response = await axios.get(stocksApi, config);
    // Return limited response
      response.data.length = 9;
      return response.data.sort((a, b) => {
            if (a.label < b.label) {
              return -1;
            }
            if (a.label > b.label) {
              return 1;
            }
            return 0;
      });
  } catch (err) {
    throw new Error('Error while fetching stocks', err);
  }
};
