import React, { useContext } from "react";
/*Handling the income and expense cards-so need to import the 
 Globalcontext api which will give us access to all the 
 transactions data and we will calculate the total income and 
 total expenses using const functions.
*/
import { GlobalContext } from "../context/GlobalState";
const IncomeExpenses = () => {
  const {transactions} = useContext(GlobalContext);
  const amounts = transactions.map(tansaction => tansaction.amount)

  const income = amounts
             .filter(item => item>0)
             .reduce((acc, item) => (acc+= item),0)
             .toFixed(2)

  const expense = (
    amounts.filter(item=>item<0)
    .reduce((acc,item)=>(acc+=item),0)*(-1))
    .toFixed(2)

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">${expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
