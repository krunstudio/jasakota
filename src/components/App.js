import React, {useEffect, useState} from 'react';
import {  BrowserRouter as Router,  Switch,  Route,  Link, useParams} from "react-router-dom";
import './App.scss';
import { fetchCategory, fetchList} from '../actions/index';
import { connect } from 'react-redux';
import Home from './pages/home';
import Listjasa from './pages/list-jasa/App';
import Navbar from '../components/navbar';
import Details from '../components/pages/details/app'
import Routers from '../routes'






const App = props => {

  let slug = window.location.pathname.replace('/', '')


  useEffect(() => {
		props.fetchCategory()
  }, []);
  
  useEffect(() => {
		props.fetchList(slug)
  }, []);
  

  const [data, setData] = useState({
    keyword: '',
    slug : ''
	})

    const cariJasa = e => {
      if (e) e.preventDefault();
        let redirect = '/' + data.keyword
        window.location.href = redirect;
    }

	props = {
		...props
  }

  
      return (
        <div>
          <Navbar {...props} data={data} cariJasa={cariJasa} setData={setData}/>
          <Routers {...props} slug={slug}/>
          <div className="col-12 text-align-center footer row margin-0">
              <span className="">© 2020 Sobatjasa</span>
            </div>
        </div>
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
    fetchList: (keyword) => {
			dispatch(fetchList(keyword))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

