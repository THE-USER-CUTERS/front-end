
import '../styles/InputBar.css';

  function InputBar(){
      return (
        <section id="inputBar">
            <form>
              <div className='flex'>
                  <p className='pointer'>&#128512;</p>
                  <input id="message-input" placeholder="Type your message here..." on></input>
                  <button className='send-button pointer'>
                    <i class="fa fa-send-o icon"></i>
                  </button>
                </div>
            </form>
        </section>
      )
  }

  export default InputBar;
