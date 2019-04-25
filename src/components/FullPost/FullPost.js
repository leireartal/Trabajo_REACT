import React, { Component } from 'react';
//import axios from 'axios';
import axios from '../../axios';
import './FullPost.css';
import './bootstrap.min.css';

class FullPost extends Component {
    state = {
        loadedPost:[]
    }

    componentDidMount () {
        console.log(this.props);
       // this.loadData();
    }

    componentDidUpdate() {
       // this.loadData();
    }
    shouldComponentUpdate(){
        
        console.log(this.props.match.params.id );
        
    }

    // loadData () {
    //     if ( this.props.match.params.id ) {
    //         let cad = '/Pedidos/' + this.props.match.params.id;
    //         console.log(cad);
    //         if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id) ) {
    //             axios.get( '/Pedidos/' + this.props.match.params.id +'.json')
    //                 .then( response => {
                       
    //                     this.setState( { loadedPost: response.data } );
    //                     console.log("I will put: "+this.state.loadedPost);
    //                 } );
    //         }
    //     }
    // }

    // deletePostHandler = () => {
    //     axios.delete('/posts/' + this.props.match.params.id)
    //         .then(response => {
    //             console.log(response);
    //         });
    // }

    render () {
      
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if ( this.props.match.params.id ) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
            <p>{this.props.match.params.id}</p>;
        }
        if ( this.state.loadedPost ) {
            for (let i = 0; i < this.props.location.state.length; i++) {
                if(this.props.location.state[i].idb==this.props.match.params.id){
                post = (
                    <div class="container,FullPost">
    

                       
                        
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="card w-75">
                                <span class="border border-danger">
                                    <div id="cuadrorosa" class="card-body">
                                        <h5 class="card-title">FICHA DEL CLIENTE</h5>
                                           <p class="card-text">  <b>Nombre: </b>{this.props.location.state[i].nombre} {this.props.location.state[i].apellido}</p>
                                          <p class="card-text">  <b>Localidad: </b>{this.props.location.state[i].ciudad} {this.props.location.state[i].codigopostal}</p>
                                           <p class="card-text"> <b>Calle: </b>{this.props.location.state[i].calle} </p>
                                           <p class="card-text"> <b>@: </b>{this.props.location.state[i].email} </p>
                                                
                                     </div>
                                     </span>
                                </div>
                            </div>
  
                            <div class="col-sm-8">
                                <div class="card w-100">
                                <span class="border border-primary w-100">
                                    <div id="cuadroazul" class="card-body">
                                    <h5 class="card-title">FICHA DEL PEDIDO</h5>
                                    <table class="table table-bordered table-responsive-sm w-75">
                                        <thead>
                                            <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">{this.props.location.state[i].tick.compra[0].Nombre}</th>
                                            <th scope="col">{this.props.location.state[i].tick.compra[1].Nombre}</th>
                                            <th scope="col">{this.props.location.state[i].tick.compra[2].Nombre}</th>
                                            <th scope="col">{this.props.location.state[i].tick.compra[3].Nombre}</th>
                                            <th scope="col">{this.props.location.state[i].tick.compra[4].Nombre}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <th scope="row">Unidades</th>
                                            <td>{this.props.location.state[i].tick.compra[0].Unidades}</td>
                                            <td>{this.props.location.state[i].tick.compra[1].Unidades}</td>
                                            <td>{this.props.location.state[i].tick.compra[2].Unidades}</td>
                                            <td>{this.props.location.state[i].tick.compra[3].Unidades}</td>
                                            <td>{this.props.location.state[i].tick.compra[4].Unidades}</td>
                                            </tr>
                                            <tr>
                                            <th scope="row">Total Producto(€)</th>
                                            <td>{this.props.location.state[i].tick.compra[0].totalProducto}</td>
                                            <td>{this.props.location.state[i].tick.compra[1].totalProducto}</td>
                                            <td>{this.props.location.state[i].tick.compra[2].totalProducto}</td>
                                            <td>{this.props.location.state[i].tick.compra[3].totalProducto}</td>
                                            <td>{this.props.location.state[i].tick.compra[4].totalProducto}</td>
                                            </tr>
                                            <tr>
                                            <th scope="row">Total Pedido</th>
                                            <td colspan="5">{this.props.location.state[i].tick.importe}</td>
                                            
                                            </tr>
                                        </tbody>
                                        </table>




                                            <small><i>Pedido realizado el: {this.props.location.state[i].fecha} a las: {this.props.location.state[i].hora} </i></small>
                                           
                                                
                                    </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                            
                            
                            
                            
                            
                            {/* <b>Identificador de pedido: </b>
                            <p>{this.props.match.params.id}</p>
                            <b>Solicitante: </b>
                        

                            
                            <p>{this.props.location.state[i].nombre}</p> */}
                        
                        
                        </div>
                   

                     );
                }
            }
        }
        return post;
    }
}

export default FullPost;