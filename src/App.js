import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
function App() {
  return (
    // inside Global provider.we did all so that
    // we can use the children data everywhere.
    <GlobalProvider>
    <div >
    <Header/>
    <div className='container'>
    <Balance/>
    <IncomeExpenses/>
    <TransactionList/>
    <AddTransaction/>
    </div>
    </div>
    </GlobalProvider>
  );
}

export default App;
