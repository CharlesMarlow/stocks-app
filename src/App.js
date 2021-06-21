import './App.css';
import StocksList from './components/StocksList';

// "proxy": "http://trautocomplete.azurewebsites.net",
// axios.get('api/Autocomplete/GetAutocomplete?name=M'


function App() {
  return (
    <div className="App">
      <h1>Stocks data</h1>
      <StocksList />
    </div>
  );
}

export default App;
