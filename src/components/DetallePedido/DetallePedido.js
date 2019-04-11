import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink, Switch } from 'react-router-dom';

import './DetallePedido.css';

class DetallePedido extends Component {
    state = {
        posts: [],
        totalPedido: 0
    }

    componentWillUpdate () {
        
        //this.loadData();
    }

    componentWillReceiveProps() {
       // this.loadData();
       this.setState({totalPedido:this.props.location.state.final});
       this.setState({posts:this.props.location.state.prods[0]});
      //console.log("hola"+this.props.location.state.prods[0][0].Unidades);
      console.log("He pasado de un lado a otro: "+this.state.posts[0][0].Unidades);
      console.log("totalproducto: "+this.state.totalPedido);
    }

 

    render () {
       
    return (
    <div className="DetallePedido" >
        <div className="row" >
            <div id="cuadroDetalleDelPedido" className="jumbotron">
                 <h1 className="display-4">CARRITO</h1>
                 <p className="lead">¡Gracias por usar nuestros servicios! A continuación se muestra el detalle de su pedido. Compruebe que los datos son correctos</p>
                  <hr className="my-4"></hr>
                 {/* <p>A continuación se muestra el detalle de su pedido. Compruebe que los datos son correctos</p> */}
        {/* --------------Boton precio---------------------------------------------------- */}
        <div className="row">
        <div className="col-sm-6">
        <div class="table-responsive">
            <table id="ticket" class="table">
            <thead>
                    <tr>
                    <th scope="col">Nombre del Producto</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Unidades</th>
                    
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">{this.props.location.state.prods[0][0].Nombre}</th>
                        <td>{this.props.location.state.prods[0][0].Precio}</td>
                        <td>{this.props.location.state.prods[0][0].Unidades}</td>
                    </tr>
                    <tr>
                    <th scope="row">{this.props.location.state.prods[0][1].Nombre}</th>
                        <td>{this.props.location.state.prods[0][1].Precio}</td>
                        <td>{this.props.location.state.prods[0][1].Unidades}</td>
                    </tr>
                    <tr>
                    <th scope="row">{this.props.location.state.prods[0][2].Nombre}</th>
                         <td>{this.props.location.state.prods[0][2].Precio}</td>
                        <td>{this.props.location.state.prods[0][2].Unidades}</td>
                    </tr>
                    <tr>
                    <th scope="row">{this.props.location.state.prods[0][3].Nombre}</th>
                         <td>{this.props.location.state.prods[0][3].Precio}</td>
                        <td>{this.props.location.state.prods[0][3].Unidades}</td>
                    </tr>
                    <tr>
                    <th scope="row">{this.props.location.state.prods[0][4].Nombre}</th>
                         <td>{this.props.location.state.prods[0][4].Precio}</td>
                        <td>{this.props.location.state.prods[0][4].Unidades}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        {/* ------------------------------------------------------------------------------ */}
       
    </div>
    <div className="col-sm-6">
    <img id="carrito" src="https://firebasestorage.googleapis.com/v0/b/trabajofinal-20967.appspot.com/o/carrito%204.png?alt=media&token=931bc09d-5b61-4b90-8d9c-5ea6ae17707a" ></img>
    </div>
    </div>   
    <div className="row">
        <div className="col-sm-6">
            <div className="card" >
                <div id="botonTotalPedido2" type="button" className="card-header">
                Total del pedido
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{this.props.location.state.final} </li>
             </ul>
        </div>
    </div>
    </div>
   
    </div>  
    </div>
<div className="row" >
   
    <nav className='navbar navbar-dark bg-dark'>

             <NavLink 
                    // className="btn btn-secondary"
                    to="/posts/"
                    exact
                    activeClassName="my-active"
                    alignm="left"
                    activeStyle={{
                       backgroundColor:'rgb(182, 18, 18)',
                       textAlign:'left',
                       alignm:'left'

                    }}>Volver a la tienda</NavLink>
        </nav>
    </div>
    <div className="row" >
        <nav className='navbar navbar-dark bg-dark'>
            
           <NavLink
                    // className="btn btn-secondary"
                    alignm="right"
                    to="/AceptarPedido/"
                    exact
                    activeClassName="my-active"
                    activeStyle={{
                        color: '#fa923f',
                        
                    }}>Continuar</NavLink>
           
    </nav>
    
</div>
</div>
        );

    }
}

export default DetallePedido;