const replyForm = document.querySelector(".reply");
const replyInput = document.querySelector(".reply__column input");
const mainChat = document.querySelector(".main-chat");

const sendedChats = [];

const SENDED_CHATS_KEY = "sendedChat";

function saveSendedChats() {
  localStorage.setItem(SENDED_CHATS_KEY, JSON.stringify(sendedChats));
}

function paintChats(newChat) {
  const messageRow = document.createElement("div");
  messageRow.classList.add("message-row", "message-row--own");

  const messageRowContent = document.createElement("div");
  messageRowContent.classList.add("message-row__content");

  const messageInfo = document.createElement("div");
  messageInfo.classList.add("message__info");

  const messageBubble = document.createElement("span");
  messageBubble.classList.add("message__bubble");
  messageBubble.innerText = newChat;

  const messageTime = document.createElement("span");
  messageTime.classList.add("message__time");
  const hours = String(new Date().getHours()).padStart(2, "0");
  const minutes = String(new Date().getMinutes()).padStart(2, "0");
  messageTime.innerText = `${hours}:${minutes}`;

  messageInfo.appendChild(messageBubble);
  messageInfo.appendChild(messageTime);
  messageRowContent.appendChild(messageInfo);
  messageRow.appendChild(messageRowContent);

  mainChat.appendChild(messageRow);
  sendedChats.push(newChat);
  saveSendedChats();
}

function sendChat(event) {
  event.preventDefault();
  const msg = replyInput.value;
  replyInput.value = "";
  paintChats(msg);
}

replyForm.addEventListener("submit", sendChat);

const savedSendedChats = localStorage.getItem(SENDED_CHATS_KEY);
if (savedSendedChats) {
  const parsedSendedChats = JSON.parse(savedSendedChats);
  parsedSendedChats.forEach(paintChats);
}
