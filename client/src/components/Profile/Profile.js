import React, { Component } from 'react';



class Profile extends Component {
  login() {
    this.props.auth.login();
  }
  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }
  render() {
    const { profile } = this.state;
    return (
      <div className="profile-area">
        <h1>{profile.name}</h1>
          <img src={profile.picture} alt="profile" />
          <div>
            <h3>{profile.nickname}</h3>
          </div>
          <pre>{JSON.stringify(profile, null, 2)}</pre>
      </div>
    );
  }
}

export default Profile;