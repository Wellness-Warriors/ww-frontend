import React from 'react';

class MyProfile extends React.Component{
  render(){
    console.log(this.props.auth0);
    return(
      <div>
        <h1>Hello from MyProfile component</h1>
        {/* <img src={user.picture} alt={user.name}/>
        <p>{user.email}</p> */}
      </div>
    );
  }
}

export default MyProfile;
