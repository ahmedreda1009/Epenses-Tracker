import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart({ dataPoints }) {
	let amounts = dataPoints.map((el) => el.amount);
	let maxAmount = Math.max(...amounts);

	const bars = dataPoints.map((el) => (
		<ChartBar
			key={el.month}
			label={el.month}
			amount={el.amount}
			maxAmount={maxAmount}
		/>
	));
	return <div className="chart">{bars}</div>;
}

export default Chart;
