import React, { useState } from 'react';
import  {ethers} from "ethers"

const Buy = ({state}) => {
    const [formData, setFormData] = useState({})

    const BuyChai = async (e) => {
       e.preventDefault()
       const { contract } = state;
       setFormData({
        name: e.target.name,
        message: e.target.message
       })
      
       const amount = {value:ethers.utils.parseEther("0.001")}
       const transaction = await contract.buyChai(formData.name,formData.message,amount)
       await transaction.wait()

       console.log("Transaction is Done")
    }

  return (
    <form onSubmit={BuyChai}>
      <label for="name">Name</label>
      <input type="text" id="name" placeholder="Enter Your Name" />
      <label for="message">Message</label>
      <input type="text" id="message" placeholder="Enter Your Message" />
      <button  type="submit">Pay</button>
    </form>
  );
}

export default Buy;
