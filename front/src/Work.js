import React from 'react';
import { Component } from 'react';


class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date:"",
            client_id:"",
            service_id: "",
            
        }
        this.updateDataField = this.updateDataField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    updateDataField = (e) => {

        this.setState({
            [e.target.name]: e.target.value,

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
                    <input type="date" name="date" value={this.state.date} onChange={this.updateDataField} ></input>
                   <label>Cliente</label>
                    <select></select>
                    <label>Serviço</label>
                    <select></select>
                    <br></br>
                    <button type='submit' value="Submit"> gravar</button>
                </div>
            </form>
        )
    }


}

export default Work;