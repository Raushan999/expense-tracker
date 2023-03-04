import React,{createContext, useReducer} from 'react'
import AppReducer from './AppReducer'
// inital state
const initialState ={
    // intially keep everything a empty arrry(no history).(to take data from user.)
    transactions: 
    [
        //   { id: 1, text: 'Flower', amount: -20 },
        //   { id: 2, text: 'Salary', amount: 300 },
        //   { id: 3, text: 'Book', amount: -10 },
        //   { id: 4, text: 'Camera', amount: 150 }
        ]
}

// create context.
export const GlobalContext = createContext(initialState)

// provider component
export const GlobalProvider = ({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initialState);
// provider provides info to the components it is rapped around.
  
/// ACTION - will make call to reducer
// this function will take an id-to know which item to delete
// use-reducer for dispatching clicked object
 function deleteTransaction(id){
   dispatch({
    type: 'DELETE_TRANSACTION',
    payload: id
   })
 }

 /*to add new transaction.it will take transaction 
 rather than id(delete_tranasaction) and payload will 
 be the transaction itself.
 */

 function addTransaction(transaction){
    dispatch({
     type: 'ADD_TRANSACTION',
     payload: transaction
    })
  }
return(
        <GlobalContext.Provider value ={{
            transactions: state.transactions,
            // providing global context for deletion.
            deleteTransaction,
            // FOR ADDING NEW TRANASACTION
            addTransaction

        }}>
            {children}
        </GlobalContext.Provider>
    )
}