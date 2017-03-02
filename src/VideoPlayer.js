import React, { Component } from 'react';

class Buscador extends Component {

    render() {
        const video = this.props.video;

        if(video) {
            const url = 'https://www.youtube.com/embed/' + video.id.videoId + "?autoplay=1";

            return (
                <iframe src={url} />
            );
        } else {
            return (
                <div>Ingrese el nombre de un vídeo</div>
            );
        }
    }
}

export default Buscador;
