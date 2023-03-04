// the file is only to make changes to the website.
// like deleting /adding new transaction.
export default (state, action) => {

  switch (action.type) {
    // creating a case for the deleting item
    case "DELETE_TRANSACTION":
      return {
        ...state, // returning the inital state.
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        )  // filtering out anything that has the id of payload.
      };
      // case for addition of new transaction.
      case 'ADD_TRANSACTION':  
      return{
           ...state,
           transactions:[action.payload,...state.transactions]
      }
    default:
      return state;
  }
};
