
  function UserInformationBar({profilePic, username}){

    return (
      <div id="user-info-bar">
          <img src={profilePic}></img>
          <div>{username}</div>
      </div>
    )
}

export default UserInformationBar;
