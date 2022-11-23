import { useEffect, useState } from 'react';
import '../styles/friend.css';

export default function Friend({name, text, time}){

    const [textPreview, setTextPreview] = useState(text);

    useEffect(() => {
        checkTextLenght();
    }, [text]);

    function checkTextLenght(){
        if(text.length > 20 ){
            let provisionalString = text.substring(0, 24) + "...";
            setTextPreview(provisionalString)
        }
    }

    return(
        <div>
            <div className="friend pointer">
                <div className='item-center'>
                    <div><i className='fa fa-user-circle icon-menu friend-image'></i></div>
                    <div className='body'>
                        <div className='name'>{name}</div>
                        <div className='time'>{time}</div>
                        <div className=''></div>
                        <div className=''>{textPreview}</div>
                    </div>

                </div>

            </div>

        </div>
    )
}
