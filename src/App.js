/* global chrome */
import logo from './logo.svg';
import Wallet from './components/Wallet';
import './App.css';

function App() {
  console.log(chrome);

  return (
    <div className='App'>
      <Wallet />
    </div>
  );
}

export default App;
