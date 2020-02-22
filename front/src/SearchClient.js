import React, { Component } from 'react';

class SearchClient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clients: []
        };
    }

    componentDidMount() {
        this.getAllData();

    }

    getAllData = () => {
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    clients: res
                });

            })
    }

    render() {

        return (

            <div className='search' >
                <h5>Escolha um cliente:</h5>
                {
                    this.state.clients.map((el, i) => {
                        return (
                            <p key={i}>{(el.name)}</p>)
                    })
                }
            </div >
        )
    }
}


export default SearchClient;
