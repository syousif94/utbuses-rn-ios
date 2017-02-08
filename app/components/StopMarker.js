import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import { Components } from 'exponent';
const {
  MapView: {
    Marker,
  },
} = Components;

class StopMarker extends Component {
  state = {
    selected: false,
  }

  _toggleSelected = () => {
    this.setState({
      selected: !this.state.selected,
    });
  }

  render() {
    const color = this.state.selected ? styles.green : styles.purple;
    return (
      <Marker coordinate={this.props.stop}>
        <View style={styles.wrap}>
          <View style={styles.base} />
          <TouchableOpacity style={styles.btn} onPress={this._toggleSelected}>
            <View style={[color, styles.dot]} />
          </TouchableOpacity>
        </View>
      </Marker>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    height: 44,
    width: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  base: {
    height: 14,
    width: 14,
    backgroundColor: '#fff',
    borderRadius: 7,
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
