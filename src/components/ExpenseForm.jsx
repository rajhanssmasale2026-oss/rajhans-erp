import React, { useContext, useState } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

function ExpenseForm() {

  const { addExpense } = useContext(ExpenseContext);


  const [expense, setExpense] = useState({
    date: "",
    category: "",
    description: "",
    amount: "",
  });


  const handleChange = (e) => {

    setExpense({
      ...expense,
      [e.target.name]: e.target.value,
    });

  };


  const handleSubmit = async () => {

  if (!expense.category || !expense.amount) {

    alert("Please fill expense details");

    return;

  }

  try {

    await addExpense({

      expense_date: expense.date,

      category: expense.category,

      description: expense.description,

      amount: Number(expense.amount),

    });

    setExpense({

      date: "",

      category: "",

      description: "",

      amount: "",

    });

    alert("Expense Added Successfully");

  } catch (err) {

    console.error(err);

    alert("Expense Save Failed");

  }

};


  return (
    <div className="bg-white shadow rounded-lg p-6">

      <h2 className="text-xl font-bold mb-4">
        Add Expense / खर्च जोडा
      </h2>


      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">


        <input
          type="date"
          name="date"
          value={expense.date}
          onChange={handleChange}
          className="border p-3 rounded"
        />


        <select
          name="category"
          value={expense.category}
          onChange={handleChange}
          className="border p-3 rounded"
        >

          <option value="">
            Select Category
          </option>

          <option>
            Transport
          </option>

          <option>
            Advertisement
          </option>

          <option>
            Packing
          </option>

          <option>
            Labour
          </option>

          <option>
            Electricity
          </option>

          <option>
            Rent
          </option>

          <option>
            Other
          </option>

        </select>


        <input
          type="text"
          name="description"
          placeholder="Description"
          value={expense.description}
          onChange={handleChange}
          className="border p-3 rounded"
        />


        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={expense.amount}
          onChange={handleChange}
          className="border p-3 rounded"
        />


      </div>


      <button

        onClick={handleSubmit}

        className="mt-5 bg-green-600 text-white px-6 py-3 rounded"

      >

        Add Expense

      </button>


    </div>
  );

}

export default ExpenseForm;