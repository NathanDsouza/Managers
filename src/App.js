import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import firebase from '@firebase/app';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount(){
    const config = {
      apiKey: 'AIzaSyCFxVbI4hLtU6SOgfqovld-kDfxdbV_TJQ',
      authDomain: 'managers-16c26.firebaseapp.com',
      databaseURL: 'https://managers-16c26.firebaseio.com',
      projectId: 'managers-16c26',
      storageBucket: 'managers-16c26.appspot.com',
      messagingSenderId: '652013899649'
    };
    firebase.initializeApp(config);
  }

  render(){
    return(
      <Provider store={createStore(reducers)}>
        <LoginForm/>
      </Provider>
    )
  }
}

export default App;