const socket = io();

/*
  1. JoinRoom event with userName and roomName being sent from frontend
  SENT
*/
socket.emit('Join Room', {username, room});

/*
  2. Receive current room and list of all users in this room and print them in DOM
  RECEIVED
*/
socket.on('roomUsers', ({room, users}) => {
  outputRoomName(room);
  outputUsers(users);
})

/*
  3. Send message typed by user under chatMessage event (msg is string)
  SENT
*/
chatForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // extract message text
  const msg = e.target.elements.msg.value;

  // send message to server
  socket.emit("chatMessage", msg);

  // clear inputs
  e.target.elements.msg.value = '';
  e.target.elements.msg.focus() = '';

});

/*
  4. Receive message from server and broadcast in this room to everyone
  SENT
*/
socket.on("message", (message) => {
  // print message to dom
  outputMessage(message);

  // scroll down to last message
  chatMessages.scrollTop = chatMessages.scrollHeight;
});
