import { Destination } from "./Destination"
import { Cargo } from "./Cargo"

export class TrackingMap {
	private googleMap: google.maps.Map

	constructor(id: string) {
		this.googleMap = new google.maps.Map(document.getElementById(id), {
			zoom: 1.6,
			center: {
				lat: 0,
				lng: 20,
			},
		})
	}

	attachMarker(entity: Destination | Cargo): void {
		new google.maps.Marker({
			map: this.googleMap,
			position: {
				lat: entity.location.lat,
				lng: entity.location.lon,
			},
		})
	}
}
