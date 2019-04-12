import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Blog from './containers/Blog/Blog';
import { Route, NavLink, Switch,Redirect } from 'react-router-dom';
import NewPost from './components/NewPost/NewPost';
import FullPost from './components/FullPost/FullPost';
import DetallePedido from './components/DetallePedido/DetallePedido';
import Formulario from './components/Formulario/Formulario';
import Agradecimiento from './components/Agradecimiento/Agradecimiento';
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
                    <Redirect from="/" to="/posts" />
                    {/* <Redirect from="/Formulario?" to="/Formulario" /> */}
                    
          </Switch>
        
        {/* <Blog /> */}
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
