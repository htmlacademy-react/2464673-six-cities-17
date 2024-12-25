import { OfferType, LocationType } from '../../types';
import { useRef, useEffect } from 'react';
import {Icon, Marker, LayerGroup, layerGroup} from 'leaflet';
import useMap from '../hooks/useMap';
import { Marcer, Locations } from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  offers: OfferType[];
  activeOfferId: string | undefined;
  activeCityName: string;
};

const defaultCustomIcon = new Icon({
  iconUrl: Marcer.DEFAULT,
  iconSize: [30, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: Marcer.ACTIVE,
  iconSize: [30, 40],
  iconAnchor: [20, 40],
});

export default function Map(props: MapProps): JSX.Element {
  const {offers, activeCityName, activeOfferId} = props;
  const cityWithLocation: LocationType = Locations[activeCityName];
  const mapRef = useRef(null);
  const map = useMap(mapRef, cityWithLocation);
  const markerLayer = useRef<LayerGroup>(layerGroup());

  useEffect(() => {
    if(map) {
      map.setView([cityWithLocation.latitude, cityWithLocation.longitude], cityWithLocation.zoom);
      markerLayer.current.addTo(map);
      // markerLayer.current.clearLayers();
    }
  }, [cityWithLocation, map]);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
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
          .addTo(markerLayer.current);
      });

      // return () => {
      //   map.removeLayer(markerLayer.current);
      // };
    }
  }, [map, offers, activeOfferId]);

  return <div style={{height: '100%'}} ref={mapRef}></div>;
}
