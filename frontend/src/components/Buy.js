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
    <>
      <div className="container-md" style={{ width: "50%", marginTop: "25px" }}>
        <form onSubmit={BuyChai}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <input
              type="text"
              className="form-control"
              id="message"
              placeholder="Enter Your Message"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!state.contract}
          >
            Pay
          </button>
        </form>
      </div>
    </>
  );
};

export default Buy;
