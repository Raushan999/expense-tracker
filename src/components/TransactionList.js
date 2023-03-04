import React ,{useContext} from 'react'
import  {GlobalContext}  from '../context/GlobalState'
import Transaction from './Transaction'
function TransactionList() {
    // destructuring: (to get the array-transactions)
    const {transactions} = useContext(GlobalContext)
   
    /* here we are destructuring the transaction using 
    global context and then mapping using transaction.map()
    and finally rendering the <transaction by passing the 
    property as transaction- which will be received in transaction
    file as props or {transaction} and will be used as
    props.transaction.text/or/amount or simply {transaction.text/(or)amount}
    */
  return (
    <>
    <h3>History</h3>
    <ul className='list'> 
    {transactions.map(transaction =>
    ( 
        <Transaction transaction={transaction}/>
     ))} 
    </ul>
    </>
  )
}

export default TransactionList