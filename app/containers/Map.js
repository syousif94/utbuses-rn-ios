import { Components } from 'exponent';
const {
  MapView,
  MapView: {
    Polyline,
    Marker,
  },
} = Components;
import { Foundation } from '@exponent/vector-icons';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import polyline from '@mapbox/polyline';

import StopMarker from 'app/components/StopMarker';

import stops from '../../642stops';

const line642 = polyline.decode('mgzwDrqosQuD@gBL{CfCSNe@T}@VYBm@A[vLSjFMxEwL]Q`FIv@CbDI|HhHZ?@MpC?AI`DKzD?@GbCA~A??QjEvDTdBD~F\\lCJp@FdDLpDTT_ITwHNgERqENyEnFRJaFPeFF_CZuHf@oRJu@uCGoG}@eDa@').map(coords => ({
    latitude: coords[0],
    longitude: coords[1],
  }));

class BusMap extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>642 CCW</Text>
        </View>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 30.286390,
            longitude: -97.740726,
            latitudeDelta: 0.022,
            longitudeDelta: 0.022,
          }}
          showsCompass={false}
          showsPointsOfInterest={false}
          pitchEnabled={false}
        >
          <Polyline
            strokeWidth={4}
            coordinates={line642}
            strokeColor="rgba(17,51,183,0.4)"
          />
          {
            stops.map((stop, i) => (
              <StopMarker
                key={i}
                stop={stop}
              />
            ))
          }
        </MapView>
        <View style={[styles.button, styles.right]}>
          <TouchableOpacity style={styles.iconWrap}>
            <Foundation name="list" size={18} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
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
  map: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    bottom: 25,
    height: 44,
    width: 44,
    borderRadius: 3,
    backgroundColor: '#fff',
  },
  right: {
    right: 25,
  },
  iconWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  marker: {
    height: 14,
    width: 14,
    backgroundColor: '#1133B7',
    borderRadius: 7,
    borderWidth: 2,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
  },
});

export default BusMap;
