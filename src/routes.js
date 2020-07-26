import React from 'react'
import {  BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
import Home from './components/pages/home';
import Listjasa from './components/pages/list-jasa/App';
// import Navbar from '../components/navbar';
import Details from './components/pages/details/app'


const Routes = props => {
    let slug = window.location.pathname.replace('/', '')
    return (
        <Router>
          <div>
            <Switch>
              <Route path="/kategori/:id" render={(props) => <Listjasa {...props} slug={slug}  />} >
              </Route>
              <Route path="/:slug/detail" component={Details}>  
              </Route>
              <Route path="/:slug" render={(props) => <Listjasa {...props} slug={slug} />} > 
              </Route>
              <Route path="/">
                <Home {...props}/>
              </Route>
            </Switch>
          </div>
        </Router>
    )
}

export default Routes