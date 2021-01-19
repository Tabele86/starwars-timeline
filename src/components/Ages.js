import React from 'react';
import './Ages.css';
import { Tooltip } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Ages() {
	return (
		<div className="ages-buttons">
			<Tooltip title="32 BBY - 19 BBY">
				<button className="tooltip-rep" id="republic">
					<Link to="/republic">
						<h3>Age of the Republic</h3>
					</Link>
				</button>
			</Tooltip>
			<Tooltip title="13 BBY - 34 ABY">
				<button className="tooltip-reb" id="rebellion">
					<Link to="/rebellion">
						<h3>Age of the Rebellion</h3>
					</Link>
				</button>
			</Tooltip>
			<Tooltip title="34 ABY <">
				<button className="tooltip-res" id="resistance">
					<Link to="/resistance">
						<h3>Age of the Resistance</h3>
					</Link>
				</button>
			</Tooltip>
		</div>
	);
}

export default Ages;
