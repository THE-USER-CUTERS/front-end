import Friend from "./Friend";

export default function TopMenu(){
    return(
        <div>
            <div className="top-menu">
                <i className='fa fa-user-circle icon-menu'></i>
                <i className="fa fa-comment icon-menu"></i>
                <i className="fa fa-ellipsis-v icon-menu"></i>
            </div>
            <input type="search" className="custon-search-input" placeholder="Search messages..."/>
                <Friend name={"Lucas"} time={"12:40"} text={"ksjdhdshdsgdhsdggfsdf;sfkjelkfjekhroeshfkljsdklfjdlkfjhldsha"}/>
            </div>
    )
}
