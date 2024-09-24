const apiURL = "https://backend.narwhalkid.com";
let chat = document.getElementById("chat");
let bottom = true;
let chatLog = {};
let currentChat;
let textPrompt;
let response;
let sending = false;
canSend = false;


if (localStorage.token) {
fetch(apiURL + "/getLogs", {
  method: "POST",
  body: JSON.stringify({
    token: localStorage.token,
  }),
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((json) => {
    if (json.logs) {
      chatLog = JSON.parse(json.logs);
      if (!!localStorage.currentChat) {
        currentChat = localStorage.currentChat
      } else {
        currentChat = Object.keys(chatLog)[0]
      }
      showLoggedChat()
    } else {
      useLocalLogs()
    }
  });
} else {
  useLocalLogs()
}


function setLogs() {
  localStorage.logs = JSON.stringify(chatLog)
if (localStorage.token) {
  fetch(apiURL + "/setLogs", {
    method: "POST",
    body: JSON.stringify({
      token: localStorage.token,
      logs: JSON.stringify(chatLog)
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      if (json.response != "Success!") {
        displayMessage("System", "Error saving logs to profile. Reason:  " + json.response)
      }
    });
}
}


function scrollOnResize() {
  if (bottom == true) {
    chat.scrollTo({ top: chat.scrollHeight });
  }
}

window.onresize = scrollOnResize;

function showLoggedChat() {
  chatLog[currentChat].forEach((element) => {
    if (element.role == "user") {
      displayMessage("You", element.parts[0].text);
    } else {
      displayMessage("NarwhalGPT", element.parts[0].text);
    }
  });
}


function useLocalLogs() {
if (!!localStorage.getItem("logs")) {
  chatLog = JSON.parse(localStorage.logs);
  if(!!localStorage.currentChat) {
    currentChat = localStorage.currentChat
  } else {
    currentChat = Object.keys(chatLog)[0]
  }
  showLoggedChat()
} else {
  chatLog = {default: []}
  currentChat = "default"
}
localStorage.currentChat = currentChat
}

const inputElement = document.getElementById("input");
input.value = "";

function updateTextboxHeight() {
  inputElement.style.height = "24px";
  inputElement.style.height = inputElement.scrollHeight - 28 + "px";
  document.getElementById("chat").style.height = `calc(100% - ${
    document.getElementById("messaging").offsetHeight + 10
  }px)`;
  document.getElementById("scrollButtonDiv").style.bottom = `calc(2rem + ${
    document.getElementById("messaging").offsetHeight
  }px)`;
}

async function login(username, password) {
  fetch(apiURL + "/login", {
    method: "POST",
    body: JSON.stringify({
      username: username,
      password: password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      resp = json.response;
      if (json.token) {
        localStorage.token = json.token;
        localStorage.username = json.username;
        location.reload();
        return;
      }
      displayMessage("You", "$login");
      displayMessage("System", resp);
    });
}

async function signup(username, password) {
  fetch(apiURL + "/signup", {
    method: "POST",
    body: JSON.stringify({
      username: username,
      password: password,
      logs: chatLog,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      resp = json.response;
      if (json.token) {
        localStorage.token = json.token;
        localStorage.username = json.username;
        location.reload();
        return;
      }
      displayMessage("You", "$signup");
      displayMessage("System", resp);
    });
}

chat.onscroll = function (e) {
  if (chat.scrollTop + chat.clientHeight + 5 >= chat.scrollHeight) {
    bottom = true;
    document.getElementById("scrollButtonDiv").style.display = "none";
  } else {
    bottom = false;
    document.getElementById("scrollButtonDiv").style.display = "";
  }
};

function button() {
  updateTextboxHeight();
  if (inputElement.value.length < 1) {
    canSend = false;
    document.getElementById("send").style.opacity = ".1";
    document.getElementById("send").style.cursor = "";
  } else {
    canSend = true;
    document.getElementById("send").style.opacity = "1";
    document.getElementById("send").style.cursor = "pointer";
  }
}

inputElement.addEventListener("input", button);

inputElement.addEventListener("keydown", handleKeyDown);

function handleKeyDown(event) {
  const { code } = event;
  if (code === "Enter") {
    if (event.shiftKey) {
      updateTextboxHeight();
    } else {
      event.preventDefault();
      sendMessage();
    }
  }
}

function sendMessage() {
  if (sending) return;
  textPrompt = inputElement.value;
  
  inputElement.value = "";
  button();
  let command;
  let params;
  if (textPrompt.includes(" ")){
    params = textPrompt.split(" ");
    command = params[0];
    params.shift();
  } else {
    command = textPrompt
  }

  


  if (command == "$rmdir") { // Delete chat

    if(chatLog[params[0]]) {
    delete chatLog[params[0]];
    setLogs()
    if(currentChat == params[0]) {
      location.reload();
      return;
    }
      displayMessage("You", textPrompt);
      displayMessage("System", `${params[0]} deleted`);
    } else {
      displayMessage("You", textPrompt);
      displayMessage("System", `${params[0]} is not a directory`);
    }
    return;

  } else if (command == "$mkdir") { // Make new chat

    if (params.length > 0) {
    chatLog[params[0]] = [];
    displayMessage("You", textPrompt);
    displayMessage("System", `${params[0]} created`);
    setLogs()
  } else {
    displayMessage("You", textPrompt);
    displayMessage("System", "Chat not found");
  }
    return;

  } else if (command == "$ls") { // Show all chats

    displayMessage("You", textPrompt);
    let chats;
    let first = true;
    for (const folder in chatLog) {
      if (first) {
        chats = folder;
        first = false
      } else {
        chats += `  ${folder}`
      }
    }
    displayMessage("System", `${chats}`);
    return;

  } else if (command == "$pwd") { // Show current chat

    displayMessage("You", textPrompt);
    displayMessage("System", currentChat);
    return;

  } else if (command == "$cd") {
    
    if (params.length > 0) {
    if (chatLog[params[0]]){
      localStorage.currentChat = params[0];
      location.reload();
    } else {
      displayMessage("You", textPrompt);
      displayMessage("System", "Chat not found");
    }
  } else {
    displayMessage("You", textPrompt);
      displayMessage("System", "Missing parameters");
  }
    return;
  } else if (command == "$signup") {// Signup
    
    if (params.length > 1) {
    signup(params[0], params[1]);
    return;
    } else {
      displayMessage("You", textPrompt);
      displayMessage("System", "Chat not found");
    }
    return;

  } else if (command == "$login") { // Login

    if (params.length > 1) {
    login(params[0], params[1]);
    } else {
      displayMessage("You", textPrompt);
      displayMessage("System", "Chat not found");
    }
    return;

  } else if (command == "$help") { // Display commands
    displayMessage("You", textPrompt);
    displayMessage("System", 
`$help - Open help menu
$rmdir [dir] - Clear chat
$mkdir [dir] - Make new chat
$ls - Show all chats
$pwd - Show current chat
$cd - Open certain chat
$signup [username] [password] - Signup
$login [username] [password] - Login (Chats started not logged in will be cleared)`);
return;
  }

  chatLog[currentChat].push({
    role: "user",
    parts: [{text:textPrompt}],
  });
  setLogs()


  displayMessage("You", textPrompt);
  sending = true;
  fetch(apiURL + "/gpt", {
    method: "POST",
    body: JSON.stringify({
      chat: chatLog[currentChat],
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      resp = json.resp;
      chatLog[currentChat].push({
        role: "model",
        parts: [{text: json.nakedResp}],
      });
      displayMessage("NarwhalGPT", resp);
      sending = false;
    });
}

function displayMessage(user, message) {
  const chatbox = document.getElementById("chat");
  const messageElement = document.createElement("div");
  const userElement = document.createElement("div");
  const textElement = document.createElement("div");
  const paragraph = document.createElement("p");
  messageElement.classList.add("message");

  userElement.classList.add("username");
  textElement.classList.add("textSpace");
  textElement.style.whiteSpace = "pre-wrap";
  userElement.innerText = `${user}`;
  if (user === "You") {
    messageElement.classList.add("user-message");
    paragraph.innerText = `${message}`;
    textElement.appendChild(paragraph);
  } else {
    messageElement.classList.add("gpt-message");
    textElement.innerHTML = `${message}`;
  }

  messageElement.appendChild(userElement);
  messageElement.appendChild(textElement);
  chatbox.appendChild(messageElement);
  hljs.highlightAll();
  if (bottom == true) {
    chat.scrollTo({ top: chat.scrollHeight });
  }
  setLogs()
}
