import React from 'react';
import { Component } from 'react';
import './Service.css';



class Service extends Component {
    constructor(props) {
        super(props);
        this.state = {


        }

        this.handleDelete = this.handleDelete.bind(this);
    }

    alert = () => {
        return alert('Are you sure you want to delete this item?')
    }



    handleDelete = () => {
        fetch('http://localhost:5000/work/' + this.props.work.client_service_id,
            {
                method: 'DELETE'
            })
            .then(res => {
                if (res.ok) {
                    // Tudo correu bem
                } else {

                    alert('Serviço apagado');

                }

            });


    }



    render() {

        return (
            <div>
                <div className='service-container'>

                    <form onSubmit={this.handleDelete}>
                        <p className='service'>{this.props.work.client} || {this.props.work.service} = {this.props.work.price} euros</p>
                        <button className='button_delete' type='submit' onClick={this.alert}>eliminar</button>
                    </form>
                </div>
            </div>
        )
    }


}

export default Service;
