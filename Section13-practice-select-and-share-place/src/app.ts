// Code goes here!
import axios from "axios";
let form = document.querySelector("form")! as HTMLFormElement;
let input = document.getElementById("address")! as HTMLInputElement;
//available globally
declare var google: any;
type Coordinates = { lat: number; lng: number };
let coordinates: Coordinates = { lat: 0, lng: 0 };
let key = "AIzaSyDBCAmAlnxe0bmKJL-_YiHT1rJt5k6lVQ0";
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let enteredAddress = input.value;

  //send this to Google's API!
  axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
      )}&key=${key}`
    )
    .then((el) => {
      let location = el.data.results[0].geometry.location;
      coordinates.lat = location.lat;
      coordinates.lng = location.lng;

      // Map
      let map;
      async function initMap() {
        const { Map } = await google.maps.importLibrary("maps");
        map = new Map(document.getElementById("map"), {
          center: coordinates,
          zoom: 8,
        });
      }

      initMap();
      console.log(map);
    })
    .catch((err) => console.log(err));
  input.value = "";
});
