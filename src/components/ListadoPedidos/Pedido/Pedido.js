import React, { Component} from 'react';
import { Route, NavLink} from 'react-router-dom';
import './bootstrap.min.css';
//import axios from 'axios';
import axios from '../../../axios';

// import '/Pedido.css';

class Pedido extends Component {
    state = {
        pedidos: [],
        error: false,
        totalPedido: 0
    }
    
    
    componentDidMount () {
      
        axios.get( '/Pedidos.json' )
            .then( response => {
              //  console.log( response.error );
                let pedidos = [];
               
                for (let key in response.data) {
                  
                    pedidos.push({
                        ...response.data[key],
                        idb: key,
                        totalProducto: 0
                    });
                }
               
                this.setState({pedidos: pedidos});
                console.log(pedidos);
                
            } )
            .catch(error => {
                // console.log(error);
                this.setState({error: true});
               
            });
    }

    render () {
        return (
        <div className="Pedido" >
           
        <div className="container">
          {/* -----------------------------------Listado--------------------------------------*/}
       
          <div  class="list-group-item list-group-item-action ">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">{this.props.idb} </h5>
                    <small>{this.props.fecha} {this.props.hora}</small>
                 </div>
                <p class="mb-1">CLIENTE: {this.props.nombre} {this.props.apellido}</p>
                <small>Total: {this.props.tick.importe}</small>
                <p>
                <small>
                
                <NavLink
                                className="text-success"
                                onClick={this.props.expandinfo}
                                to={{
                                    pathname:'/verlistadopedidos/' + this.props.idb,
                                    state: this.props
                                            
                                }}
                                // exact
                                // activeClassName="text-muted"
                               >Ver pedido</NavLink> </small> 
                                <small><NavLink
                                className="text-danger"
                                onClick={this.props.borrarpedido}
                                to={{
                                    pathname: '/borrarpedidos',
                                     state: this.props
                                            
                                     
                                }}
                                exact
                                activeClassName="text-muted"
                               >Borrar pedido</NavLink> </small>
                               <small> <NavLink
                                className="text-info"
                                onClick={this.props.cargarpedido}
                                to={{
                                    pathname: '/modifiedposts',
                                     state: this.props
                                            
                                     
                                }}
                                exact
                                activeClassName="text-muted"
                               >Cargar Pedido</NavLink></small>
               
                </p>
                
              
        </div>
           {/* -----------------------------------Listado--------------------------------------*/}
        </div>
            </div>
        );
    }
}

export default Pedido;