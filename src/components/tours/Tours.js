import React from "react";
import Tour from "./tour/Tour";
import './Tours.css';


const data = require('../../data/db.json')
function Tours() {
    return (
        <div  >
        
           <Tour data={data} />
          
        

        </div>
    )
}

export default Tours;