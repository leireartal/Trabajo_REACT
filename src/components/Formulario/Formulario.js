import React, { Component } from 'react';
// import axios from 'axios';
import { Route, NavLink, Switch } from 'react-router-dom';
import './bootstrap.min.css';
import './Formulario.css';
import axios from '../../axios';

class Formulario extends Component {
    state = {
        apellido: '',
        ciudad: '',
        codigopostal:0,
        calle:'',
        fecha:'',
        nombre:'',
        email:'',
    }

    // componentWillUpdate () {
        

    // }

    // componentWillReceiveProps() {
       
    //    this.setState({totalPedido:this.props.location.state.final});
    //    this.setState({posts:this.props.location.state.prods[0]});
      
    //   console.log("He pasado de un lado a otro: "+this.state.posts[0][0].Unidades);
    //   console.log("totalproducto: "+this.state.totalPedido);
    // }

    dataHandler = () => {
        var date = new Date(). getDate();
        this.setState({fecha:  date});
        const data = {
            apellido: this.state.apellido,
            ciudad: this.state.ciudad,
            codigopostal: this.state.codigopostal,
            calle:this.state.calle,
            fecha:this.state.fecha,
            nombre:this.state.nombre,
            email:this.state.email
        };
        // alert(data.apellido);
        axios.post('/Pedidos.json', data)
            .then(response => {
                // alert('Saved order');
                // console.log(this.state.apellido);
               
            }).catch(error => {
                 console.log(error);
                // this.setState({error: true});
                alert('Error order');
            });
          
    }

    render () {
        
    return (

    <div className="Formulario" >
    <div className="container">
    {/* -----------------------------------------Formulario------------------------------------------------ */}
    
    <form className="needs-validation" >
        <div className="form-row">
             <div className="col-md-4 mb-3">
                 <label >NOMBRE</label>
                    <input id="validationCustom01" placeholder="Leire" type="text" class="form-control" value={this.state.nombre} onChange={(event) => this.setState({nombre: event.target.value}) } required></input>
                     
         </div>
            <div class="col-md-4 mb-3">
                 <label>APELLIDO</label>
                <input type="text" class="form-control" id="validationCustom02" placeholder="Artal"  value={this.state.apellido} onChange={(event) => this.setState({apellido: event.target.value})} required></input>
                 
            </div>
             <div class="col-md-4 mb-3">
                <label>e-MAIL</label>
                    <div class="input-group">
                        <div class="input-group-prepend">
                             <span class="input-group-text" id="inputGroupPrepend">@</span>
                        </div>
                        <input type="text" class="form-control" id="validationCustomUsername" placeholder="e-mail" aria-describedby="inputGroupPrepend" required value={this.state.email} onChange={(event) => this.setState({email: event.target.value})}></input>
                         <div class="invalid-feedback">
                             Please choose a username.
                      </div>
                </div>
         </div>
    </div>
    <div class="form-row">
        <div class="col-md-6 mb-3">
             <label >CIUDAD</label>
            <input type="text" class="form-control" id="validationCustom03" placeholder="Zizur Mayor" required value={this.state.ciudad} onChange={(event) => this.setState({ciudad: event.target.value})}></input>
          <div class="invalid-feedback">
         Please provide a valid city.
         </div>
    </div>
    <div class="col-md-3 mb-3">
      <label >CÓDIGO POSTAL</label>
      <input type="text" class="form-control" id="validationCustom04" placeholder="31180" required value={this.state.codigopostal} onChange={(event) => this.setState({codigopostal: event.target.value})}></input>
      <div class="invalid-feedback">
        Please provide a valid state.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label >CALLE</label>
      <input type="text" class="form-control" id="validationCustom05" placeholder="c/zabalgaina" required value={this.state.calle} onChange={(event) => this.setState({calle: event.target.value})}></input>
      <div class="invalid-feedback">
        Please provide a valid zip.
      </div>
    </div>
  </div>
  <div class="form-group">

  </div>
  <button onClick={this.dataHandler} class="btn btn-danger" >Enviar</button>
</form>

</div>
    {/* -------------------------------------------------------------------------------------------------- */}
   
    </div>
        );
        

    }
}

export default Formulario;