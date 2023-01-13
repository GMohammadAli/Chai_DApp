import React, { useState } from "react";
import { ethers } from "ethers";

const Buy = ({ state }) => {
  const [formData, setFormData] = useState({});
//   console.log(state)
  const BuyChai = async (e) => {
    e.preventDefault();
    const {contract} = state;
    setFormData({
      name: e.target.name.value,
      message: e.target.message.value,
    });
    console.log(contract)
    
    const amount = { value: ethers.utils.parseEther("0.001") };
    const transaction = await contract.buyChai(
      formData.name,
      formData.message,
      amount
    );
    await transaction.wait();

    console.log("Transaction is Done");
  };

  return (
    <form onSubmit={BuyChai}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" placeholder="Enter Your Name" />
      <label htmlFor="message">Message</label>
      <input type="text" id="message" placeholder="Enter Your Message" />
      <button type="submit">Pay</button>
    </form>
  );
};

export default Buy;
