import React, {Component} from 'react';
import Seoul from '../CreateAcc/SeoulLG.mp4';

class BgVideo extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: Seoul
        }
    }

    render () {
        return (
            
            <video style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
                opacity: 0.4,
              }} loop autoPlay>

                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
        )
    }
};

export default BgVideo;