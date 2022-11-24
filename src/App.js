import './App.css';
import InputBar from './components/InputBar';
import LeftMenu from './components/LeftMenu';
import MessageInput from './components/MessageInput';

function App() {
  return (
    <div className="App">

      <header id="user-info">
        user info goes here
      </header>

    <main>
        <LeftMenu id="sidebar"/>

        <section id="chat-history">
        main - chat history goes here

        <footer id="input-bar">
        <InputBar />
        </footer>

      </section>

    </main>

    </div>
  );
}

export default App;
