import { useEffect, useState } from "react";
import Friend from "./Friend";

export default function TopMenu({friends}){
    const [showFriends, setShowFriends] = useState(friends);

    function filter(filterText){
        if(filterText !== '' && filterText){
            let provFriends = showFriends.filter(x => x.name.includes(filterText) || x.text.includes(filterText));
            setShowFriends(provFriends);
        } else {
            setShowFriends(showFriends);
        }

    }

    useEffect(() => {
        setShowFriends(friends);
    }, [friends])

    console.log(showFriends);


    return(
        <div>
            <div className="top-menu">
                <i className='fa fa-user-circle icon-menu pointer'></i>
                <i className="fa fa-comment icon-menu pointer"></i>
                <i className="fa fa-ellipsis-v icon-menu pointer"></i>
            </div>
            <input type="search" onChange={(e) => filter(e.target.value)} className="custon-search-input" placeholder="Search messages..."/>
                <div className="scroll">
                    {showFriends.length > 0 && showFriends.map((friend, index) =><Friend key={index} name={friend.name} time={friend.time} text={friend.text}/>)}
                    {showFriends.length == 0 && <p className="center">Sorry! No users connected!</p>}
                </div>
            </div>
    )
}
