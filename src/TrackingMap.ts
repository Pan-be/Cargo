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
}
