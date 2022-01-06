import React from 'react';
import './Location.css';

const Location=(props)=>{
	return(
		<div>
			<h2>The International Space Station is currently at:</h2>
			<h1>{props.latitude+', '+props.longitude}</h1>	
		</div>
		);
}

export default Location;