import React, { Component } from "react";
import SearchBar from "../Components/searchBar";
import CardList from "../Components/CardList";
import Scroll from '../Components/Scroll'
import ErrorBoundry from "../Components/ErrorBoundry";
import { robots } from "../Components/robots";

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: '',
        };

        // Bind the method to the class instance
        this.onSearchChange = this.onSearchChange.bind(this);
    }

    	componentDidMount(){
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => this.setState({robots: users}))
            console.log('Mounted')
        }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) 
            })

       return !robots.length ? <h1>Loading...</h1> :(<div className="tc">
                <h1 className="f1 lh-title">RoboFriends</h1>
                <SearchBar searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>);  
        }

        
    }


export default App;
