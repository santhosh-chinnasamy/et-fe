import React, { useState } from "react";
import ExpenseItem from "./components/expenseItem";
export default function Expense() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      title: "test",
      amount: 10,
    },
    {
      id: 2,
      title: "test 2",
      amount: 10,
    },
  ]);

  return (
    <>
      <div>
        <div>Expense Tracker</div>
        <div className="balance">Balance: 0</div>
        <div className="income-expense-container">
          <div className="income">
            <span className="title">Income</span>
            <span>0</span>
          </div>
          <div className="block"></div>
          <div className="expense">
            <span className="title">Expense</span>
            <span>0</span>
          </div>
        </div>
        {/* form */}
      </div>
      {/* list expenses */}
      {/* <ExpenseItem title={"test"} amount={10}/> */}
      {
      expenses.map((expense) => (
        <ExpenseItem title={expense.title} amount={expense.amount} />
      ))}
    </>
  );
}
