import React from 'react';
import Cardlist from './Cardlist';
import {robots} from './robots';
import SearchBar from './SearchBar';


class App extends React.Component{
	constructor(){
		super();
		this.state = {
			robots: robots,
			search: ""
		}
	}

	onSearchChange = (event) => {
		this.setState({search: event.target.value})	
	};
	
	render(){
		const filterRobots = this.state.robots.filter(robot => {
			return(
				robot.name.toLowerCase().includes(this.state.search.toLowerCase())
			);
		});
		return(
				<div className="tc">
					<h1 className="f1">ROBOFRIENDS</h1>
					<SearchBar searchChange={this.onSearchChange}/>
					<Cardlist robots={filterRobots} />
				</div>		
		);
	};
};


export default App;