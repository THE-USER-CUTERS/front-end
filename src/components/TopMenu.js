import Friend from "./Friend";

export default function TopMenu(){
    return(
        <div>
            <div className="top-menu">
                <i className='fa fa-user-circle icon-menu pointer'></i>
                <i className="fa fa-comment icon-menu pointer"></i>
                <i className="fa fa-ellipsis-v icon-menu pointer"></i>
            </div>
            <input type="search" className="custon-search-input" placeholder="Search messages..."/>
                <div className="scroll">
                <Friend name={"Lucas"} time={"12:40"} text={"Have you seen my message?"}/>
                <Friend name={"Sofia"} time={"1:35"} text={"Hi how are you today? Looking forward to see you later"}/>
                <Friend name={"Bank Account"} time={"12:40"} text={"Verify Your Bank Account"}/>
                <Friend name={"Mum"} time={"10:00"} text={"Are you coming to have lunch? You dad is coming!"}/>
                </div>
            </div>
    )
}
