import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { io } from "socket.io-client";

import UserConnectForm from "./UserConnectForm/UserConnectForm";
import ChatMessageForm from "./ChatMessage/ChatMessage";
import MessageList from "./MessageList/MEssageList";

const { VITE_CHAT_URL } = import.meta.env;

const Chat = () => {
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (!socket) return;

    socket.on("receive_message", (data) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: nanoid(),
          message: data.message,
          type: "other",
          username: data.username,
        },
      ]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, [socket]);

  const addUsername = ({ username }) => {
    setUsername(username);
    const newSocket = io(VITE_CHAT_URL);
    setSocket(newSocket);
  };

  const addMessage = ({ message }) => {
    if (!socket) return;

    const newMessage = {
      id: nanoid(),
      message,
      type: "my",
      username,
    };

    setMessages((prev) => [...prev, newMessage]);
    socket.emit("send_message", { username, message });
  };

  const closeChat = () => {
    setUsername("");
    socket.off("receive_message");
    socket.disconnect();
    setSocket(null);
  };

  return (
    <div>
      {!username && <UserConnectForm submitForm={addUsername} />}
      {username && <ChatMessageForm submitForm={addMessage} />}
      {username && <MessageList items={messages} />}
      {username && socket && (
        <button onClick={closeChat} type="button">
          Close
        </button>
      )}
    </div>
  );
};

export default Chat;
