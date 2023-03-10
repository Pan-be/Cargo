import { apiKey } from "../apiKey.js"

const url = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`

const loadMap = async () => {
	const script = document.createElement("script")
	const body = document.querySelector("body")
	script.src = url
	body.appendChild(script)
}

const loadApp = async () => {
	const script = document.createElement("script")
	const body = document.querySelector("body")
	script.src = "./dist/bundle.js"
	body.appendChild(script)
}

loadMap()
loadApp()
