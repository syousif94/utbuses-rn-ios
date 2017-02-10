import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  bar: {
    height: 60,
    paddingTop: 18,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'clear-sans-medium',
    fontSize: 16,
  },
});

const HeaderBar = ({ route, direction }) => (
  <View style={styles.bar}>
    <Text style={styles.text}>{route} {direction}</Text>
  </View>
);

const mapStateToProps = state => ({
  route: state.ui.route,
  direction: state.ui.direction,
});

export default connect(mapStateToProps)(HeaderBar);
