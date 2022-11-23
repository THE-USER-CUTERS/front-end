import './App.css';
import InputBar from './components/InputBar';

function App() {
  return (
    <div className="App">
      <header>user info goes here</header>
      <section>sidebar with multiple users to chat with</section>
      <section>main - chat history goes here</section>
      <footer>
        <InputBar />
      </footer>
    </div>
  );
}

export default App;
