import { useEffect, useState } from 'react';
import './App.css';
import InputBar from './components/InputBar';
import LeftMenu from './components/LeftMenu';
import MessageInput from './components/MessageInput';
import Modal from './components/Modal';
import socketIO from 'socket.io-client';
import UserInformationBar from './components/UserInformationBar';
const socket = socketIO.connect('http://localhost:4000');

function App() {

  const [isModalVisible, setModalVisible] = useState(true);
  const [friends, setFriends] = useState([]);
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState('');

  useEffect(() => {
    socket.on('messageResponse', (data) => setMessages([...messages, data]));
    }, [socket, messages]);

  return (
    <div className="App">

      <header id="user-info">
        <UserInformationBar username="James Ong" profilePic='https://picsum.photos/90'/>
      </header>

    <main>
        {/* <Modal isModalVisible={isModalVisible} setModalVisible={setModalVisible} setFriends={setFriends} setUser={setUser}/> */}
        <LeftMenu id="sidebar"/>
        <section id="chat-history">
          main - chat history goes here
          {messages.length > 0 && messages.map((message) => <MessageInput Author={message.name} text={message.text} isAuthor={user === message.name}/>)}
          <footer id="input-bar">
            <InputBar />
          </footer>
      </section>
    </main>

    </div>
  );
}

export default App;
