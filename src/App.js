import { useEffect, useState } from 'react';
import './App.css';
import InputBar from './components/InputBar';
import LeftMenu from './components/LeftMenu';
import MessageInput from './components/MessageInput';
import Modal from './components/Modal';
import Message from './classes/Message'
import UserInformationBar from './components/UserInformationBar';
import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";

const baseUrl = 'http://localhost:3000';
const baseEndPoints = 'http://localhost:3001';

const socket = io.connect(baseUrl);

function App() {

  const [user, setUser] = useState('');
  const [isModalVisible, setModalVisible] = useState(user === '' || !user);
  const [friends, setFriends] = useState([]);
  const [messages, setMessages] = useState([]);


  useEffect(() => {

    socket.on('connect', async () => {
      const prevMessages = await fetch(`${baseEndPoints}/messages`);
      // const activeUsers = await fetch(`${baseEndPoints}/users`);
      setMessages(prevMessages);
      //setFriends(activeUsers);
    });
    }, [socket, messages]);

    socket.on("message", function(msg) {
      setMessages([...messages, new Message(msg.name, msg.message)]);
    });

    useEffect(() => {
      setModalVisible(user === ''|| !user);
    }, [user]);

  return (
    <div className="App">
      <header id="user-info">
        <UserInformationBar username={user} profilePic='https://picsum.photos/90'/>
      </header>
      <Modal isModalVisible={isModalVisible} setModalVisible={setModalVisible} setFriends={setFriends} setUser={setUser} socket={socket}/>
    <main>
        <LeftMenu id="sidebar"/>
        <section id="chat-history">
          <div className='scroll'>
            {messages.length > 0 && messages.map((message, index) => <MessageInput key={index} Author={message.name} text={message.text} isAuthor={user === message.name}/>)}
          </div>
          <footer id="input-bar">
            <InputBar name={user} socket={socket} />
          </footer>
      </section>
    </main>

    </div>
  );
}

export default App;
