import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => (
	<div>
    	<ul>
			<li> <Link to="/">FAQ</Link> </li>
			<li> <Link to="/script">Install</Link> </li>
			<li> <Link to="/dashboard">Dashboard</Link> </li>
		</ul>		    
    </div>	  

);


export default Nav;