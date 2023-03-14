import { faker } from "@faker-js/faker"
import { Entity } from "./TrackingMap"

export class Cargo implements Entity {
	trackingId: string
	location: {
		lat: number
		lon: number
	}

	constructor() {
		this.trackingId = faker.datatype.uuid()
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lon: parseFloat(faker.address.longitude()),
		}
	}
	popupText(): string {
		return `<h3>Cargo name: ${this.trackingId}</h3>`
	}
}
