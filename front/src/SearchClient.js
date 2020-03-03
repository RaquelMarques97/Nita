import React, { Component } from 'react';
import './Searchclient.css';

class SearchClient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected_client_id: "",
            work: []

        };

        this.getAllWorks = this.getAllWorks.bind(this);
        this.servicesList = this.servicesList.bind(this);
    }


    componentDidMount() {
        this.getAllWorks();           
                    
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
            return (this.state.work.map(work => <p style={{color:'white', fontSize:'20px'}}>{work.client} || {work.service} = {work.price} euro</p>)
            )

        } else {
            return (this.state.work.filter(work => work.client_id === +this.state.selected_client_id)
                .sort().map(item => <p style={{color:'white', fontSize:'20px'}}>{item.service} = {item.price} euro</p> )
            )
        }
    }


    render() {
        
        return (

            <>
                <div>
                    <p className='client_account'>Conta de Cliente</p>
                    <select className='client_select'  name="selected_client_id"
                        type="text"
                        style={{ width: '200px' }}
                        onChange={this.updateData}>
                        <option >Escolha um cliente</option>
                        <option value='ALL'>TODOS</option>
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
