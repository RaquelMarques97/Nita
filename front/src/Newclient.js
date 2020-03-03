import React from 'react';
import { Component } from 'react';


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
        fetch('http://localhost:5000/',
        {
            method: 'POST',
            headers: new Headers({
              'Content-Type': 'application/json'
            }),
            body: JSON.stringify(this.state),
          })
            .then(res => res.json());  
        
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='new'>
                    <p>Inserir Cliente Novo</p>
                    <label>Nome:</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.updateDataField}></input>
                    <button type='submit' value="Submit"> gravar</button>
                </div>
            </form>
        )
    }


}

export default Newclient;
