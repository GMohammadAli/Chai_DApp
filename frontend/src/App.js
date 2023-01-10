import './App.css';
import {useState, useEffect} from "react"
import abi from './contract/chai.json';

function App() {
  const [state,setState] = useState({
    provider: null,
    signer:null,
    contract: null
  });

  useEffect(() => {
    const contractWallet = async () => {
      const contractAddress = "";
    }
  })

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
