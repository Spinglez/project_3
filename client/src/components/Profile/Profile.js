import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Profile extends Component {
    render() {
        return (
            <div>
                <h1>You've made it to the profile page!</h1>
                <Link to ="/survey">
                <button>Take our Survey</button>
                </Link>
            </div>
        );
    }
}

export default Profile;