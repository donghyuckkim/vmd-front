import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {default as MainView} from 'mainview/MainView';
import 'bootstrap/dist/css/bootstrap.css';
import 'resources/css/bootstrap.min.css'

class App extends Component{
	
	render(){
		return(
			<div>	
			<Router>		
				<Route exact path="/" component={MainView} />
			<Switch>
				<Route path="/MainView" component={MainView} />
			</Switch>
			</Router>
			</div>
		)
	}
}

export default App;
