// Chatbot functionality
class Chatbot {
  constructor() {
    this.messages = [];
    this.quickReplies = [
      'What shoes do you recommend?',
      'How to find my shoe size?',
      'Order status',
      'Return policy',
      'Contact support',
      'Shipping information',
      'Available discounts',
      'Popular shoe brands'
    ];
    this.shoeCategories = {
      running: ['Nike Air Zoom', 'Adidas Ultraboost', 'Brooks Ghost', 'New Balance Fresh Foam'],
      casual: ['Nike Air Max', 'Adidas Stan Smith', 'Converse Chuck Taylor', 'Vans Classic'],
      athletic: ['Nike Metcon', 'Adidas Powerlift', 'Under Armour HOVR', 'Reebok Nano'],
      formal: ['Cole Haan Original', 'Allen Edmonds Park', 'Johnston & Murphy Melton', 'Clarks Oxford']
    };
    this.sizeGuide = {
      US: [6, 7, 8, 9, 10, 11, 12],
      EU: [39, 40, 41, 42, 43, 44, 45],
      UK: [5.5, 6.5, 7.5, 8.5, 9.5, 10.5, 11.5],
      cm: [24, 25, 26, 27, 28, 29, 30]
    };
  }

  // Initialize chatbot UI
  init() {
    this.createChatbotUI();
    this.attachEventListeners();
    this.addWelcomeMessage();
  }

  // Create chatbot UI elements
  createChatbotUI() {
    const chatbotHTML = `
      <div class="chatbot-container">
        <button class="chatbot-toggle">
          <img src="./assets/images/chatbot-icon.svg" alt="Chatbot">
        </button>
        <div class="chat-window">
          <div class="chat-header">
            <span>Footcap Assistant</span>
            <button class="close-chat">
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </div>
          <div class="chat-messages"></div>
          <div class="quick-replies"></div>
          <div class="chat-input">
            <input type="text" placeholder="Type your message...">
            <button class="send-message">
              <ion-icon name="send-outline"></ion-icon>
            </button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', chatbotHTML);
  }

  // Attach event listeners
  attachEventListeners() {
    const toggle = document.querySelector('.chatbot-toggle');
    const closeBtn = document.querySelector('.close-chat');
    const chatWindow = document.querySelector('.chat-window');
    const input = document.querySelector('.chat-input input');
    const sendBtn = document.querySelector('.send-message');

    toggle.addEventListener('click', () => chatWindow.classList.toggle('active'));
    closeBtn.addEventListener('click', () => chatWindow.classList.remove('active'));
    
    sendBtn.addEventListener('click', () => this.handleUserMessage(input));
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.handleUserMessage(input);
    });

    this.displayQuickReplies();
  }

  // Handle user messages
  handleUserMessage(input) {
    const message = input.value.trim();
    if (!message) return;

    this.addMessage('user', message);
    input.value = '';
    
    // Process the message and generate response
    this.processMessage(message);
  }

  // Process message and generate response
  processMessage(message) {
    const lowerMessage = message.toLowerCase();
    let response = '';

    // Enhanced response logic with more specific shoe-related responses
    if (lowerMessage.includes('recommend') || lowerMessage.includes('suggestion')) {
      if (lowerMessage.includes('running')) {
        response = `For running, I recommend these top models: ${this.shoeCategories.running.join(', ')}. Would you like details about any specific model?`;
      } else if (lowerMessage.includes('casual')) {
        response = `For casual wear, check out these popular choices: ${this.shoeCategories.casual.join(', ')}. Which style interests you?`;
      } else if (lowerMessage.includes('athletic') || lowerMessage.includes('gym')) {
        response = `For athletic performance, these are excellent options: ${this.shoeCategories.athletic.join(', ')}. Would you like to know more about any of these?`;
      } else if (lowerMessage.includes('formal') || lowerMessage.includes('dress')) {
        response = `For formal occasions, consider these classic choices: ${this.shoeCategories.formal.join(', ')}. Would you like to see any specific style?`;
      } else {
        response = 'What type of shoes are you looking for? I can recommend options for running, casual wear, athletic training, or formal occasions.';
      }
    } 
    else if (lowerMessage.includes('size')) {
      const sizeInfo = `US sizes: ${this.sizeGuide.US.join(', ')}\nEU sizes: ${this.sizeGuide.EU.join(', ')}\nUK sizes: ${this.sizeGuide.UK.join(', ')}`;
      response = `Here's our size guide:\n${sizeInfo}\n\nTo find your perfect fit, measure your foot length in centimeters. Would you like tips on how to measure accurately?`;
    }
    else if (lowerMessage.includes('shipping') || lowerMessage.includes('delivery')) {
      response = 'We offer free standard shipping on orders over $100. Standard delivery takes 3-5 business days, while express shipping (additional $15) takes 1-2 business days. International shipping is also available. Would you like more details?';
    }
    else if ((lowerMessage.includes('order') && lowerMessage.includes('status')) || lowerMessage.includes('track')) {
      response = 'To check your order status, please provide your order number from your confirmation email. I can help track your package and provide estimated delivery dates.';
    }
    else if (lowerMessage.includes('return') || lowerMessage.includes('exchange')) {
      response = 'We offer a 30-day return policy for unworn items in original packaging. Free returns are available for members. Would you like to know the step-by-step return process or our exchange policy?';
    }
    else if (lowerMessage.includes('discount') || lowerMessage.includes('sale') || lowerMessage.includes('offer')) {
      response = 'Currently, we have a seasonal sale with up to 40% off on selected items. Sign up for our newsletter to get an additional 10% off your first purchase. Would you like to see our current deals?';
    }
    else if (lowerMessage.includes('contact') || lowerMessage.includes('support')) {
      response = 'You can reach our support team at support@footcap.com or call us at +1 234 567 890 during business hours (Mon-Fri, 9AM-6PM EST). For immediate assistance, you can also use our live chat feature on the website.';
    }
    else {
      response = 'I can help you with shoe recommendations, sizing, order tracking, returns, shipping information, and current discounts. What would you like to know more about?';
    }

    setTimeout(() => this.addMessage('bot', response), 500);
  }

  // Add message to chat
  addMessage(type, text) {
    const messagesContainer = document.querySelector('.chat-messages');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', `${type}-message`);
    messageElement.textContent = text;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // Add welcome message
  addWelcomeMessage() {
    const welcome = 'Hello! 👋 Welcome to Footcap. I\'m here to help you find the perfect shoes. How can I assist you today?';
    setTimeout(() => this.addMessage('bot', welcome), 500);
  }

  // Display quick replies
  displayQuickReplies() {
    const quickRepliesContainer = document.querySelector('.quick-replies');
    this.quickReplies.forEach(reply => {
      const button = document.createElement('button');
      button.classList.add('quick-reply');
      button.textContent = reply;
      button.addEventListener('click', () => {
        const input = document.querySelector('.chat-input input');
        input.value = reply;
        this.handleUserMessage(input);
      });
      quickRepliesContainer.appendChild(button);
    });
  }
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const chatbot = new Chatbot();
  chatbot.init();
});