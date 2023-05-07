import { useState } from "react";
import "./App.css";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
	// {
	// 	id: "e1",
	// 	title: "Toilet Paper",
	// 	amount: 94.12,
	// 	date: new Date(2020, 7, 14),
	// },
	// {
	// 	id: "e2",
	// 	title: "New TV",
	// 	amount: 799.49,
	// 	date: new Date(2021, 2, 12),
	// },
	// {
	// 	id: "e3",
	// 	title: "Car Insurance",
	// 	amount: 294.67,
	// 	date: new Date(2022, 2, 28),
	// },
	// {
	// 	id: "e4",
	// 	title: "New Desk (Wooden)",
	// 	amount: 450,
	// 	date: new Date(2023, 5, 12),
	// },
];

export default function App() {
	const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
	const [filteredYear, setFilteredYear] = useState("");

	const addExpenseHandler = (newExpense) => {
		setExpenses((prevState) => [newExpense, ...prevState]);
	};

	const filterExpensesHandler = (year) => {
		setFilteredYear(year);
	};

	const filteredExpenses = expenses.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	// const components = expenses.map((el) => (
	// 	<ExpenseItem {...el} key={el.id} />
	// ));

	const components = filteredExpenses.map((el) => (
		<ExpenseItem {...el} key={el.id} />
	));

	return (
		<div className="App">
			<NewExpense addExpenseHandler={addExpenseHandler} />
			<Expenses
				filterExpensesHandler={filterExpensesHandler}
				filteredExpenses={filteredExpenses}
			>
				{components.length === 0 && (
					<h2 className="not-found">There are no Expenses.</h2>
				)}
				{components.length > 0 && components}
			</Expenses>
		</div>
	);
}
