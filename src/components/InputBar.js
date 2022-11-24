
import { useState, useRef } from 'react';
import '../styles/InputBar.css';

  function InputBar({socket, name}){

    const inputRef = useRef(null);
    const [seeMenu, setSeeMenu] = useState(false);

    function sendNewMessage(e){
      e.preventDefault();
      socket.emit('message', {name: name, message: e.target[0].value});
      e.target.reset();
    }

    function addEmoji(e){
      inputRef.current.value = e.target.innerHTML;
      setSeeMenu(false);
    }

      return (
        <section id="inputBar">
            <form onSubmit={(e) => sendNewMessage(e)}>
              <div className='flex'>
                  {seeMenu && <div className='emogi-menu pointer'>
                  <span onClick={(e) => addEmoji(e)}>&#128512;</span>
                    <span onClick={(e) => addEmoji(e)}>&#128514;</span>
                    <span onClick={(e) => addEmoji(e)}>&#128517;</span>
                    <span onClick={(e) => addEmoji(e)}>&#128521;</span>
                  </div>}
                  <p onClick={() => setSeeMenu(!seeMenu)} className='pointer'>&#128512;</p>
                  <input ref={inputRef} id="message-input" placeholder="Type your message here..."></input>
                  <button type='submit' className='send-button pointer'>
                    <i className="fa fa-send-o icon"></i>
                  </button>
                </div>
            </form>
        </section>
      )
  }

  export default InputBar;
