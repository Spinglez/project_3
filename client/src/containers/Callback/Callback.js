import React, { Component } from 'react';
import { Auth } from '../../components/index'
import { Redirect } from 'react-router-dom'

export class Callback extends Component {

    render (){ 
        return (
            <div>
                Loading ...
                <Redirect to= '/survey' />
            </div>
        )
    }
}

export default Callback