import React from 'react';
import { Component } from 'react';


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
                <div className='new'>
                    <p>Inserir Pedido Novo</p>

                    <label>Data:</label>
                    <input type="date"
                        name="date"
                        value={this.state.date}
                        onChange={this.updateDataField} >
                    </input>

                    <label>Cliente</label>
                    <select name="client_id"
                        type="text"
                        style={{ width: '200px' }}
                        onChange={this.updateDataField}
                        >
                        {this.props.clients
                            .map(client => 
                                <option value={client.id} style={{ fontSize: '30px' }}>
                                    {client.name}
                                </option>)}
                    </select>

                    <label>Serviço</label>
                    <select name="service_id"
                        type="text"
                        style={{ width: '150px' }}
                        onChange={this.updateDataField}
                        >
                        {[...new Set(this.props.services
                            .map(service => <option value={service.id} style={{ fontSize: '30px' }}>
                            {service.name}
                        </option>))]}
                    </select>

                    <button type='submit' value="Submit"> gravar</button>
                </div>
            </form>
        )
    }


}

export default Work;