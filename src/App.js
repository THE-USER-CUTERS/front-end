import { useEffect, useState } from 'react';
import './App.css';
import InputBar from './components/InputBar';
import LeftMenu from './components/LeftMenu';
import MessageInput from './components/MessageInput';
import Modal from './components/Modal';
import Message from './classes/Message'
import UserInformationBar from './components/UserInformationBar';
import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";

const socket = io.connect("http://localhost:3001");

function App() {

  const [isModalVisible, setModalVisible] = useState(true);
  const [friends, setFriends] = useState([]);
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState('');

  useEffect(() => {

    socket.on('connect', (data) => {
      console.log(data);
      // setMessages([...messages, data])
    });
    }, [socket, messages]);

    socket.on("message", function(msg) {
      setMessages([...messages, new Message("user", msg)]);
    });

  return (
    <div className="App">

      <header id="user-info">
        <UserInformationBar username="James Ong" profilePic='https://picsum.photos/90'/>
      </header>

    <main>
        {/* <Modal isModalVisible={isModalVisible} setModalVisible={setModalVisible} setFriends={setFriends} setUser={setUser}/> */}
        <LeftMenu id="sidebar"/>
        <section id="chat-history">
          <div className='scroll'>
            {messages.length > 0 && messages.map((message, index) => <MessageInput key={index} Author={message.name} text={message.text} isAuthor={user === message.name}/>)}
          </div>
          <footer id="input-bar">
            <InputBar socket={socket} />
          </footer>
      </section>
    </main>

    </div>
  );
}

export default App;
