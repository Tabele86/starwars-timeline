import React from 'react';
import './Info.css';
import { Tooltip } from '@material-ui/core';

function Info() {
	return (
		<div className="info">
			<Tooltip title="The Battle of Yavin, also known as the Battle of the Death Star, the assault on the Death Star, the
				attack on the Death Star, or the Miracle of Yavin, was a major battle of the Galactic Civil War that led
				to the destruction of the first Death Star. It was a crippling blow to the Empire and one of the Rebel
				Alliance's first major victories.">
				<a
					target="blank"
					href="https://www.youtube.com/watch?v=GPfNf6Ty5t0&ab_channel=StarWarsImperialHistorian"
				>
					<h2>BBY & ABY</h2>
				</a>
			</Tooltip>
			<p> (Before the Battle of Yavin ) & (After the Battle of Yavin )</p>
		</div>
	);
}

export default Info;
