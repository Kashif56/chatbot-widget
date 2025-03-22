# AI Chatbot Widget

A beautiful, customizable chatbot widget that can be embedded into any website. The widget features an animated button in the bottom corner of the screen, which opens a chat modal when clicked.

## Features

- Animated fixed button on the bottom right/left of the website
- Clean, modern UI with customizable colors
- Responsive design that works on desktop and mobile
- Easy to integrate with any existing website
- Configurable API endpoint to connect to your AI chatbot backend
- Customizable appearance (colors, position, size, etc.)

## Demo

The repository includes a simple demo page (`index.html`) that demonstrates how the chatbot widget looks and functions.

## Quick Start

### Method 1: Basic Implementation

1. Include the chatbot widget script in your HTML:

```html
<script src="chatbot-widget.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        ChatbotWidget.init({
            apiEndpoint: 'https://your-chatbot-api.com/chat',
            apiKey: 'your-api-key'
        });
    });
</script>
```

### Method 2: Using CDN (Recommended for Production)

1. Host the `chatbot-widget.js` file on a CDN
2. Include it in your HTML:

```html
<script src="https://your-cdn.com/chatbot-widget.min.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        ChatbotWidget.init({
            apiEndpoint: 'https://your-chatbot-api.com/chat',
            apiKey: 'your-api-key'
        });
    });
</script>
```

## Configuration Options

The chatbot widget can be customized with the following options:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `apiEndpoint` | String | `null` | The URL of your chatbot API endpoint |
| `apiKey` | String | `null` | Your API key (if required) |
| `botName` | String | 'AI Assistant' | Name displayed in the chat header |
| `botAvatar` | String | 'https://via.placeholder.com/30' | URL to the bot's avatar image |
| `chatbotAccentColor` | String | '#4a6cf7' | The main color of the chatbot (HEX format) |
| `initialMessage` | String | 'Hi there! How can I help you today?' | Initial greeting message from the bot |
| `position` | String | 'right' | Position of the widget ('right' or 'left') |
| `width` | String | '350px' | Width of the chat modal |
| `height` | String | '500px' | Height of the chat modal |
| `fontSize` | String | '14px' | Base font size for the widget |

## Example with All Options

```javascript
ChatbotWidget.init({
    apiEndpoint: 'https://your-chatbot-api.com/chat',
    apiKey: 'your-api-key',
    botName: 'Custom Bot Name',
    botAvatar: 'https://your-bot-avatar.jpg',
    chatbotAccentColor: '#ff5722',
    initialMessage: 'Hello! How can I assist you today?',
    position: 'left',
    width: '400px',
    height: '600px',
    fontSize: '16px'
});
```

## API Integration

The widget expects your API to accept POST requests with a JSON body containing a `message` property:

```json
{
    "message": "User's message here"
}
```

And to return a response in this format:

```json
{
    "response": "Bot's reply here"
}
```

Alternative response field names such as `reply` or `message` are also accepted.

## Browser Compatibility

The widget is compatible with all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## License

MIT License 