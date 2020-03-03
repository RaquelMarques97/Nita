import React, { Component } from 'react';

class SearchClient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected_client_id: "",
            work: []

        };

        this.getAllWorks = this.getAllWorks.bind(this);
    }


    componentDidMount() {
        this.getAllWorks();
        this.servicesList();
        
            
    }


    updateData = (e) => {
        this.setState({
            [e.target.name]: e.target.value

        });

    }

    getAllWorks = () => {
        fetch('http://localhost:5000/work')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    work: res
                });

            })
    }

    servicesList = () => {
        if (this.state.selected_client_id === 'ALL') {
            return (this.state.work.map(work => <p>{work.client}<br></br>{work.service}= {work.price} euro</p>)
            )

        } else {
            return (this.state.work.filter(work => {
                return work.client_id === this.state.selected_client_id
            })
                .sort().map(item => <p>{item}</p> )
            )
        }
    }


    render() {
        console.log(this.state.work)

        return (

            <>
                <div>
                    <h4 style={{ paddingTop: '50px' }}>Escolha um cliente:</h4>
                    <select name="selected_client_id"
                        type="text"
                        style={{ width: '200px' }}
                        onChange={this.updateData}>
                        
                        <option  value='ALL'>ALL</option>
                        {[...new Set(this.props.clients
                            .map(client => <option value={client.id}
                                style={{ margin: '0px' }}
                                id="client">
                                {client.name}</option>))]
                        }

                    </select>
                </div>
                <div>                  
                   {this.servicesList()}
                </div>
            </>
        )
    }
}


export default SearchClient;
