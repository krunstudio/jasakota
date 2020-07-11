import React, {useEffect} from 'react';
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import './App.css';
import { fetchCategory} from '../actions/index';
import { connect } from 'react-redux';
import Home from './pages/home';
import Listjasa from './pages/listJasa';

const App = props => {
  useEffect(() => {
		props.fetchCategory()
	}, []);

	props = {
		...props
  }

    console.log(props)
      return (
        <Router>
          <div>
            <Switch>
              <Route path="/list-jasa">
                <Listjasa {...props}/>
              </Route>
              {/* <Route path="/users">
                <Users />
              </Route> */}
              <Route path="/">
                <Home {...props}/>
              </Route>
            </Switch>
          </div>
        </Router>
      );
    }

const mapStateToProps = state => {
	return {
		dataCategory: state.category.dataCategory,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchCategory: () => {
			dispatch(fetchCategory())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

