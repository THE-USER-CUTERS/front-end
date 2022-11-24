
import '../styles/InputBar.css';
import socketIO from 'socket.io-client';

  function InputBar(){


    function sendNewMessage(message){
      socketIO.emit('connection', (socket) => {
        console.log(message);
      });
    }

      return (
        <section id="inputBar">
            <form>
              <div className='flex'>
                  <p className='pointer'>&#128512;</p>
                  <input id="message-input" placeholder="Type your message here..." on></input>
                  <button onClick={(e) => sendNewMessage(e.target.value)} className='send-button pointer'>
                    <i class="fa fa-send-o icon"></i>
                  </button>
                </div>
            </form>
        </section>
      )
  }

  export default InputBar;
