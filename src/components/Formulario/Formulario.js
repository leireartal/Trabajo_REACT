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
        hora:'',
        nombre:'',
        email:'',
        tick:{
          compra:null,
          importe:null
        }
       // totalunidades:0
       // preciototal:'',
    }

    // componentWillUpdate () {
        

    // }

    componentWillReceiveProps() {
      
      
     
      
     
    }

    dataHandler = (properties) => {
      //--------------------------getting date--------------------------------------------------
      var date = new Date().getDate(); //Current Date
      var month = new Date().getMonth() + 1; //Current Month
      var year = new Date().getFullYear(); //Current Year
      var hours = new Date().getHours(); //Current Hours
      var min = new Date().getMinutes(); //Current Minutes
      var sec = new Date().getSeconds(); //Current Seconds
      const fecha = date+"/"+month+"/"+year;
      const hora = hours+":"+min+":"+sec;
      //--------------------------------------------------------------------------------------------



        // var date = new Date(). getDate();
         this.setState({fecha:  fecha});
         this.setState({hora:hora});
         
       
       
        const data = {
            apellido: this.state.apellido,
            ciudad: this.state.ciudad,
            codigopostal: this.state.codigopostal,
            calle:this.state.calle,
            fecha:fecha,
            hora:hora,
            nombre:this.state.nombre,
            email:this.state.email,
            tick:{
              compra:properties.state.lista,
              importe:properties.state.gastototal
            }
             
            // totalunidades:this.state.totalunidades,
            // preciototal:this.state.preciototal
        };
        // this.setState({tick:data.tick});
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
     
      // console.log(this.state.preciototal);
      // console.log(this.props.location.state.lista);
      // console.log(this.props.location.state.gastototal);
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
  {/* <button onClick={this.dataHandler(this.props.location)} class="btn btn-danger" >Enviar</button> */}
  <button onClick={()=>this.dataHandler(this.props.location)} class="btn btn-danger" >Enviar</button>
</form>

</div>
    {/* -------------------------------------------------------------------------------------------------- */}
   
    </div>
        );
        

    }
}

export default Formulario;