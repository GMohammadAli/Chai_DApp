import React, { useEffect, useState } from 'react';

const Memos = ({ state }) => {
    const [memos, setMemos] = useState([])
    const {contract} = state;

    useEffect(() => {
        const memosMessage= async () => {
            const memos = await contract.getMemos();
            setMemos(memos);
        } 
        contract && memosMessage()
    },[contract,memos])
  return (
    <div>
      {memos.map((memo) => {
        return(
            <table>
                <tbody>
                    <tr>
                        <td>{memo.name}</td>
                        <td>{memo.message}</td>
                    </tr>
                </tbody>
            </table>
        )
      })}
    </div>
  );
}

export default Memos;
