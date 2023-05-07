import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm({ addExpenseHandler, showFormHandler }) {
	const [input, setinput] = useState({
		title: "",
		amount: "",
		date: "",
	});

	const inputHandler = (e) => {
		let key = e.target.id;
		let value = e.target.value;

		setinput((prevState) => ({ ...prevState, [key]: value }));
	};

	const submitHandler = (e) => {
		e.preventDefault();
		if (input.amount && input.title && input.date) {
			addExpenseHandler({
				...input,
				date: new Date(input.date),
				id: Date.now(),
			});
		}

		setinput({ amount: "", title: "", date: "" });
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label htmlFor="title">Title</label>
					<input
						type="text"
						id="title"
						value={input.title}
						onChange={inputHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label htmlFor="amount">Amount</label>
					<input
						type="number"
						id="amount"
						nim="0.01"
						step="0.01"
						value={input.amount}
						onChange={inputHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label htmlFor="date">Date</label>
					<input
						type="date"
						id="date"
						// min="2021-01-01"
						// max="2025-12-31"
						value={input.date}
						onChange={inputHandler}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="text" onClick={showFormHandler}>
					Cancel
				</button>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
}

export default ExpenseForm;
