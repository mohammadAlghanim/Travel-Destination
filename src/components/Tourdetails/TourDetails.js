import { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data/db.json';
import { Card, Button } from 'react-bootstrap';
import './TourDetails.css'

function TourDetails() {
  const { id } = useParams();
  const info = data.filter((e) => e.id === id);
  let cityInfo = info[0];
  
  const [showMore, setShowMore] = useState(false);
  
  const handleShowMoreClick = () => {
    setShowMore(!showMore);
  }
  
  return (
    <div className='Card1'>
    <div className='card'>
      <Card key={cityInfo.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={cityInfo.image} />
        <Card.Body>
          <Card.Title>{cityInfo.name}</Card.Title>
          <Card.Text>
            {showMore ? cityInfo.info : `${cityInfo.info.substring(0, 100)}...`}
          </Card.Text>
          <Button onClick={handleShowMoreClick}>
            {showMore ? "Show less" : "Show more"}
          </Button>
        </Card.Body>
      </Card>
    </div>
    </div>
  )
}

export default TourDetails;
