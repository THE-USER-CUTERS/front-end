import '../styles/rightMenu.css';
import TopMenu from './TopMenu';

export default function LeftMenu({friends}) {
    return(
        <div className="menu">
            <TopMenu friends={friends}/>
            <div></div>
        </div>
    )
}
