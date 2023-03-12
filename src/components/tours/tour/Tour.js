import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Tour.css'


function Tour(props) {

  const nav = useNavigate();
  return (
    <div className="Name2">
      {props.data.map((e) => {

        return (
          
          <div key={e.id}>

            <Button  variant="primary" onClick={()=>nav(`/city/${e.id}`)}>{e.name}<img src={e.image} alt={e.name}></img></Button>
          </div>
           
          
        
          // <div
          //   key={e.id}
          //   className="tours container">
          //   <img src={e.image} alt={e.name} />
          //   <p>{e.name}</p>
          // </div>
        )

      })}
    </div>

  );
};

export default Tour;
