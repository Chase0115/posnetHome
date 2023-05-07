import React, { useEffect, useRef, useCallback } from "react";

const GoogleMap = () => {
  const mapRef = useRef(null);

  const initMap = useCallback(() => {
    const posnetLocation = {
      lat: -33.83787,
      lng: 151.03735,
    };
    const map = new google.maps.Map(mapRef.current, {
      center: posnetLocation,
      zoom: 15,
    });
    const marker = new google.maps.Marker({
      position: posnetLocation,
      map: map,
    });
    return marker;
  }, [mapRef]);

  useEffect(() => {
    window.initMap = initMap;
    initMap();
  }, [initMap]);

  return (
    <div id='map' ref={mapRef} className='w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-xl'></div>
  );
};

export default React.memo(GoogleMap);
