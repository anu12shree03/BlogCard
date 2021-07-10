// import logo from './logo.svg';
import React,{ Component } from 'react';
import './App.css';

import BlogItem from './BlogCard.js';
import{ isArrayEmpty } from './utils';
class App extends Component {

  state={
    showBlogs: true
  }
  // const firstName='John';
  // const lastName='Wick';
  // const age=28;
  // const job='Specialist';

  // const arrAy=[1,2,3,4];

  // const mObj={
  //   name:'Toto',
  //   age:78
  // }

  // const inputPlaceholder='Enter Your Details'

  // const getFullName=(firstName,lastName)=>
  //   `${firstName} ${lastName}`

  // const detailsInputBox=<input placeholder={inputPlaceholder}
  // autoComplete/>;

  // const styles={
  //     margin:'16px',
  //     padding:'16px',
  //     borderSizing:'border-box',
  //     borderRadius: '5px',
  //     boxShadow:'0 2px 5px #ccc'
  // }

  // const blogObj={
  //   title:'SPYSS yoga sparsha gana 1',
  //   description:'Hari om :)'
  // }
  
  blogO=[  //array of objects containing 3 diff blog items
    {
      id :1,
    title:'Blog Title 1',
    description:'Kabhi kushi kabhi gham'
  },
  {
    id: 2,
    title:'Blog Title 1.3',
    description:'SPYSS yoga sparsha gana 1'
  // },
  // {
  //   id: 3,
  //   title:'Movie :]',
  //   description:'Kedarnath'
   }
]

// const blogO = undefined;

 blogCards = isArrayEmpty(this.blogO)? []: this.blogO.map((item,pos) =>{
  return(
    <BlogItem className={"Blog"} key={pos} title= {item.title} description={item.description} id ={item.id}/>
  // <div className="BlogCard" key={item.id}>
  //     <h3>{item.title}</h3>
  //        <p>{item.description}</p>
  //    </div>
   )
 })

  onHideBtnClick =() =>{
    // let upState = !this.state.showBlogs;
   this.setState((prevState, prevPros)=>{
     return{ showBlogs: !prevState.showBlogs}
   });
   console.log(this.state.showBlogs);
 }

 render(){
   console.log('Render Called');
  return (
      <div className="App">
       <button onClick={this.onHideBtnClick}>{this.state.showBlogs? 'Hide List' : 'Show list'}</button>
       <br></br>
       {
         this.state.showBlogs ? this.blogCards :null
       }
      {/* {this.blogCards} */}
       </div>
  );

    }
  }

  // return (
  //   <div className="App">
  //     <h3>Full Name: {getFullName(firstName,lastName)}</h3>
  //     <p>Age:{mObj.age}</p>
  //     <p>Job: {job}</p>
      
  //     {arrAy[0]}
  //     {
  //       arrAy[0]>0?"True":"False"
  //     }
  //     {detailsInputBox} 
  //      <input placeholder={inputPlaceholder}
  //      autoComplete/>    
       
  //      SESSION JSX BEHIND THE SCENES
  //      <div style=   
  //     <div className="BlogCard"> 
        
  //       { margin:'16px',
  //        padding:'16px',
  //      borderSizing:'border-box',
  //        borderRadius: '5px',
  //        boxShadow:'0 2px 5px #ccc'
  //       styles 
      
  //        <h3>{blogObj.title}</h3>
  //       <p>{blogObj.description}</p>
  //     </div> 
  //      <hr></hr> */}
  //      <div className="BlogCard">
  //       <h3>{blogObj.title}</h3>
  //       <p>{blogObj.description}</p>
  //     </div>
  //     <button onClick={onHideBtnClick}>Hide List</button>
  //    <br></br>
  //           {blogCards}
  //    </div>
  // );

  //   }

 export default App;
