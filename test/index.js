import { 
  Map, 
  GeolocateControl,
  NavigationControl,
  ScaleControl
} from 'https://cdn.skypack.dev/maplibre-gl'


const map = new Map({
  container: "map",
  style: "styles/plan-ign-source.json",
  // style: "styles/plan-ign-akaya.json",
  center: [2, 48],
  zoom: 3
});

map.addControl(new NavigationControl({
  position: 'top-left'
}));

map.addControl(new ScaleControl({
  position: 'bottom-left'
}));

map.addControl(
  new GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true
    },
  })
);