import React, { Component } from 'react';
import Sugerencia from './Sugerencia';

class Sugerencias extends Component {

    render() {
        if(this.props.videos) {
            return (
                <div>
                {this.props.videos.map(video => {
                    return <Sugerencia  key={video.id.videoId}
                                        video={video}
                                        onChangeVideo={this.props.onChangeVideo} />
                })}
                </div>
            );
        } else { return null; }
    }
}

export default Sugerencias;
