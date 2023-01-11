import './App.css';
import {useState, useEffect} from "react"
import abi from './contract/chai.json';
import { ethers } from 'hardhat';

function App() {
  const [state,setState] = useState({
    provider: null,
    signer:null,
    contract: null
  });
 
  const [account, setAccount] = useState("None")
  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = " 0x92b20883adcd8e60243ea5d61ce78caf82be7254";
      const contractAbi = abi.abi;
      try{
        const {ethereum} = window;

        if(ethereum){
          const account = await ethereum.request({method: "eth_requestSccounts",})
        }
        const provider = new ethereum.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.ContractFactory(contractAddress,contractAbi,signer)
        setState({provider,signer,contract})
      }catch(err){
        console.log(err)
      }
    }

    connectWallet()
  },[])

  console.log(state)
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
