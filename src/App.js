import { useEffect, useState } from 'react';
import './App.css';
import InputBar from './components/InputBar';
import LeftMenu from './components/LeftMenu';
import MessageInput from './components/MessageInput';
import Modal from './components/Modal';
import Message from './classes/Message'
import UserInformationBar from './components/UserInformationBar';
import { io } from "socket.io-client";



const baseUrl = 'http://localhost:3001';

const socket = io.connect(baseUrl);

function App() {

  const [user, setUser] = useState('');
  const [isModalVisible, setModalVisible] = useState(user === '' || !user);
  const [friends, setFriends] = useState([]);
  const [messages, setMessages] = useState([]);

  const scrollDown = () => {
    const chatConversation = document.getElementById("scroll");
    chatConversation.scrollTo(0,chatConversation.scrollHeight);
  };


  useEffect(() => {
    socket.on('connect', async () => {
      const response = await fetch(`${baseUrl}/messages`);
      const prevMessages = await response.json();
      setMessages([...messages, ...prevMessages.map(m => new Message(m.user, m.message))]);
      scrollDown();
    });
    }, [socket, messages]);

    socket.on("message", function(msg) {
      setMessages([...messages, new Message(msg.name, msg.message)]);
    });

    useEffect(() => {
      setModalVisible(user === ''|| !user);
    }, [user]);

    useEffect(() => {
      scrollDown();
    }, [messages]);

  return (
    <div className="App">
      <header id="user-info">
        <UserInformationBar username={user} profilePic='https://picsum.photos/90'/>
      </header>
      <Modal isModalVisible={isModalVisible} setModalVisible={setModalVisible} setFriends={setFriends} setUser={setUser} socket={socket}/>
    <main>
        <LeftMenu id="sidebar"/>
        <section id="chat-history">
          <div id='scroll' className='scroll'>
            {messages.length > 0 && messages.map((message, index) => <MessageInput key={index} Author={message.name} text={message.text} isAuthor={user === message.name}/>)}
          </div >
          <footer id="input-bar">
            <InputBar name={user} socket={socket} />
          </footer>
      </section>
    </main>

    </div>
  );
}

export default App;
