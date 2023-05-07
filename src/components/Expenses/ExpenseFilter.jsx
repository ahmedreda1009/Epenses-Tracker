import React, { useEffect, useState } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = ({ filterExpensesHandler }) => {
	const [chosenYear, setChosenYear] = useState("2023");

	const handleYearChange = (e) => {
		setChosenYear(e.target.value);
	};

	useEffect(
		() => filterExpensesHandler(chosenYear),
		[chosenYear, filterExpensesHandler]
	);

	return (
		<div className="expenses-filter">
			<div className="expenses-filter__control">
				<label>Filter by year</label>
				<select value={chosenYear} onChange={handleYearChange}>
					<option value="2025">2025</option>
					<option value="2024">2024</option>
					<option value="2023">2023</option>
					<option value="2022">2022</option>
					<option value="2021">2021</option>
					<option value="2020">2020</option>
					<option value="2019">2019</option>
				</select>
			</div>
		</div>
	);
};

export default ExpensesFilter;
