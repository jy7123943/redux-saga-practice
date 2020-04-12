import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createStore from './store';

import Header from './components/Header';
import ImageGrid from './containers/ImageGrid';

const store = createStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <ImageGrid />
        </div>
      </Provider>
    );
  }
}

export default App;
