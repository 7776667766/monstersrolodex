import React from "react";

import { ChangeEvent } from "react"



type Searchboxprops=
{
    type:string;
    placeholder?:string;
    
    onchangehandler:(event:ChangeEvent<HTMLInputElement>)=>void;

} ;
const Searchbox=({type , placeholder,onchangehandler,} : Searchboxprops)=>{
    return(
 <div>
             <input type={type} placeholder={placeholder} onChange={onchangehandler}/>
        </div>
    
)};

export default Searchbox;