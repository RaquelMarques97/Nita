import React from 'react';
import {Component} from 'react';


class Newclient extends Component {


    render() {
        return (
        
            <div className='new'>
                <p>Inserir Cliente Novo</p>
                <input type='date' name='date' value='data'></input>
                <input type='text' name='client' value='cliente'></input>
                <input type='text' name='service' value='serviço'></input>
                <input type='text' name='price' value='preço'></input>
                <button type='submit'> gravar</button>
            </div>
        )
    }
        
 
}

export default Newclient;
