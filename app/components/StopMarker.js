import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import { Components } from 'exponent';
const {
  MapView: {
    Marker,
  },
} = Components;

class StopMarker extends Component {
  state = {
    pressed: false,
    selected: false,
  }

  _toggleSelected = () => {
    this.setState({
      selected: !this.state.selected,
    });
  }

  _onPressIn = () => {
    this.setState({
      pressed: true,
    });
  }

  _onPressOut = () => {
    this.setState({
      pressed: false,
    });
  }

  render() {
    const topColor = (this.state.selected || this.state.pressed)
      ? styles.green
      : styles.purple;
    return (
      <Marker coordinate={this.props.stop}>
        <View style={styles.wrap}>
          <View style={styles.base} />
          <TouchableWithoutFeedback
            onPress={this._toggleSelected}
            onPressIn={this._onPressIn}
            onPressOut={this._onPressOut}
          >
            <View style={styles.btn}>
              <View style={[topColor, styles.dot]} />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </Marker>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    height: 32,
    width: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  base: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
  },
  btn: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
  },
  green: {
    backgroundColor: '#53D86A',
  },
  purple: {
    backgroundColor: '#1133B7',
  },
});

export default StopMarker;
