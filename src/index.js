import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import reducer from './reducers'

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import { 
  BrowserRouter as Router, 
  Route, Switch 
} from 'react-router-dom'
import LeagueTable from './components/LeagueTables';
import Schedule from './components/Schedule';
import Roster from './components/Roster';
import 'bootstrap/dist/css/bootstrap.min.css';
import FrontPage from './components/FrontPage';



const saveToLocalStorage = (reduxGlobalState) =>{
  // serialization = converting js object to a string

  try{const serializeState = JSON.stringify(reduxGlobalState)
  localStorage.setItem('state', serializeState)
}
  catch(e){
    console.log(e);
  }
}

const loadFromLocalStorage = () =>{

  const serializeState = localStorage.getItem('state')
  
  if(serializeState == null){
    return undefined;
  }
  else{
    return JSON.parse(serializeState)
  }
}

const persistedState = loadFromLocalStorage();


let store = createStore(reducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(()=>{
  saveToLocalStorage(store.getState())
})


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
            <Switch>
              <Route exact path="/" component={FrontPage}/>
              <Route path="/table" component={LeagueTable}/>
              <Route path="/roster" component={Roster}/>
              <Route path="/schedule" component={Schedule}/>
            </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

