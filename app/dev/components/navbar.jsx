import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => (
	<div>
    	<ul>   	
			<li> <a href="http://www.google.com" target="_blank"> Logo</a></li>
			<li> <Link to="/faqs">FAQ</Link> </li>
			<li> <Link to="/script">Install</Link> </li>
			<li> <Link to="/dashboard">Dashboard</Link> </li>
		</ul>		    
    </div>	  

);


export default Navbar;