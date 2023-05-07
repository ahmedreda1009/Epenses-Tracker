import React from "react";
import "./ChartBar.css";

function ChartBar({ label, amount, maxAmount }) {
	let heightValue = Math.round((amount / maxAmount) * 100) + "%";
	return (
		<div className="chart-bar">
			<div className="chart-bar__inner">
				<div
					className="chart-bar__fill"
					style={{ height: heightValue }}
				></div>
			</div>
			<div className="chart-bar__label">{label}</div>
		</div>
	);
}

export default ChartBar;
