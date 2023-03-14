import { faker } from "@faker-js/faker"

export class Destination {
	receiver: string
	location: {
		lat: number
		lon: number
	}

	constructor() {
		this.receiver = faker.name.firstName()
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lon: parseFloat(faker.address.longitude()),
		}
	}

	popupText(): string {
		return `<h3>Receiver name: ${this.receiver}</h3>`
	}
}
