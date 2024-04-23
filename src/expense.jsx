import React, { useEffect, useState } from "react";
import ExpenseItem from "./components/expenseItem";
import ExpenseForm from "./components/expenseForm";

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

  const [income, setIncome] = useState(0);
  const [outgoing, setOutgoing] = useState(0);

  useEffect(() => {
    let income = 0;
    let outgoing = 0;
    expenses.forEach((expense) => {
      if (expense.amount > 0) {
        income += parseFloat(expense.amount);
      } else {
        outgoing += parseFloat(expense.amount);
      }
    });

    setIncome(income);
    setOutgoing(outgoing);
  }, [expenses]);

  const deleteExpense = (id) => {
    // console.log(expenses.filter((expense) => expense.id != id));
    setExpenses(expenses.filter((expense) => expense.id != id));
  };

  const addExpense = (title, amount) => {
    // append new expense into expenses state using setExpenses
    // array spread operator
    setExpenses([...expenses, { id: Math.random(), title, amount }]);
  };

  return (
    <>
      <div>
        <div>Expense Tracker</div>
        <div className="balance">Balance: {income + outgoing}</div>
        <div className="income-expense-container">
          <div className="income">
            <span className="title">Income</span>
            <span>{income}</span>
          </div>
          <div className="block"></div>
          <div className="expense">
            <span className="title">Expense</span>
            <span>{outgoing}</span>
          </div>
        </div>
        {/* form */}
      </div>
      {/* list expenses */}
      {/* <ExpenseItem title={"test"} amount={10}/> */}
      <ExpenseForm addExpense={addExpense} />
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          id={expense.id}
          deleteExpense={deleteExpense}
        />
      ))}
    </>
  );
}
