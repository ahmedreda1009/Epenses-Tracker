import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense({ addExpenseHandler }) {
	const [showForm, setShowForm] = useState(false);
	const showFormHandler = () => {
		setShowForm(!showForm);
	};
	return (
		<div className="new-expense">
			{!showForm && (
				<button onClick={showFormHandler}>Add New Epense</button>
			)}
			{showForm && (
				<ExpenseForm
					addExpenseHandler={addExpenseHandler}
					showFormHandler={showFormHandler}
				/>
			)}
		</div>
	);
}

export default NewExpense;
