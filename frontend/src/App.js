import "./App.css";
import { useState, useEffect } from "react";
import abi from "./contract/chai.json";
import { ethers } from "ethers";
import Buy from "./components/Buy";
import Memos from "./components/Memos";
import chai from "./Images/chai.png"

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  const [account, setAccount] = useState("None");
  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0x92b20883adcd8e60243ea5d61ce78caf82be7254";
      const contractAbi = abi.abi;
      try {
        const { ethereum } = window;

        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });


          //Reloads the browser
          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });
          //Reloads the browser
          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });


          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractAbi,
            signer
          );

          
          setAccount(account);
          setState({provider,signer,contract});
        
        } else {
          alert("Please Install Metamask")
        }
      } catch (err) {
        console.log(err);
      }
    };

    connectWallet();
  }, []);

  return (
    <div style={{ backgroundColor: "#EFEFEF", height: "100%" }}>
      <img src={chai} className="img-fluid" alt=".." width="100%" />
      <p
        class="text-muted lead "
        style={{ marginTop: "10px", marginLeft: "5px" }}
      >
        <small>Connected Account - {account}</small>
      </p>
      <div className="container">
        <Buy state={state} />
        <Memos state={state} />
      </div>
    </div>
  );
}

export default App;
