import React from 'react';
import { Chrono } from 'react-chrono';
import data from '../db/data';
import './Timeline.css';

function Timeline() {
	return (
		<div className="timeline">
			{/* original style inside Chrono */}
			{/* style={{ width: '70%', height: '450px' }} */}
			<Chrono
				items={data}
				mode="HORIZONTAL"
				theme={{
					primary: 'blue',
					secondary: 'yellow',
					cardBgColor: 'white',
					cardForeColor: 'black'
				}}
			/>
		</div>
	);
}
export default Timeline;
