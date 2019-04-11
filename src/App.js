import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Blog from './containers/Blog/Blog';
import { Route, NavLink, Switch,Redirect } from 'react-router-dom';
import NewPost from './components/NewPost/NewPost';
import FullPost from './components/FullPost/FullPost';
import DetallePedido from './components/DetallePedido/DetallePedido';
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
                    <Redirect from="/" to="/posts" />
          </Switch>
        
        {/* <Blog /> */}
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
