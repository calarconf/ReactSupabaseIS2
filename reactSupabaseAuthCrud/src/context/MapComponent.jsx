import React, { useEffect, useRef } from 'react';

const MapComponent = ({ apiKey, onConfirm }) => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    const loadGoogleMapsApi = async () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      script.onload = async () => {
        const { Geocoder } = await window.google.maps.importLibrary('geocoding');
        const geocoder = new Geocoder();
        const mapOptions = {
          center: { lat: 4.7124857902526855, lng: -74.0717468261718 },
          zoom: 7,
          mapId: 'DEMO_MAP_ID',
        };

        const mapEl = mapRef.current;
        const map = new window.google.maps.Map(mapEl, mapOptions);
        const markerEl = markerRef.current;
        const marker = new window.google.maps.Marker({
          map,
          position: mapOptions.center,
        });

        markerEl.setAttribute('position', JSON.stringify(mapOptions.center));

        const inputs = ['location', 'locality', 'administrative_area_level_1', 'postal_code', 'country'];
        inputs.forEach((componentType) => {
          const inputEl = document.getElementById(`${componentType}-input`);
          inputEl.addEventListener('blur', () => geocodeAddress(geocoder, map, marker));
          inputEl.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
              geocodeAddress(geocoder, map, marker);
            }
          });
        });
      };
    };

    loadGoogleMapsApi();
  }, [apiKey]);

  const geocodeAddress = (geocoder, map, marker) => {
    const inputs = ['location', 'locality', 'administrative_area_level_1', 'postal_code', 'country'];
    const address = inputs.map((type) => document.getElementById(`${type}-input`).value).join(' ');

    geocoder.geocode({ address }, (results, status) => {
      if (status === 'OK' && results[0]) {
        const location = results[0].geometry.location;
        map.setCenter(location);
        marker.setPosition(location);
      }
    });
  };

  return (
    <div>
      <div className="panel">
        <div>
          <img className="sb-title-icon" src="https://fonts.gstatic.com/s/i/googlematerialicons/location_pin/v5/24px.svg" alt="" />
          <span className="sb-title">Address Selection</span>
        </div>
        <input type="text" placeholder="Address" id="location-input" />
        <input type="text" placeholder="City" id="locality-input" />
        
        <input type="text" placeholder="Country" id="country-input" />
        <button onClick={onConfirm}>Confirmar</button>
      </div>
      <div ref={mapRef} style={{ height: '400px' }} />
      <div ref={markerRef} />
    </div>
  );
};

export default MapComponent;
