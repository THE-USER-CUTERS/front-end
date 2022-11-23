import { useState } from "react";
import Friend from "./Friend";

const friends = [
    {name: 'Lucas', time: '12:30', text: "Have you seen my message?"},
    {name: 'Sofia', time: '1:35', text: "Hi how are you today? Looking forward to see you later"},
    {name: 'Bank Account', time: '16:50', text: "Have you seen my message?"},
    {name: 'Mum', time: '10:00', text: "Are you coming to have lunch? You dad is coming!"}

]

export default function TopMenu(){

    const [showFriends, setShowFriends] = useState(friends);

    function filter(filterText){
        if(filterText !== '' && filterText){
            let provFriends = friends.filter(x => x.name.includes(filterText) || x.text.includes(friends));
            setShowFriends(provFriends);
        } else {
            setShowFriends(friends);
        }

    }


    return(
        <div>
            <div className="top-menu">
                <i className='fa fa-user-circle icon-menu pointer'></i>
                <i className="fa fa-comment icon-menu pointer"></i>
                <i className="fa fa-ellipsis-v icon-menu pointer"></i>
            </div>
            <input type="search" onChange={(e) => filter(e.target.value)} className="custon-search-input" placeholder="Search messages..."/>
                <div className="scroll">
                    {showFriends.map((friend, index) =><Friend key={index} name={friend.name} time={friend.time} text={friend.text}/>)}
                </div>
            </div>
    )
}
