// DOM Elements
const chatButton = document.getElementById('chat-button');
const chatModal = document.getElementById('chat-modal');
const minimizeButton = document.getElementById('minimize-button');
const chatInput = document.getElementById('chat-input');
const sendButton = document.getElementById('send-button');
const chatMessages = document.getElementById('chat-messages');

// State
let isOpen = false;

// Toggle chat modal
function toggleChat() {
    isOpen = !isOpen;
    chatButton.classList.toggle('open', isOpen);
    chatModal.classList.toggle('open', isOpen);
    
    if (isOpen) {
        chatInput.focus();
    }
}

// Send a message
function sendMessage() {
    const message = chatInput.value.trim();
    
    if (message === '') return;
    
    // Add user message to chat
    addMessage(message, 'user');
    
    // Clear input
    chatInput.value = '';
    
    // Simulate bot response (replace with actual API call)
    setTimeout(() => {
        // This is where you'll integrate your AI chatbot API
        callChatbotAPI(message);
    }, 500);
}

// Add a message to the chat
function addMessage(text, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', `${sender}-message`);
    
    const messageContent = document.createElement('div');
    messageContent.classList.add('message-content');
    
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    
    messageContent.appendChild(paragraph);
    messageElement.appendChild(messageContent);
    chatMessages.appendChild(messageElement);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Call the Chatbot API (replace this with your actual API integration)
async function callChatbotAPI(message) {
    try {
        // Replace this with your actual API endpoint
        // const response = await fetch('https://your-chatbot-api-endpoint.com/chat', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ message }),
        // });
        
        // const data = await response.json();
        // addMessage(data.reply, 'bot');
        
        // For demo purposes, we'll just echo the message back
        const botReply = `You said: "${message}". This is a placeholder response. Replace this with your actual API integration.`;
        addMessage(botReply, 'bot');
    } catch (error) {
        console.error('Error calling chatbot API:', error);
        addMessage('Sorry, I encountered an error. Please try again later.', 'bot');
    }
}

// Create a standalone widget that can be embedded in any website
function createChatbotWidget() {
    // Event listeners
    chatButton.addEventListener('click', toggleChat);
    minimizeButton.addEventListener('click', toggleChat);
    
    sendButton.addEventListener('click', sendMessage);
    
    chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
    
    // Auto-resize textarea
    chatInput.addEventListener('input', () => {
        chatInput.style.height = 'auto';
        chatInput.style.height = (chatInput.scrollHeight > 100 ? 100 : chatInput.scrollHeight) + 'px';
    });
}

// Initialize widget
document.addEventListener('DOMContentLoaded', createChatbotWidget);

// For embedding in other websites
// Create a self-contained widget script
(function() {
    // This function would be used if you want to make this script embeddable
    // For now, we're just initializing the widget directly
    
    // Example of how to embed:
    // 1. Create a minified version of this entire script
    // 2. Host it on a CDN
    // 3. Users can add it to their site with:
    //    <script src="https://your-cdn.com/chatbot-widget.min.js" async></script>
})(); 