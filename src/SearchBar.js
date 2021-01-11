import React from 'react';

const SearchBar = ({searchChange}) =>{
	return(
		<div className="pa2">
			<input className="pa3 bg-lightest-blue ba b--green" type="search" placeholder="Enter a robot name" onChange={searchChange}/>
		</div>
	);
};

export default SearchBar;
