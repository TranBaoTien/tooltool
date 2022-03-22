import React,{Component} from "react";
import './Sanpham.css';
import anh from './images/toan10.png';
const Sanpham=(props)=>{
    return( 
<div className="style1">
                    
    <span className="image">
    <img src={anh} alt="" />
    </span>
    <span><h3>{props.name}</h3> </span>
    <span><h3>{props.gia}</h3> </span>
    <span className="style2"><button><h2>MUA</h2></button> </span>         
</div>);
}
export default Sanpham;