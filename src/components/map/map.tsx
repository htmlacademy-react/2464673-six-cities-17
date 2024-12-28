import { useRef, useEffect } from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';

import useMap from '../hooks/useMap';
import { OfferType, LocationType } from '../../types';
import { ItemPin, Locations } from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  offersData: OfferType[];
  activeOfferId: string | null;
  activeCityName: string;
};

const defaultCustomIcon = new Icon({
  iconUrl: ItemPin.DEFAULT,
  iconSize: [30, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: ItemPin.ACTIVE,
  iconSize: [30, 40],
  iconAnchor: [20, 40],
});

export default function Map(props: MapProps): JSX.Element {
  const {offersData, activeCityName, activeOfferId} = props;
  const cityWithLocation: LocationType = Locations[activeCityName];
  const mapRef = useRef(null);
  const map = useMap(mapRef, cityWithLocation);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offersData.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            activeOfferId !== undefined && offer.id === activeOfferId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      map.setView([cityWithLocation.latitude, cityWithLocation.longitude], cityWithLocation.zoom);

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offersData, activeOfferId, cityWithLocation]);

  return <div style={{height: '100%'}} ref={mapRef}></div>;
}
