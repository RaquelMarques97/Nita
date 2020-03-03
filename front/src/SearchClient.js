import React, { Component } from 'react';

class SearchClient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            client: ""
        };
    }

 
    render() {

        return (

            
            <div>
                <h4 style={{paddingTop:'50px'}}>Escolha um cliente:</h4>
                {[...new Set(this.props.clients
                    .map(client => client.name))].sort().map((name =>
                        <h6 style={{margin:'0px'}} id="client">{name}</h6>))}

            </div>
        )
    }
}


export default SearchClient;
