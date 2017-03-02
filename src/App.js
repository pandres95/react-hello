import React, { Component } from 'react';
import Buscador from './Buscador';
import VideoPlayer from './VideoPlayer';
import Sugerencias from './Sugerencias'
import './App.css';

import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBO2X_sbhPxB6E-VlxF2h3R_EemI5BLMQo';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            video: null,
            videos: []
        };
    }

    search(query) {
        YTSearch({ key: API_KEY, term: query }, videos => this.setState({
            video: query.length > 0 ? videos[0] : null,
            videos: query.length > 0 ? videos : []
        }));
    }

    setVideo(video) {
        this.setState({ video: video });
    }

    render() {
        return (
            <div className="App">
            <Buscador       onSearch={this.search.bind(this)} />
            <VideoPlayer    video={this.state.video} />
            <Sugerencias    videos={this.state.videos}
                            onChangeVideo={video => this.setVideo(video)}/>
            </div>
        );
    }
}

export default App;
