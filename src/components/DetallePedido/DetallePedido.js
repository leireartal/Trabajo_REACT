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
                 <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                  <hr className="my-4"></hr>
                 <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        {/* --------------Boton precio---------------------------------------------------- */}
        <div className="row">
        <div className="col-sm-6">
        <div class="table-responsive">
            <table class="table">
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
    <img src="https://firebasestorage.googleapis.com/v0/b/trabajofinal-20967.appspot.com/o/carrito.jpg?alt=media&token=1827eb89-12a1-4727-b290-9372df999bea"  className="media-object" alt="Responsive image" ></img>
    </div>
    </div>   
    <div className="row">
        <div className="col-sm-6">
            <div className="card" >
                <div id="botonTotalPedido2" className="card-header">
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
   
    <nav>
        <ul>
             <li><NavLink
                    to="/posts/"
                    exact
                    activeClassName="my-active"
                    activeStyle={{
                        color: '#fa923f',
                        textDecoration: 'underline'
                    }}>Volver a la tienda</NavLink>
            </li>
            <li><NavLink
                    to="/AceptarPedido/"
                    exact
                    activeClassName="my-active"
                    activeStyle={{
                        color: '#fa923f',
                    }}>Continuar</NavLink>
            </li>

    </ul>
    </nav>
</div>
</div>
        );

    }
}

export default DetallePedido;