import React from 'react';
import './Ages.css';
import { Tooltip } from '@material-ui/core';

function Ages() {
	return (
		<div className="ages-buttons">
			<Tooltip title="32 BBY - 0 BBY">
				<button className="tooltip-rep" id="republic">
					<h2>Age of the Republic</h2>
				</button>
			</Tooltip>
			<Tooltip title="0 BBY - 34 ABY">
				<button className="tooltip-reb" id="rebellion">
					<h2>Age of the Rebellion</h2>
				</button>
			</Tooltip>
			<Tooltip title="34 ABY <">
				<button className="tooltip-res" id="resistance">
					<h2>Age of the Resistance</h2>
				</button>
			</Tooltip>
		</div>
	);
}

export default Ages;
