import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchCategory} from '../src/actions/index';
import { connect } from 'react-redux';

const App = props => {
  useEffect(() => {
		props.fetchCategory()
	}, []);

	props = {
		...props
  }


  return (
    <div>
      <div className="navbar-light bg-light">
        <div className="row justify-content-center">
          <nav className="navbar navbar-expand-lg col-md-7">
            <a className="navbar-brand" href="#">Jasakota</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Iklan saya</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Pasang Iklan</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Masuk</a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </nav>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-7" style={{height:400, width:'100%', margin:30}}>
          <div style={{marginBottom:50}}>
            <img className="card" src="https://mdbootstrap.com/img/Photos/Others/gradient1.jpg" style={{width:'100%', hight:400}}></img>
          </div>
          <div>
            <hr style={{marginBottom:50}}/>
          </div>
          <div className="row">
            {props.dataCategory.map((item,key) =>{
              return(
                <div className="col-md-4">
                  <div  className="card" style={{height:200, margin:20}}>
                  </div>
                  <div className="text-align-center">
                    <b>{item.title}</b>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
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

