# AI Chatbot - Frontend Project

## Overview
A responsive, rule-based chatbot web application built with vanilla HTML, CSS, and JavaScript. This frontend provides an interactive chat interface that communicates with the chatbot logic using pattern matching rules.

## Features

✨ **Responsive Design**
- Mobile-first approach
- Seamlessly adapts to all screen sizes (mobile, tablet, desktop)
- Optimized for both landscape and portrait orientations
- Touch-friendly interface for mobile users

💬 **Chatbot Functionality**
- Rule-based pattern matching system
- Pre-trained responses for common queries
- Natural conversation flow with 300ms thinking delay
- Case-insensitive input processing
- Automatic scrolling to latest messages

🎨 **Modern UI/UX**
- Beautiful gradient backgrounds
- Smooth animations and transitions
- Custom styled scrollbar
- Message bubbles with distinct user/bot styling
- Welcoming interface with usage hints

⌨️ **User Interactions**
- Send messages with Send button or Enter key
- Auto-focus input field on load
- Welcome message that disappears on first interaction
- Real-time message display

## Project Structure

```
chatbot-frontend/
├── index.html          # Main HTML structure
├── css/
│   └── styles.css      # Responsive styling
├── js/
│   └── chatbot.js      # Chatbot logic and event handling
└── README.md           # This file
```

## File Descriptions

### index.html
- Semantic HTML5 structure
- Chat container with header, messages, and input area
- Links to external CSS and JavaScript files
- Meta tags for responsive design

### css/styles.css
- Complete styling for all elements
- Mobile-first responsive design with media queries
- Breakpoints: 600px (tablets), 400px (phones)
- Gradient backgrounds and smooth animations
- Custom webkit scrollbar styling

### js/chatbot.js
- Rules database with 12+ predefined keywords
- `getResponse()`: Pattern matching function
- `sendMessage()`: Message sending handler
- `addMessage()`: DOM manipulation for chat display
- Event listeners for Enter key and page load

## Chatbot Rules

The chatbot recognizes these keywords:
- hello, hi → Greeting responses
- how are you → Status inquiries
- what is your name → Identity questions
- bye, goodbye → Farewell messages
- help → Help requests
- thanks, thank you → Gratitude acknowledgments
- how can you help, what can you do → Capability questions

## Getting Started

### Usage
1. Open `index.html` in any modern web browser
2. Type your message in the input field
3. Press Enter or click Send
4. Watch the chatbot respond in real-time

### Browser Compatibility
- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Responsive Breakpoints

- **Desktop (> 600px)**: Full-size chat window (500px max-width)
- **Tablet (≤ 600px)**: Adjusted padding and font sizes
- **Mobile (≤ 400px)**: Optimized for small screens, full-width layout

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Gradients, Media Queries, Animations
- **Vanilla JavaScript**: ES6 features (const, arrow functions, template literals)

## Future Enhancements

- [ ] Add more sophisticated NLP capabilities
- [ ] Implement local storage for chat history
- [ ] Add typing indicators
- [ ] Support for rich media responses
- [ ] Voice input/output support
- [ ] Integration with backend API
- [ ] User authentication
- [ ] Analytics and logging

## License
MIT License - Feel free to use this project for educational purposes

## Author
Built as part of AI Internship Task 1 - Frontend Implementation
