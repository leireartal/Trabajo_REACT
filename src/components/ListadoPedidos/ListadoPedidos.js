import React, { Component} from 'react';
import { Route, NavLink,Redirect} from 'react-router-dom';
import './bootstrap.min.css';
//import axios from 'axios';
import axios from '../../axios';
import FullPost from '../../components/FullPost/FullPost';
import './ListadoPedidos.css';
import Pedido from './Pedido/Pedido.js';

class ListadoPedidos extends Component {
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
    expand = (id) => {
      
       // let info = <div id="infoadicional" >Hola</div>;
        console.log("me estoy ejecutando");
        //console.log(this.props.history);
       
        this.props.history.push( '/verlistadopedidos/' + id );
       
       

    //--------------------------------------------

      
       //--------------------------------------
     }

    render () {
        let urlstr = this.props.match.url + '/:id';
        console.log( urlstr);
          {/* -----------------------------------Listado--------------------------------------*/}
        let pedidos = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            pedidos = this.state.pedidos.map(pedido => {
                return <Pedido 
                    key={pedido.idb} 
                    apellido={pedido.apellido} 
                    calle={pedido.calle}
                    ciudad={pedido.ciudad}
                    cp={pedido.codigopostal}
                    email={pedido.email}
                    fecha={pedido.fecha}
                    hora={pedido.hora}
                    nombre={pedido.nombre}
                    tick={pedido.tick}
                    expandinfo={() => this.expand(pedido.idb)}
                    // addone={() => this.addOne(post.idb)} />;
                    />;
                  
            });
        }

        return (
            <div className="ListadoPedidos">
           {pedidos}
        <div className="container">
       
        <Route path={this.props.match.url + '/:id'} exact component={FullPost} />

           {/* -----------------------------------Listado--------------------------------------*/}
        </div>
            </div>
        );
    }
}

export default ListadoPedidos;