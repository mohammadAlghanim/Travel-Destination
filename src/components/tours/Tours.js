import React from "react";
import './Tours.css'

const data =require('../../data/db.json')
function Tours(){
    return(
<div  className="Name2">
    {data.map((e)=>{
        return(
            <div key={e.id}>
        <img src={e.image} alt={e.name}/>
        <p>{e.name}</p>
        </div>)
    })}

</div>
    )
}

export default Tours;