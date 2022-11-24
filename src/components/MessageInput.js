import '../styles/message.css';


export default function MessageInput({text, isAuthor, Author}){
    return(<div className={isAuthor ? 'message right' : 'message left'}>{Author} : {text}</div>
    )
}
