import React from 'react';

// const Card = (props) => {
//     const { name, email, id } = props;
const Card = ({ event, description, id }) => {
	return (
		<div className="">
			<img alt="Event" src={`https://${id}?200x200`} />
			<div>
				<h2> {event}</h2>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default Card;
