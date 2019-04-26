import React, { Component} from 'react';
import { Route, NavLink} from 'react-router-dom';
import './bootstrap.min.css';
//import axios from 'axios';
import axios from '../../axios';

import './ConfirmacionBorrado.css';

class ConfirmacionBorrado extends Component {
  
 // state = {
    //     lista: [],
    //     totalPedido: ""
    // }
    constructor(props) {
        super(props);
       
    }
    componentWillUpdate () {
        
        
    }

    // componentWillReceiveProps() {
    //     var index =Object.keys(this.props.location.state.prods)[0];
    //     this.setState({totalPedido:'jjjj'});
    //     this.setState({lista:this.props.location.state.prods[index]});

       
     
    //   console.log("He pasado de un lado a otro: "+this.props.location.state.prods[index]);
    //   console.log("totalpedido: "+this.state.totalPedido);
    // }
    componentWillReceiveProps() {

      }
      borrarFirebase = (id) => {
      
        
        axios.delete('/Pedidos/' + this.props.location.state+'.json')
        .then(response => {
            this.setState({dibujar: true});
        });
        
       
     }

    render () {
        return (
            <div className="ConfirmacionBorrado">
            {/* -----------------------------------cuadro verde--------------------------------------*/}
        <div className="container">
            <div class="alert alert-danger" role="alert">
                <h4 class="alert-heading">¡ATENCIÓN!</h4>
                <p>Esta apunto de borrar el pedido con identificador: {this.props.location.state}</p>
                <hr></hr>
                <p class="mb-0">Pulse aceptar para confirmar la operación</p>
            </div>
       
        <div className="row" >
                    <div class="col-sm-4">
                        <NavLink 
                         onClick={this.borrarFirebase}
                            className="btn btn-outline-danger"
                             to="/posts"
                        >Aceptar
                        </NavLink>
                    </div>
        </div>
        </div>
            </div>
        );
    }
}

export default ConfirmacionBorrado;