import '../styles/message.css';


export default function MessageInput({text, isAuthor}){
    return(<div className={isAuthor ? 'message right' : 'message left'}>{text}</div>
    )
}
