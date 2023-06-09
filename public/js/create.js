let form = document.querySelector("#create_chat_form");
let chat_enter = document.querySelector("#chat_enter");

chat_enter.style.display = "none";

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

	let password = form.elements[0].value;

	post("https://laalwood.com/create", { password: password })
	.then((data) => {
		if (data.status) {
			let uid = data.uid;
			chat_enter.setAttribute("data-value", uid);
			chat_enter.style.display = "block";
			console.log(`chat opened with id ${data.uid}`);
		} else {
			console.log('something went wrong :(');
		}
	})
})

chat_enter.addEventListener("click", (e) => {
	let uid = chat_enter.getAttribute("data-value");
	let width = 300;
	let height = 500;
	let left = (window.innerWidth / 2) - (width / 2);
	let top = (window.innerHeight / 2) - (height / 2);
	let window_style = `width=${width},height=${height},top=${top},left=${left},resizeable=no,scrollbars=no`;
	window.open(`https://laalwood.com/chat/${uid}`, "Chat", window_style);
})
