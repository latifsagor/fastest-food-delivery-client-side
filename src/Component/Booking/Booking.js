import React from 'react'
import { Button } from 'react-bootstrap'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import useServices from '../hooks/useServices'

const Booking = () => {
  const { id } = useParams()
  const [details] = useServices()
  const element = details?.find((detail) => Number(detail.id) === Number(id))
  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-lg-12 d-flex">
          <div>
            <img className="img-fluid" src={element?.img} alt="" />
          </div>
          <div className="px-3">
            <h2>{element?.name}</h2>
            <p>{element?.description}</p>
            <h5 className="text-success">Price: {element?.price}$</h5>
            <Link to="/orderReview">
              {' '}
              <Button variant="outline-dark">Add to cart</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking
