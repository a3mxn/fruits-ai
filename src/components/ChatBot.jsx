import React, { useState } from 'react';
import '../Styles/ChatBot.css';

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { text: 'Hi! How can I help you today?', type: 'bot' },
    { text: 'Tell me about apples.', type: 'button', id: 'apple' },
    { text: 'Tell me about bananas.', type: 'button', id: 'banana' },
    { text: 'Tell me about grapes.', type: 'button', id: 'grape' },
    { text: 'About us.', type: 'button', id: 'u' }
  ]);

  const [chat, setChat] = useState([]);

  const handleMessageClick = (id) => {
    let reply = '';
    switch (id) {
      case 'apple':
        reply = 'Apples are a popular fruit known for their crisp texture and sweet taste.';
        break;
      case 'banana':
        reply = 'Bananas are a tropical fruit that are sweet and soft.';
        break;
      case 'grape':
        reply = 'Grapes come in various colors and are known for their sweet taste.';
        break;
      case 'about':
        reply = 'We are a fruit AI application that provides information about different fruits.';
        break;
      default:
        reply = 'Sorry, I don\'t have information on that topic.';
    }
    setChat([...chat, { text: `Tell me about ${id}s.`, type: 'user' }, { text: reply, type: 'bot' }]);
  };

  return (
    <div className="chatbox">
      <div className="chatbox-header">Chat</div>
      <div className="chatbox-body">
        {chat.map((msg, index) => (
          <div key={index} className={`message ${msg.type}`}>
            <div className="message-text">{msg.text}</div>
          </div>
        ))}
      </div>
      <div className="chatbox-body">
        {messages.map((msg, index) =>
          msg.type === 'button' ? (
            <button
              key={index}
              className="message-button"
              onClick={() => handleMessageClick(msg.id)}
            >
              {msg.text}
            </button>
          ) : null
        )}
      </div>
    </div>
  );
};

export default ChatBox;
