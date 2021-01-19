import React from 'react';
import { Chrono } from 'react-chrono';
import data from '../db/resistance_data';
import './VerticalTimeline.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import json2mq from 'json2mq';

function ResistanceTL() {
	// const matches = useMediaQuery('(min-width: 480px)');
	const matches = useMediaQuery(
		json2mq({
			minWidth: 900
		})
	);
	return (
		<div className="timeline-rep">
			{/* style={{ width: '70%', height: '450px' }} */}
			{matches ? (
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
			) : (
				<Chrono
					items={data}
					mode="VERTICAL"
					theme={{
						primary: 'blue',
						secondary: 'yellow',
						cardBgColor: 'white',
						cardForeColor: 'black'
					}}
				/>
			)}
		</div>
	);
}
export default ResistanceTL;