import React from 'react';
import './Header.css';

function Header() {
	return (
		<div className="header">
			<img
				className="sw-logo"
				src="https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo-1.png"
				alt="Star Wars logo"
			/>
			<img
				className="sw-timeline"
				src="https://fontmeme.com/permalink/210114/94ad9dd358bd11711635e7174a907832.png"
				alt="Timeline"
			/>
		</div>
	);
}

export default Header;
