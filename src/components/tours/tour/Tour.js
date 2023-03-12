import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Tour.css'


function Tour(props) {

  const nav = useNavigate(); //https://reactrouter.com/en/main/hooks/use-navigate 
  return (
    
      

        
          
          <div>

            <Button  variant="primary" onClick={()=>nav(`/city/${props.data.id}`)}>{props.data.name}<img src={props.data.image} alt={props.data.name}></img></Button>
          </div>
           
          
        
  
        

      
    

  );
};

export default Tour;
