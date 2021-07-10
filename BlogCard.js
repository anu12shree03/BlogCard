
// import React from 'react';
// {Component}
import React,{Component}from 'react';
import {dumplogs} from'./utils';

// import './BlogCard.css';
 import classes from './BlogCard.module.css';
// import { from } from 'pumpify';



const BlogCard = (props) => {
    dumplogs(props);
    return(
        <div className={classes.BlogCard}>
        <h3>{props.title}</h3>
           <p>{props.description}</p>
           <p>Like Count: 0</p>
           <button>Like</button>
       </div>
    )
}

// class BlogCard extends Component{
//     render(){
//         dumplogs(this.props);
//         return(
//             <div className={classes.NewBlogCard}>
//                 <h3>{this.props.title}</h3>
//                 <p>{this.props.description}</p>

//                 <p>Like Count: 0</p>
//             </div>
//         )
//     }
// }

export default BlogCard;