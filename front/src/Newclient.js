import React from 'react';
import { Component } from 'react';
import './Newclient.css';


class Newclient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""

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
        console.log(this.state)
        fetch('http://localhost:5000/clients',
            {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(this.state),
            })
            .then(res => res.json());


    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='newclient'>
                    <p>Inserir Cliente Novo</p>
                    <label className='client_name'>Nome:</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.updateDataField}></input>
                    <button className='button_client' type='submit' value="Submit"> gravar</button>
                </div>
            </form>
        )
    }


}

export default Newclient;
