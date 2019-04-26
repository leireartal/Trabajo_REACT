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
        totalPedido: 0,
        dibujar:false

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
      
      
        // this.props.history.push( '/verlistadopedidos/' + id );
        this.props.history.push({
            pathname: '/verlistadopedidos/' + id,
            state: this.state.pedidos
          })
      
       

    //--------------------------------------------

      
       //--------------------------------------
     }
     borrar = (id) => {
      
        
        // axios.delete('/Pedidos/' + id+'.json')
        // .then(response => {
        //     this.setState({dibujar: true});
        // });
        // this.setState({dibujar: true});
        this.props.history.push({
            pathname: '/borrarpedidos',
            state: id
          })
        // alert(this.state.dibujar);
     }

    render () {
        let urlstr = this.props.match.url + '/:id';
        console.log( urlstr);
          {/* -----------------------------------Listado--------------------------------------*/}
        let pedidos = null;
        let cuadro = <h1></h1>;
        
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
                    borrarpedido={() => this.borrar(pedido.idb)}
                    // addone={() => this.addOne(post.idb)} />;
                    />;
                  
            });
        }
      
        if(pedidos.length===0){
            pedidos = <img id="carrovacio" src="https://firebasestorage.googleapis.com/v0/b/trabajofinal-20967.appspot.com/o/shopping%20carro.jpg?alt=media&token=fd164d49-54b1-4fe6-98c2-8a456d81ab93" className="media-object" alt="Responsive image"></img>;
            
        
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