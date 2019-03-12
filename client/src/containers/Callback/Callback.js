import React, { Component } from 'react';
// import { Auth } from '../../components/index';

// const auth = new Auth();

export class Callback extends Component {

    
//     componentDidMount(){

//         console.log(window.location.hash)

//         const hash = window.location.hash

//         console.log(hash);

//         auth.auth0.parseHash(hash, function(err, authResult) {
//             console.log(authResult);
//             if (err) {
//               return console.log(err);
//             }
//             auth.client.userInfo(authResult.accessToken, function(err, user) {
//                 console.log(user);
//             });
//           });
        
// }


    render (){ 
        return (
            <div>
                Loading ...
            </div>
        )
    }
}

export default Callback