//import React from 'react';
import './bootstrap.min.css';
import React, { Component } from 'react';

import './Post.css';


class Post extends Component {
  constructor( props ) {
      super( props );
      // console.log( '[Person.js] Inside Constructor', props );
  }
  state = {
    miniaturas:[]
   
}
  
componentWillUpdate (nextProps,nextState) {

  
 
    //console.log( 'El numero de miniaturas es: '+miniaturas[0] );
   // if (!this.state.loadedPost || this.state.loadedPost.idb !== this.props.id) {
   // if(nextState.miniaturas !== this.state.miniaturas){ this.setState({miniaturas:miniaturas});}
      
    //}
  
};

componentDidMount () {
    console.log( '[CharComponent.js] Inside componentDidMount()' );
}

render () {
  const style = {
      width: '150px',

    };
   
    let miniatura=null;
    let miniaturas =[];
    let numMiniaturas = this.props.unidades;
    miniatura = (
      <img src={this.props.imagen}></img>
      )
      for(var i=0;i<numMiniaturas;i++){
        miniaturas.push(miniatura);
      }
//const post = (props) => (

  return (
   
    //---------------TABLA----------------------------
    <tr>
      <th scope="row">{this.props.nombre}</th>
      <td>
        <img src={this.props.imagen} style={style} className="media-object" alt="Responsive image"></img>
      </td>
      <td>{this.props.precio}</td>
      <td>{this.props.unidades}</td>
      <img src="https://firebasestorage.googleapis.com/v0/b/trabajofinal-20967.appspot.com/o/tick.PNG?alt=media&token=a45baa11-7279-47a4-9e05-0eec27a87357"  className="media-object" alt="Responsive image" onClick={this.props.addone}></img>
      <img src="https://firebasestorage.googleapis.com/v0/b/trabajofinal-20967.appspot.com/o/cross.PNG?alt=media&token=36ff4444-bc27-4c0b-9787-c377f941e7b2"  className="media-object" alt="Responsive image" onClick={this.props.subtractone}></img>
      {miniaturas}
    </tr>
    //------------------------------------------------
    // <article className="Post" onClick={props.clicked}>
    //     <h1>{props.nombre}</h1>
    //     <div className="Info">
    //         <div className="Author">{props.precio}</div>
    //         <img src={props.imagen} style={style} className="media-object" alt="Responsive image"></img>
    //     </div>
    // </article>
);
        };
      }

export default Post;






// class CharComponent extends Component {
//   constructor( props ) {
//       super( props );
//       // console.log( '[Person.js] Inside Constructor', props );
//   }

// componentWillMount () {
//      console.log( '[CharComponent.js] Inside componentWillMount()' );
   
// };

// componentDidMount () {
//      console.log( '[CharComponent.js] Inside componentDidMount()' );
// }


//   render () {
//     console.log( '[CharComponent.js] Inside render' );
//     const style={
//       display:'inline-block',
//       padding:'16px',
//      // text-align:'center';
//       margin:'16px',
//       border:'1px solid black'
//   };
//     return (
//         <div className="CharComponent" onClick={this.props.click} style={style}>
//         {/* </div> <div className={classes.CharComponent} onClick={props.click} > {props.letra} */}
//          <p>{this.props.letra}</p> 
        
//         </div>
//     )
    
// };
// } 

// export default CharComponent;