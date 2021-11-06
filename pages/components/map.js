import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1IjoidmVua2F0ZXM5dWkiLCJhIjoiY2t2bWszaDZiMTVqcjJvbzA0cHV6cWZxaCJ9.nWgnUUycTGxAG96wsnobWQ";
function Map({ pickup, dropOff }) {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [-99.29011, 39.39172],
      zoom: 5,
    });
    // console.log(pickup, dropOff);
    if (pickup) addToMap(map, pickup);
    if (dropOff) addToMap(map, dropOff);
    if (pickup && dropOff) {
      map.fitBounds([pickup, dropOff], {
        padding: 60,
      });
    }
  }, [pickup, dropOff]);

  const addToMap = (map, coordinates) => {
    // console.log/(coordinates);
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  return <Wrapper id={"map"} />;
}
const Wrapper = tw.div`
bg-red-500 h-1/2
`;
export default Map;