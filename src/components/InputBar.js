
import '../styles/InputBar.css';

  function InputBar({socket}){

    function sendNewMessage(e){
      e.preventDefault();
      socket.emit('message', e.target[0].value);
      e.target.reset();
    }

      return (
        <section id="inputBar">
            <form onSubmit={(e) => sendNewMessage(e)}>
              <div className='flex'>
                  <p className='pointer'>&#128512;</p>
                  <input id="message-input" placeholder="Type your message here..."></input>
                  <button type='submit' className='send-button pointer'>
                    <i className="fa fa-send-o icon"></i>
                  </button>
                </div>
            </form>
        </section>
      )
  }

  export default InputBar;
