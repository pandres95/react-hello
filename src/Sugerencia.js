import React, { Component } from 'react';

class Sugerencia extends Component {

    render() {
        return (
            <div onClick={() => this.props.onChangeVideo(this.props.video)}>
            <img alt={this.props.video.snippet.title} src={this.props.video.snippet.thumbnails.default.url}/>
            {this.props.video.snippet.title}
            </div>
        )
    }
}

export default Sugerencia;
