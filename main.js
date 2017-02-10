import Exponent, { Font, Components } from 'exponent';
import React from 'react';
import { Provider } from 'react-redux';

import configureStore from 'app/redux';
import BusMap from 'app/containers/Map';

const store = configureStore();

class App extends React.Component {

  state = {
    fontLoading: true,
  }

  async componentDidMount() {
    await Font.loadAsync({
      'clear-sans': require('./assets/fonts/ClearSans-Regular.ttf'),
      'clear-sans-bold': require('./assets/fonts/ClearSans-Bold.ttf'),
      'clear-sans-bold-italic': require('./assets/fonts/ClearSans-BoldItalic.ttf'),
      'clear-sans-italic': require('./assets/fonts/ClearSans-Italic.ttf'),
      'clear-sans-light': require('./assets/fonts/ClearSans-Light.ttf'),
      'clear-sans-medium': require('./assets/fonts/ClearSans-Medium.ttf'),
      'clear-sans-medium-italic': require('./assets/fonts/ClearSans-MediumItalic.ttf'),
      'clear-sans-thin': require('./assets/fonts/ClearSans-Thin.ttf'),
    });

    this.setState({ fontLoading: false });
  }

  render() {
    if (this.state.fontLoading) {
      return (
        <Components.AppLoading />
      );
    }
    return (
      <Provider store={store}>
        <BusMap />
      </Provider>
    );
  }
}

Exponent.registerRootComponent(App);
