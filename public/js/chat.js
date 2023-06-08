const socket = new WebSocket("wss://laalwood.com");

socket.addEventListener("open", (e) => {
	console.log('connected to server!');
})
