import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Service = ({ service }) => {
  const { name, price, description, img, id } = service
  return (
    <div className="col-lg-4 col-md-6 col-12 mb-3">
      <Card style={{ width: '22rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>{price}</Card.Text>
          <Link to={`/booking/${id}`}>
            <Button variant="outline-dark">
              Read more about {name.toLowerCase()}
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Service
