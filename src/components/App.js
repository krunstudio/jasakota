import React, {useEffect} from 'react';
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import './App.css';
import { fetchCategory, fetchList} from '../actions/index';
import { connect } from 'react-redux';
import Home from './pages/home';
import Listjasa from './pages/list-jasa/App';

const App = props => {
  useEffect(() => {
		props.fetchCategory()
  }, []);
  
  useEffect(() => {
		props.fetchList()
	}, []);

	props = {
		...props
  }
  
      return (
        <Router>
          <div>
            <Switch>
              <Route path="/kategori/">
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
    dataCategory: state.jasa.dataCategory,
    dataList: state.jasa.dataList,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchCategory: () => {
			dispatch(fetchCategory())
    },
    fetchList: () => {
			dispatch(fetchList())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

