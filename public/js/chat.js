const socket = new WebSocket("wss://laalwood.com/chat");

socket.addEventListener("open", (e) => {
	console.log('connected to server!');
})
