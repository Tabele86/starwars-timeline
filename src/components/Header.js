import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { Tooltip } from '@material-ui/core';

function Header() {
	return (
		<div className="header">
			<img
				className="sw-logo"
				src="https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo-1.png"
				alt="Star Wars logo"
			/>
			<Tooltip title="Movies + TV Timeline">
				<Link to="/">
					<img
						className="sw-timeline"
						src="https://fontmeme.com/permalink/210114/94ad9dd358bd11711635e7174a907832.png"
						alt="Home"
					/>
				</Link>
			</Tooltip>
		</div>
	);
}

export default Header;
