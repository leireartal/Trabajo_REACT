import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Blog from './containers/Blog/Blog';
import { Route, NavLink, Switch,Redirect } from 'react-router-dom';
import FullPost from './components/FullPost/FullPost';
import DetallePedido from './components/DetallePedido/DetallePedido';
import Formulario from './components/Formulario/Formulario';
import Agradecimiento from './components/Agradecimiento/Agradecimiento';
import ConfirmacionBorrado from './components/ConfirmacionBorrado/ConfirmacionBorrado';
import ListadoPedidos from './components/ListadoPedidos/ListadoPedidos';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';
class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/my-app">
      <div className="App">
      {/* <header>
                 
          </header> */}
          <Switch>{/*se toma solo la primera ruta que concuerda con el path */}
                    {/* <Route path="/" exact component={Blog} />  */}
                    <Route path="/posts" exact component={Blog} />
                    <Route path="/detallePedido" component={DetallePedido} /> 
                    <Route path="/Formulario" exact component={Formulario} />
                    <Route path="/agradecimiento" exact component={Agradecimiento} />
                    <Route path="/verlistadopedidos"  component={ListadoPedidos} />
                    <Route path="/verlistadopedidos/"  component={FullPost} />
                    <Route path="/borrarpedidos"  component={ConfirmacionBorrado} />
                    <Route path="/modifiedposts"  component={Blog} />
                    <Route path="/login"  component={Login} />
                    <Route path="/admin"  component={Admin} />
                    
                    {/* <Redirect from="/" to="/posts" /> */}
                  
                    
          </Switch>
        
        {/* <Blog /> */}
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
