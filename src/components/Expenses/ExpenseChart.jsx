import React from "react";
import Chart from "../Chart/Chart";

function ExpenseChart({ dataPoints }) {
	return (
		<div>
			<Chart dataPoints={dataPoints} />
		</div>
	);
}

export default ExpenseChart;
