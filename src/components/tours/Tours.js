import React from "react";
import Tour from "./tour/Tour";
import './Tours.css';


const data = require('../../data/db.json')
function Tours() {
    return (
        <div  className="Name2" >
        {data.map((e )=>
       { return(

            <Tour key={e.id} data={e} />
        )}
        )}
          
        

        </div>
    )
}

export default Tours;