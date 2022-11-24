import { useEffect, useState } from 'react';
import './App.css';
import InputBar from './components/InputBar';
import LeftMenu from './components/LeftMenu';
import MessageInput from './components/MessageInput';
import Modal from './components/Modal';
import UserInformationBar from './components/UserInformationBar';

function App() {

  const [isModalVisible, setModalVisible] = useState(true);
  const [friends, setFriends] = useState([]);
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState('');

  useEffect(() => {
    fetchData();
  }, [messages])

  async function fetchData(){
    const response = await fetch("http://localhost:5001/");
    const data = await response.json();
    setMessages(data);
  }

  return (
    <div className="App">

      <header id="user-info">
        <UserInformationBar username="James Ong" profilePic='./profile-pic-default'/>
      </header>

    <main>
        {/* <Modal isModalVisible={isModalVisible} setModalVisible={setModalVisible} setFriends={setFriends} setUser={setUser}/> */}
        <LeftMenu id="sidebar"/>
        <section id="chat-history">
        <MessageInput Author={'Lucas'} text={"Hello how are you"} isAuthor={true}/>
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
