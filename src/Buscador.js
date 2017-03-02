import React, { Component } from 'react';

class Buscador extends Component {
    constructor(props) {
        super(props);

        this.search = this.search.bind(this);
    }

    search(event) {
        this.props.onSearch(event.target.value);
    }

    render() {
        return (
            <input type="text" placeholder="Buscar" onChange={this.search} />
        );
    }
}

export default Buscador;
