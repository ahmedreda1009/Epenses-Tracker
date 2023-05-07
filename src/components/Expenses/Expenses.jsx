import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";

export default function Expenses({
	children,
	filterExpensesHandler,
	filteredExpenses,
}) {
	const dataPoints = [
		{ month: "Jan", amount: 0 },
		{ month: "Feb", amount: 0 },
		{ month: "Mar", amount: 0 },
		{ month: "Apr", amount: 0 },
		{ month: "May", amount: 0 },
		{ month: "Jun", amount: 0 },
		{ month: "Jul", amount: 0 },
		{ month: "Aug", amount: 0 },
		{ month: "Sep", amount: 0 },
		{ month: "Oct", amount: 0 },
		{ month: "Nov", amount: 0 },
		{ month: "Dec", amount: 0 },
	];

	filteredExpenses.forEach((el) => {
		let month = el.date.getMonth();
		dataPoints[month].amount += +el.amount;
	});

	return (
		<Card className="expenses">
			<ExpensesFilter filterExpensesHandler={filterExpensesHandler} />
			<ExpenseChart dataPoints={dataPoints} />
			{children}
		</Card>
	);
}
