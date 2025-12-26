// Chatbot Rules Database
const rules = {
    "hello": ["Hi there!", "Hello! How can I help you?", "Hey!"],
    "hi": ["Hello!", "Hi! How are you?", "Greetings!"],
    "how are you": ["I'm doing great!", "I'm fine, thanks!", "All good!"],
    "what is your name": ["I'm ChatBot!", "You can call me ChatBot."],
    "bye": ["Goodbye!", "See you later!", "Catch you soon!"],
    "goodbye": ["Thanks for chatting! Bye!", "Goodbye! Have a great day!"],
    "help": ["I'm here to help! Ask me anything.", "Sure! What do you need?"],
    "thanks": ["You're welcome!", "Happy to help!", "Anytime!"],
    "thank you": ["You're very welcome!", "My pleasure!"],
    "how can you help": ["I can answer questions and have conversations!"],
    "what can you do": ["I can chat with you, answer questions, and have meaningful conversations!"]
};

function getResponse(userInput) {
    const input = userInput.toLowerCase().trim();
    for (let keyword in rules) {
        if (input.includes(keyword)) {
            const responses = rules[keyword];
            return responses[Math.floor(Math.random() * responses.length)];
        }
    }
    return "I'm not sure what you mean. Can you rephrase that?";
}

function sendMessage() {
    const input = document.getElementById('userInput');
    const message = input.value.trim();
    if (!message) return;
    addMessage(message, 'user');
    input.value = '';
    input.focus();
    setTimeout(() => {
        const response = getResponse(message);
        addMessage(response, 'bot');
    }, 300);
}

function addMessage(text, sender) {
    const chatMessages = document.getElementById('chatMessages');
    const welcomeMsg = chatMessages.querySelector('.welcome-message');
    if (welcomeMsg) {
        welcomeMsg.remove();
    }
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.textContent = text;
    messageDiv.appendChild(contentDiv);
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

document.getElementById('userInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

window.addEventListener('load', () => {
    document.getElementById('userInput').focus();
});
