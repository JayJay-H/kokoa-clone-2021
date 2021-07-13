const badges = document.querySelectorAll(".badge");
const userCompnentSubtitle = document.querySelector(
  ".user-component__subtitle"
);

const SENDED_CHATS_KEY = "sendedChat";
const savedSendedChats = localStorage.getItem(SENDED_CHATS_KEY);

if (savedSendedChats) {
  badges.forEach((item) => {
    item.classList.add("hidden");
  });
  const parsedsavedSendedChats = JSON.parse(savedSendedChats);
  userCompnentSubtitle.innerText =
    parsedsavedSendedChats[parsedsavedSendedChats.length - 1];
}

const JHTimeStamp = document.querySelector(".user-component__time");
const hour = String(new Date().getHours()).padStart(2, "0");
const minute = String(new Date().getMinutes()).padStart(2, "0");
JHTimeStamp.innerText = `${hour}:${minute}`;
