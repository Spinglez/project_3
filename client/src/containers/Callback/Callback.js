import React, { Component } from 'react';
import Auth from '../../components/Auth/Auth';

export class Callback extends Component {
    
    componentDidMount(){
        const auth = new Auth();
        auth.handleAuthentication();
        
}
    render (){ 
        return (
            <div>
                Loading ...
            </div>
        )
    }
}

export default Callback