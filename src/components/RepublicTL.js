import React from 'react';
import { Chrono } from 'react-chrono';
import data from '../db/republic_data';
import './VerticalTimeline.css';

function RepublicTL() {
	return (
		<div className="timeline-rep">
			{/* style={{ width: '70%', height: '450px' }} */}
			<Chrono
				items={data}
				mode="VERTICAL_ALTERNATING"
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
export default RepublicTL;
