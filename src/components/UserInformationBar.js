import '../styles/UserInformationBar.css'

  function UserInformationBar({profilePic, username}){

    return (
      <div id="user-info-bar">
          <img src={profilePic}></img>
          <div id="username">{username}</div>
      </div>
    )
}

export default UserInformationBar;
