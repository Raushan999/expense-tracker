// importing the useContext hook for using useContext(...)
import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

const Transaction=(props)=> {
    const sign = (props.transaction.amount < 0) ? '-': '+';

// instead of taking transaction we took only
 // the deleteTransaction action part from globalcontext.
    const {deleteTransaction} = useContext(GlobalContext)
  return (
    <li className= {props.transaction.amount<0 ? 'minus':'plus'}>
       {props.transaction.text}
         <span>{sign}${Math.abs(props.transaction.amount)}</span>
         <button  onClick={()=> deleteTransaction(props.transaction.id)}  className="delete-btn">x</button>
         {/* deleting only that specific id */}
    </li>
  )
}

export default Transaction