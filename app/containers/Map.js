import React, { Component } from 'react';
import { connect } from 'react-redux';
import { polylineSelector, stopsSelector } from 'app/selectors/Route';
import { Components } from 'exponent';
const {
  MapView,
  MapView: {
    Polyline,
  },
} = Components;
import {
  StyleSheet,
  View,
} from 'react-native';

import StopMarker from 'app/components/StopMarker';
import HeaderBar from 'app/components/HeaderBar';
import MenuButton from 'app/components/MenuButton';

const mapStateToProps = state => ({
  selectedStop: state.ui.selectedStop,
  polyline: polylineSelector(state),
  stops: stopsSelector(state),
});

@connect(mapStateToProps)
class BusMap extends Component {
  render() {
    const {
      polyline,
      stops,
      selectedStop,
    } = this.props;
    return (
      <View style={styles.container}>
        <HeaderBar />
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
            coordinates={polyline}
            strokeColor="rgba(17,51,183,0.4)"
          />
          {
            stops.map((stop, i) => (
              <StopMarker
                key={i}
                stop={stop}
                selectedStop={selectedStop}
              />
            ))
          }
        </MapView>
        <MenuButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    flex: 1,
  },
});

export default BusMap;
