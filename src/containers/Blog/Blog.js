import React, { Component } from 'react';
//import axios from 'axios';
import axios from '../../axios';
import { Route, NavLink, Switch } from 'react-router-dom';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false,
        totalPedido: 0
    }

    componentDidMount () {
    
      
      
        
               
               // posts = posts.slice(0, 4);-------------------------------
               let cargado = this.props.location.state;
               let posts = [];
               if(cargado==null){
                console.log("vENGO DE POSTS");
                axios.get( '/Productos.json' )
            .then( response => {
              //  console.log( response.error );
                
               
                for (let key in response.data) {
                  
                    posts.push({
                        ...response.data[key],
                        idb: key,
                        totalProducto: 0
                    });
                    this.setState({posts: posts});
                }
            } )
            .catch(error => {
                // console.log(error);
                this.setState({error: true});
               
            });
               
                 }else{
                 console.log("Vengo de modified posts con un pedido cargado");
                 let compra = cargado.prods;
                 for(let i = 0; i < compra.length; i++){
                        if(compra[i].idb==cargado.identidad){
                            this.setState({posts: compra[i].tick.compra});
                        }
                 }
                //  this.setState({posts: compra});
                
                 
                 }
                 //-----------------------------------------------------------------
             
                // this.setState({posts: posts});
              
                
          
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }
    addOne = (id) => {
      
       let unArray = id.split('');
       let texto = unArray.splice(-1);
       let index = texto.join("")-1;
     
      
      this.state.posts[index].Unidades+1;
      //Guardar el cambio en el estado
      const product ={...this.state.posts[index]};
      product.Unidades = parseFloat(this.state.posts[index].Unidades+1);
      const products = [...this.state.posts];
     
    let total=0;
    
    //Calcular el precio en string
    let precioarray = product.Precio.split('€');
    let precionumero = parseFloat(precioarray.join(""));

    total =  product.Unidades*precionumero;
    product.totalProducto=total;

    products[index]=product;
  //Actualizar el total de este producto: me he quedado aqui comprobando
   // console.log("El total del producto es: "+this.state.posts[1].totalProducto);
      
      this.setState({posts:products});
     
      //--------------------------------------
    }
    subtractOne = (id) => {
      
        let unArray = id.split('');
        let texto = unArray.splice(-1);
        let index = texto.join("")-1;
       
       this.state.posts[index].Unidades-1;
       //Guardar el cambio en el estado
       const product ={...this.state.posts[index]};
       if(product.Unidades>0){product.Unidades = parseFloat(this.state.posts[index].Unidades-1);}
       const products = [...this.state.posts];

          //Calcular el precio en string----------------

     let total=0;
     let precioarray = product.Precio.split('€');
     let precionumero = parseFloat(precioarray.join(""));

    // total =  product.Unidades*precionumero;
    // product.totalProducto=total;

    total = product.Unidades*precionumero;
    product.totalProducto=total;

    //console.log("El total del producto es: "+total);

    //--------------------------------------------

       products[index]=product;
       this.setState({posts:products});
       //--------------------------------------
     }
    //  calcularTotalPedido = (id) => {
    //     //let total=this.state.totalPedido;
    //     const products = [...this.state.posts];
    //     let total = products
    //  }

    render () {

       
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
       // console.log("Hola"+this.state.posts);
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post 
                    key={post.idb} 
                    nombre={post.Nombre} 
                    imagen={post.Imagen}
                    unidades={post.Unidades}
                    precio={post.Precio}
                    subtractone={() => this.subtractOne(post.idb)}
                    addone={() => this.addOne(post.idb)} />;
                  
            });
        }
        
       
        // this.state.posts.reduce(function(valorAnterior,valorActual,indice,vector){
        //     console.log(valorAnterior.totalProducto);
        //     return valorAnterior.totalProducto+valorActual.totalProducto;
        // },{totalProducto:0});
        let totalCompra=this.state.posts.reduce(function (a, b) {
           
            return {totalProducto: a.totalProducto + b.totalProducto}; // returns object with property x
          },{totalProducto:0})
         //console.log(totalCompra.totalProducto);
          let strTotalCompra = ""+totalCompra.totalProducto+"€";
         
        return (
            <div class="container">
            <div>
                 <div className="row" >
                    <div class="col-sm-12">
                        <h1 id="tienda">CARRITO</h1>
                    </div>
                 </div>
                    {/* Boton----------------------------- */}
                <div className="row" >
                  {/* ---------------------------------TABLA----------- */}
                  
			        <div className="col-sm-6">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Imagen</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Unidades</th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts}
                            </tbody>
                        </table>
                    </div>
                
                {/* ------------------------TABLA-------------------- */}
                
                    <div className="col-sm-6">
                        <div id="cuadrogris" className="jumbotron">
                        <h1 className="display-4">DETALLE</h1>
                        {/* <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p> */}
                        <hr className="my-4"></hr>
                        {/* <p>It uses utility classes for typography and spacing to space content out within the larger container.</p> */}
                        {/* --------------Boton precio---------------------------------------------------- */}
                        <div class="row">
                        
                        <div class="col-sm-12">
                        <div id="cu" className="card border-dark md-12" >
                       
                            <div id="botonTotalPedido" className="card-header">
                                TOTAL DEL PEDIDO
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">{strTotalCompra} </li>
                            </ul>
                        </div>
                        </div>
                        <div class="row">
                        <div class="col-sm-6">
                        <NavLink
                                id="botonpedido"
                                className="btn btn-info"
                                to={{
                                    pathname: "/verlistadopedidos",
                                    
                                }}
                                exact
                                >Ver Pedidos</NavLink></div>
                                 <div class="col-sm-6">
                                    <NavLink
                                    id="realizar"
                                className="btn btn-danger"
                                to={{
                                    pathname: "/detallePedido",
                                    state: { prods: [this.state.posts],
                                            final: strTotalCompra
                                    }
                                }}
                                exact
                                activeClassName="btn btn-danger"
                                activeStyle={{
                                    // color: '#fa923f', 
                                }}>Realizar Pedido</NavLink></div>
                            
                   
                   
                    </div>
                                </div>
                        {/* <div id="carritopequeño" class="col-md-3" style={Imgstyle}>
                            <img src="https://firebasestorage.googleapis.com/v0/b/trabajofinal-20967.appspot.com/o/carrito.jpg?alt=media&token=1827eb89-12a1-4727-b290-9372df999bea"  ></img>
                       </div> */}
                        </div>
                        
                      
                        {/* ------------------------------------------------------------------------------ */}
                   

                        {/* <a className="btn btn-primary btn-lg" href="#" role="button">Realizar pedido</a> */}
                   
                    
                    </div>
                   
                    {/* --------------------------------- */}
                </div>
           
               
                {/* <section className="Posts">
                    {posts}
                </section> */}
                {/* <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
            </div>
        );
    }
}

export default Blog;