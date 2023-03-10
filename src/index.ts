const createDiv = () => {
	const div = document.createElement("div")
	const statement = document.createTextNode("Cargo Tracking App")

	div.append(statement)

	document.body.appendChild(div)
}

createDiv()
