import './App.css';
import InputBar from './components/InputBar';
import LeftMenu from './components/LeftMenu';

function App() {
  return (
    <div className="App">
        <LeftMenu/>
      <header id="user-info">user info goes here</header>
      <section id="sidebar">sidebar with multiple users to chat with</section>
      <section id="main">main - chat history goes here</section>
      <footer id="input-bar">
        <InputBar />
      </footer>
    </div>
  );
}

export default App;
