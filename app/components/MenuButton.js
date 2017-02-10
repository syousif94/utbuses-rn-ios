import React from 'react';
import { Foundation } from '@exponent/vector-icons';
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  btn: {
    position: 'absolute',
    bottom: 25,
    height: 44,
    width: 44,
    borderRadius: 3,
    backgroundColor: '#fff',
    right: 25,
  },
  iconWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const MenuButton = () => (
  <View style={styles.btn}>
    <TouchableOpacity style={styles.iconWrap}>
      <Foundation name="list" size={18} color="black" />
    </TouchableOpacity>
  </View>
);

export default MenuButton;
