import '../styles/modal.css'

export default function Modal({isModalVisible, setModalVisible, setFriends, setUser}){

    async function sendName(name){
        setModalVisible(false);
        setUser(name);
        try {
            const response = await fetch("http://localhost:5001/", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name: name,
              }),
            });
            const data = await response.json();
            setFriends(data)

          } catch (error) {
            console.log(error);
        }
    }

    return(
        <div className='modal'>
            <div className='modal-content'>
                <input className='input-modal' type='text' placeholder="Please enter your name"/>
                <button className='button-modal' onClick={(e) => sendName(e.target.value)}>Send</button>
            </div>
        </div>
    )
}
