import '../styles/modal.css';
import socketIO from 'socket.io-client';

export default function Modal({isModalVisible, setModalVisible, setFriends, setUser, socket}){

    async function sendName(e){
        e.preventDefault();
        socket.emit('user', e.target[0].value);
        setModalVisible(false);
        setUser(e.target[0].value);
        e.target.reset();
    }

    return(<>
        {isModalVisible && <form onSubmit={(e) => sendName(e)}>
        <div className='modal'>
            <div className='modal-content'>
                <input className='input-modal' type='text' placeholder="Please enter your name"/>
                <button className='button-modal' onClick={(e) => sendName(e.target.value)}>Send</button>
            </div>
        </div>
        </form>}
        </>
    )
}
