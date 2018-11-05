import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchField: ""
		};
	}
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(Response => Response.json())
			.then(users => this.setState({ robots: users }));
	}
	onSearchChange = event => {
		this.setState({ searchField: event.target.value });
	};

	render() {
		const { robots, searchField } = this.state;
		const filterRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});
		return !robots.length ? (
			<h1>Loading</h1>
		) : (
			<div className="tc">
				<h1 className="f1">Robopedia</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<CardList robots={filterRobots} />
				</Scroll>
			</div>
		);
	}
}
export default App;
