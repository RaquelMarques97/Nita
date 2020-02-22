import React from 'react';
import { Component } from 'react';


class NewService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            price: "",
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
                    <p>Inserir Serviço Novo</p>
                    
                    <label>Serviço:</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.updateDataField} ></input>
                    <label>Preço:</label>
                    <input type="number" name="price" value={this.state.price} onChange={this.updateDataField} ></input>
                   
                    <button type='submit' value="Submit"> gravar</button>
                </div>
            </form>
        )
    }


}

export default NewService;