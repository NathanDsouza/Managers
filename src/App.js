import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import firebaseSetup from './firebase';


class App extends Component {
  componentWillMount(){
      firebaseSetup;
  }


  render(){
    const store=(createStore(reducers, {}, applyMiddleware(ReduxThunk)));
    return(
      <Provider store={store} >
        <LoginForm/>
      </Provider>
    )
  }
}

export default App;