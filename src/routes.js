import React from 'react'
import {  BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
import Home from './components/pages/home';
import Listjasa from './components/pages/list-jasa/App';
import Details from './components/pages/details/app';
import Profil from './components/pages/profil/app';
import IklanSaya from './components/pages/iklan-saya/app';
import PasangIklan from './components/pages/pasang-iklan/app';
import Register from './components/pages/register/app';



const Routes = props => {
    let slug = window.location.pathname.replace('/', '')
    let data = props.dataCategory
    return (
      <div>
        <Router>
            <Switch>
              <Route path="/kategori/:id" render={(props) => <Listjasa {...props} slug={slug}  />} >
              </Route>
              <Route path="/profil" render={(props) => <Profil {...props} slug={slug}  />} >
              </Route>
              <Route path="/register" render={(props) => <Register {...props} slug={slug}  />} >
              </Route>
              <Route path="/pasang-iklan" render={(props) => <PasangIklan {...props} slug={slug}  category={data} />} >
              </Route>
              <Route path="/iklan-saya" render={(props) => <IklanSaya {...props} slug={slug}  />} >
              </Route>
              <Route path="/:slug/detail" component={Details}>  
              </Route>
              <Route path="/:slug" render={(props) => <Listjasa {...props} slug={slug} />} > 
              </Route>
              <Route path="/">
                <Home {...props}/>
              </Route>
            </Switch>
        </Router>
      </div>
    )
}

export default Routes