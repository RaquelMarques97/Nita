import React from 'react';
import {Component} from 'react';


class SearchClient extends Component {


    render() {
        return (
        
            <div className='search'>
                <p>Procurar Conta de Cliente</p>
                <input type='text' name='client' value='cliente'></input>
                
                <button action='GET' type='submit'> Procurar</button>
            </div>
        )
    }
        
 
}

export default SearchClient;
