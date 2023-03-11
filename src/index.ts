import { Destination } from "./Destination"

const destination = new Destination()

console.log(destination)

new google.maps.Map(document.getElementById("g-map"), {
	zoom: 1.6,
	center: {
		lat: 0,
		lng: 20,
	},
})
