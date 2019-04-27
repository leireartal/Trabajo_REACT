import React, { Component } from 'react';
//import axios from 'axios';
import axios from '../../axios';

import './Admin.css';

class Admin extends Component {
    state = {
        pedidos:[],
        importetotal:0,
        escribirbeneficio:false
    }

  

    render () {
        
        let texto=<h1>Usuario/contraseña incorrectos</h1>;
        if(this.props.location.state.auth){
            texto=<h1>Bienvenido a la página de administrador</h1>;
            //Llamada ajax para calcular el beneficio
            axios.get( '/Pedidos.json' )
            .then( response => {
              //  console.log( response.error );
                let pedidos = [];
                let sumaimporte=0;
               
                for (let key in response.data) {
                 
                    pedidos.push({
                        ...response.data[key],
                        idb: key,
                        totalProducto: 0
                    });
                    sumaimporte = sumaimporte+parseFloat(response.data[key].tick.importe);
                }
               
                this.setState({pedidos: pedidos});
                this.setState({importetotal: sumaimporte});
                this.setState({escribirbeneficio: true});
                console.log(pedidos);
                
                
            } )
            .catch(error => {
                // console.log(error);
                this.setState({error: true});
               
            });




            //---------------------------------------
        }
        console.log(this.props.location);
        let benef=<p></p>;
        if(this.state.escribirbeneficio){benef = <div id="beneficio" className="alert alert-danger" role="warning">
        <h4 class="alert-heading">BENEFICIO ACUMULADO</h4>
        <p>{this.state.importetotal}</p>
   </div>;}
        
        return (
            <div className="Admin">
             <div className="container">
                <div className="row">
               {texto}
               </div>
               
            
            <div className="row">
                 {benef}
            </div>
            </div>
            </div>

           
        );
    }
}

export default Admin;