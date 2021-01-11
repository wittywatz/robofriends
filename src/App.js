import React from 'react';
import Cardlist from './Cardlist';
import SearchBar from './SearchBar';
import Scroll from './Scroll';


class App extends React.Component{
	constructor(){
		super();
		this.state = {
			robots: [],
			search: ""
		}
	}
	componentDidMount(){
		fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(users =>{this.setState({robots: users})})


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
					<Scroll>
						<Cardlist robots={filterRobots} />
					</Scroll>
				</div>		
		);
	};
};


export default App;