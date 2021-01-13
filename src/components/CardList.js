import React from 'react';
import Card from './Card';

const CardList = ({ timeline }) => {
	//this is just to show error boundry functions though this is dev version of react

	// if (true) {
	// 	throw new Error('NOOOO!');
	// }
	return (
		<div>
			{timeline.map((content, i) => {
				return <Card key={i} id={timeline[i].id} name={timeline[i].content} email={timeline[i].description} />;
			})}
		</div>
	);
};

export default CardList;
