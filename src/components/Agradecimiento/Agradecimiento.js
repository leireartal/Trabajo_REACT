import React, { Component} from 'react';
import { Route, NavLink} from 'react-router-dom';
import './bootstrap.min.css';
//import axios from 'axios';
import axios from '../../axios';

import './Agradecimiento.css';

class Agradecimiento extends Component {
    // state = {
    //     title: '',
    //     content: '',
    //     author: 'Max'
    // }

    // postDataHandler = () => {
    //     const data = {
    //         title: this.state.title,
    //         body: this.state.content,
    //         author: this.state.author
    //     };
    //     axios.post('/entradas.json', data)
    //         .then(response => {
    //             alert('Saved order');
    //             //console.log(response);
    //         }).catch(error => {
    //              console.log(error);
    //             // this.setState({error: true});
    //             alert('Error order');
    //         });
    // }

    render () {
        return (
            <div className="Agradecimiento">
            {/* -----------------------------------cuadro verde--------------------------------------*/}
        <div className="container">
            <div class="alert alert-success" role="alert">
                <h4 class="alert-heading">¡ENHORABUENA!</h4>
                <p>Los datos de su pedido han sido registrados correctamente en nuestra base de datos. Recibirá un e-mail con los detalles y el identificador de su pedido</p>
                <hr></hr>
                <p class="mb-0">¡Gracias por utilizar nuestro servicio!</p>
            </div>
       
        <div className="row" >
                    <div class="col-sm-4">
                        <NavLink 
                            className="btn btn-outline-success"
                             to="/posts"
                        >Realizar un nuevo pedido
                        </NavLink>
                    </div>
        </div>
        </div>
            </div>
        );
    }
}

export default Agradecimiento;