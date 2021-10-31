import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import Service from '../Service/Service'

const Services = () => {
  const [services, setServices] = useState([])
  const [singleProducts, setSingleProducts] = useState([])
  const [search, setSearch] = useState('')
  useEffect(() => {
    fetch('https://afternoon-bayou-69075.herokuapp.com/products')
      .then((res) => res.json())
      .then((data) => setServices(data))
  }, [])

  const { user } = useAuth()

  const handleAddToCart = (index) => {
    const data = services[index]
    data.email = user?.email

    fetch('https://afternoon-bayou-69075.herokuapp.com/addItem', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  }
  return (
    <div id="services" className="container">
      <div className="row">
        <h2 className="pt-5 pb-2 text-center text-uppercase text-success fw-bolder">
          Our Services
        </h2>
        {services.map((service, index) => (
          <div
            key={service.name}
            className="col-lg-4 col-md-6 col-12 py-3 mb-3"
          >
            <Card style={{ width: '22rem' }}>
              <Card.Img variant="top img-fluid" src={service?.img} />
              <Card.Body>
                <Card.Title>{service?.name}</Card.Title>
                <Card.Text>{service?.description}</Card.Text>
                <Card.Text className="text-success">
                  Price: {service?.price}$
                </Card.Text>
                <Link to={`/booking/${service?.id}`}>
                  <Button variant="outline-dark">View Details</Button>
                </Link>
                <Button
                  variant="outline-success ms-5"
                  onClick={() => handleAddToCart(index)}
                >
                  Buy Now
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services

{
  /* <Service key={service._id} service={service} index={index}></Service> */
}
