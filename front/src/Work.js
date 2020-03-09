import React from 'react';
import { Component } from 'react';
import './work.css';


class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
            client_id: "",
            service_id: ""

        }
        this.updateDataField = this.updateDataField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    updateDataField = (e) => {
        this.setState({
            [e.target.name]: e.target.value

        });

    }

    handleSubmit = (e) => {

        fetch("/newservice",
            {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(this.state),
            })
            .then(res => res.json())
            .then(
                res => this.setState({ "flash": res.flash }),
                err => this.setState({ "flash": err.flash })

            );


        e.preventDefault();

    }

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <div className='title_new_service'>
                    <p>Inserir Pedido Novo</p>
                </div>
                <div className='newservice'>

                    <div>
                        <label>Data:</label>
                        <input type="date"
                            name="date"
                            value={this.state.date}
                            onChange={this.updateDataField} required>
                        </input>
                    </div>
                    <div>
                        <label>Cliente:</label>
                        <select name="client_id"
                            type="text"
                            style={{ width: '200px', fontSize: '20px' }}
                            onChange={this.updateDataField} required>
                            <option>Escolha um cliente</option>
                            {this.props.clients
                                .map(client =>
                                    <option value={client.id} style={{ fontSize: '30px' }} key={client.id}>
                                        {client.name}
                                    </option>)}
                        </select>
                    </div>
                    <div>
                        <label>Serviço:</label>
                        <select name="service_id"
                            style={{ width: '200px', fontSize: '20px' }}
                            type="text"
                            onChange={this.updateDataField} required>
                            <option>Escolha um serviço</option>
                            {[...new Set(this.props.services
                                .map(service => <option value={service.id} key={service.id} style={{ fontSize: '30px' }}>
                                    {service.name}
                                </option>))]}
                        </select>
                    </div>


                </div>
                <div>
                    <button className='button_service' type='submit' value="Submit"> gravar </button>
                </div>
            </form>
        )
    }


}

export default Work;