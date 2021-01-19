import React from 'react';
import { Tooltip } from '@material-ui/core';
import './Footer.css';

function Footer() {
	return (
		<div className="footer">
			<Tooltip title="Back to Top">
				{/* <button className="tooltip-rep" id="republic"> */}
				<a href="#top">
					<img
						className="sw-footer"
						// src="/img/force_ghost.jpg"
						// / src="https://d.newsweek.com/en/full/1542045/force-ghosts-star-wars.jpg"
						src="/img/sw_wallpaper_wide.jpg"
						alt="Star Wars force ghost"
						// src="https://theartmad.com/wp-content/uploads/2015/06/Star-Wars-Wallpaper-Widescreen-4.jpg"
						// alt="Star Wars logo"
					/>
				</a>
				{/* </button> */}
			</Tooltip>
		</div>
	);
}

export default Footer;
