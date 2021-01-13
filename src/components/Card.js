import React from 'react';

// const Card = (props) => {
//     const { name, email, id } = props;
const Card = ({ content, description, id }) => {
	return (
		<div className="">
			<img alt="robots" src={`https://${id}?200x200`} />
			<div>
				<h2> {content}</h2>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default Card;
