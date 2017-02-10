import { createSelector } from 'reselect';
import polyline from '@mapbox/polyline';

export const routeSelector = createSelector(
  state => state.ui.route,
  state => state.ui.direction,
  state => state.routes,
  (route, direction, routes) => routes.get(route)[direction]
);

export const polylineSelector = createSelector(
  routeSelector,
  route => polyline.decode(route.polyline).map(coords => ({
    latitude: coords[0],
    longitude: coords[1],
  }))
);

export const stopsSelector = createSelector(
  routeSelector,
  route => route.stops
);
