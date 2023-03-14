export interface Entity {
	location: {
		lat: number
		lon: number
	}
	popupText(): string
}

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

	attachMarker(entity: Entity): void {
		const marker = new google.maps.Marker({
			map: this.googleMap,
			position: {
				lat: entity.location.lat,
				lng: entity.location.lon,
			},
		})
		marker.addListener("click", () => {
			const popup = new google.maps.InfoWindow({
				content: entity.popupText(),
			})

			popup.open(this.googleMap, marker)
		})
	}
}
