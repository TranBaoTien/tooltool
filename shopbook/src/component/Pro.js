// import React,{Component} from "react";
// import './Sanpham.css';
// import anh from './images/toan10.png';



// export const review=[
//     {id:1,name:"Toan 11",gia:20000}
//     ,{id:2,name:"Tieng Anh 11",gia:30000},
//     {id:3,name:"Vat Ly 11",gia:40000},
//     {id:1,name:"Dia 11",gia:20000}
//     ,{id:2,name:"Su 12",gia:30000},
//     {id:3,name:"Toan Hinh Hoc 12",gia:40000},
//     {id:1,name:"Toan Dai So 12",gia:20000}
//     ,{id:2,name:"Ngu Van 12",gia:30000},
//     {id:3,name:"Cong Nghe 10",gia:40000},
//     {id:1,name:"Tin Hoc 10",gia:20000}
//     ,{id:2,name:"GDCD 10",gia:30000},
//     {id:3,name:"GDQP 10",gia:40000}
    
    
//     ];
// function Pro(){
//     return( 
//         <>

//         <div className="container">
//         {review.map((data,index)=>{
//             return( 
//               <div className="product"  key={index}>
//               <span className="image">
//               <img src={anh} alt="" />
//               </span>
//               <span><h2>{data.name}</h2> </span>
//               <span><h2>{data.gia}</h2> </span>
//               <span className="style2"><button><h2>MUA</h2></button> </span>         
//           </div>
            
//             );
//           }
          
//           )}

//             </div>
           
//         </>


// );
// }
// export default Pro;
import React, { Component } from 'react'
import axios from 'axios'
import{useNavigate
}from'react-router-dom';
export default class Pro extends Component {
  
  state={
    litstBooks: []
  }
async componentDidMount(){
//   axios.get('https://nhom6-backend-nodejs.herokuapp.com/api/get-all-books')
//   .then(res=>{
// console.log("aaaa",res)
let res= await axios.get('https://nhom6-backend-nodejs.herokuapp.com/api/get-all-books');
this.setState({
  litstBooks:res&&res.data&&res.data.books ? res.data.books:[]
})
console.log("aaaa",res.data.books)
}
  render() {
    let{litstBooks}=this.state;
 
    return (
      <div className="tiles">
      {litstBooks.map(post => {
     
          return(
            <div key={post.id}>
                <div className="style1">            
                  <span className="image">
                  <img src={require(`./images/sach/${post.hinh}`)} alt="" />
                  <h2>{post.tensach}</h2>
                  <h2>{post.gia}đ</h2>
                  <div className="style2" >
                  <button className="style2" >
                 Chi Tiet
                  </button>
              
                  </div>
                 
                  </span>  
                </div>    
            </div>

          );
      })}
  </div>
    
    )
  }
}
