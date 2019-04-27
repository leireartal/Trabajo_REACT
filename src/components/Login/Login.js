import React, { Component} from 'react';
import { Route, NavLink} from 'react-router-dom';
import './bootstrap.min.css';
//import axios from 'axios';
import axios from '../../axios';

import './Login.css';

class Login extends Component {
    state = {
        usuario: '',
        contra: ''
       
    }
    dataHandler = () => {
   
        let DBcontra = '';
        
       
         axios.get( '/usuarios.json' )
     .then( response => {
        console.log( response.data );
        DBcontra = response.data.Leire
         if(DBcontra==this.state.contra){
            this.props.history.push({
                pathname: '/admin',
                // state: this.state.pedidos
                state: { auth: true
                   
            }
        })
        }else{
            this.props.history.push({
                pathname: '/admin',
                // state: this.state.pedidos
                state: { auth: false

        }
    })
}
        
        
        //  for (let key in response.data) {
           
        //      posts.push({
        //          ...response.data[key],
        //          idb: key,
        //          totalProducto: 0
        //      });
        //      this.setState({posts: posts});
        //  }
     } )
     .catch(error => {
          console.log(error);
         //this.setState({error: true});
        
     });
  
            
       }
  

    render () {
        return (
            <div className="Login">
            {/* -----------------------------------cuadro verde--------------------------------------*/}
        <div className="container">
                <form className="needs-validation" >
                <div class="form-group">
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label >Usuario</label>
                            <input id="validationCustom01" placeholder="Usuario" type="text" class="form-control" value={this.state.usuario} onChange={(event) => this.setState({usuario: event.target.value}) }></input>
                            
                </div>
                    <div class="col-md-6 mb-3">
                        <label>Contraseña</label>
                        <input type="password" class="form-control" id="validationCustom02" placeholder="******"   value={this.state.contra} onChange={(event) => this.setState({contra: event.target.value}) }></input>
                        
                    </div>
               
            </div>
   
       

        </div>
        
        {/* <button onClick={()=>this.dataHandler(this.props.location)} class="btn btn-danger" >Enviar</button> */}
        <NavLink 
                            className="btn btn-danger"
                            // to="/agradecimiento"
                            exact
                            activeClassName="my-active"
                        // alignm="left"
                        onClick={()=>this.dataHandler()}
                        >Enviar
        </NavLink>

        </form>
        </div>
            </div>
        );
    }
}

export default Login;