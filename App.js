import React, {Component} from 'react';
import { store, persistor } from './src/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Index from './src'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Index />
        </PersistGate>
      </Provider>
    );
  }
}