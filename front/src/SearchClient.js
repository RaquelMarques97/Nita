import React, { Component } from 'react';
import './Searchclient.css';
import Service from './Service.js';

class SearchClient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected_client_id: "",
            work: [],
            sum: 0
        };

        this.getAllWorks = this.getAllWorks.bind(this);
        this.servicesList = this.servicesList.bind(this);
        this.accumulator = this.accumulator.bind(this);
    }


    componentDidMount() {
        this.getAllWorks();
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



    updateData = (e) => {
        this.setState({
            [e.target.name]: e.target.value
            //setState(updater[, callback])--->setState is an assyncronous function, its like a request because
            // its not imediate, so it receives a callback to update the state:
        }, function () {
            this.accumulator();
        });
    }



    servicesList = () => {
        if (this.state.selected_client_id === 'ALL') {

            return (this.state.work.map((work, i) => <Service selected_client_id={this.state.selected_client_id} key={i} work={work}></Service>)
            )

        } else {
            return (this.state.work.filter(work => work.client_id === +this.state.selected_client_id)
                .sort().map(work => <Service selected_client_id={this.state.selected_client_id} work={work}></Service>

                )
            )
        }
    }



    accumulator = () => {
        var x;
        if (this.state.selected_client_id === 'ALL') {
            x = this.state.work.reduce(function (acc, obj) {
                return acc + obj.price;
            }, 0);


        } else {
            let filtered_res = this.state.work.filter(work => work.client_id === +this.state.selected_client_id)
            x = filtered_res.reduce(function (a, obj) {
                return a + obj.price;
            }, 0);

        }
        console.log('-->', this.state.selected_client_id, x);
        this.setState({
            sum: x

        });
    }



    render() {


        return (

            <>
                <div className='divida'>
                    <p>Total em dívida: </p>
                    <p>{this.state.sum} euros</p>
                </div>

                <div>
                    <p className='client_account'>Conta de Cliente</p>
                    <select className='client_select' name="selected_client_id"
                        type="text"
                        style={{ width: '200px' }}
                        onChange={this.updateData}  >
                        <option>Escolha um cliente</option>
                        <option value='ALL'>TODOS</option>
                        {[...new Set(this.props.clients
                            .map(client => <option value={client.id}
                                style={{ margin: '0px' }}
                                key={client.id}
                                id="client">
                                {client.name}</option>))]
                        }

                    </select>
                </div>
                <div className='services_list'>
                    {this.servicesList()}

                </div>
            </>
        )
    }
}


export default SearchClient;
