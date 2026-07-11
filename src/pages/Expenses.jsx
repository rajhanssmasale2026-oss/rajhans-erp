import React from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseTable from "../components/ExpenseTable";

function Expenses() {

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Expenses / खर्च
      </h1>


      <ExpenseForm />


      <div className="mt-8">
        <ExpenseTable />
      </div>


    </div>
  );
}

export default Expenses;