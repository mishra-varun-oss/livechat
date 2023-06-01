let form = document.querySelector("#create_chat_form");

async function post(url = "", data = {}) {
	const response = await fetch(url, { 
		method: "post",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data)
	})
	return response.json();
}

form.addEventListener("submit", (e) => {
	e.preventDefault();

	let host_name = form.elements[0].value;
	let password = form.elements[1].value;

	post("https://laalwood.com/create", { name: host_name, password: password })
	.then((data) => {
		if (data.status) {
			console.log(`chat opened with id ${data.uid}`);
		} else {
			console.log('something went wrong :(');
		}
	})
})
