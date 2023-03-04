import React,{useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

function AddTransaction() {
    const [text,setText] = useState('');
    const [amount,setAmount]=useState(0);
 
    /// taking only add transaction action from globalcontext.
    const {addTransaction} =useContext(GlobalContext)
  
    // submit function for adding new transaction
    const onSubmit = (e)=>{
        e.preventDefault();

        // new transaction object
        const newTransaction = {
            id: Math.floor(Math.random()*100000),
            text,
            amount: +amount // for making amount a number earlier it was
                            // being added as string.
           
        }
        // passing the updated transaction list
        addTransaction(newTransaction)
    }
  
    return (
    <>
    <h3>Add new transaction</h3>
    <form onSubmit={onSubmit}>
        <div className='form-control'>
            <label htmlFor='text'>Text</label>
            <input 
            type="text" 
            value ={text} 
            onChange= {(e)=>setText(e.target.value)}
            placeholder='Enter text...'/>
        </div>
        <div className='form-control'>
            <label htmlFor='amount'>Amount<br/>
            (negative - expense, positive - income)</label>
            <input 
            type ="number" 
            value={amount}
            onChange={(e)=>setAmount(e.target.value)}
            placeholder='Enter amount..'/>
        </div>
        <button className='btn'>Add transaction</button>
    </form>
    </>
  )
}

export default AddTransaction