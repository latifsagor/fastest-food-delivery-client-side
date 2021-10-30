import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const OrderReview = () => {
  const [orders, setOrders] = useState([])

  const { user } = useAuth()
  const email = user?.email

  useEffect(() => {
    fetch(`http://localhost:5000/myOrders/${email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data))
  }, [])
  console.log(orders)

  return (
    <div className="container text-center">
      <p>This is OrderReview {orders?.length} </p>
      <div className="row">
        {orders.map((order) => (
          <div className="col-lg-4 col-md-6 col-12 mb-3">
            <Card style={{ width: '22rem' }}>
              <Card.Img variant="top img-fluid" src={order?.img} />
              <Card.Body>
                <Card.Title>{order?.name}</Card.Title>
                <Card.Text>{order?.description}</Card.Text>
                <Card.Text className="text-success">
                  Price: {order?.price}$
                </Card.Text>

                <Button>Delete</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
        <div className="col-lg-6"></div>
      </div>
    </div>
  )
}

export default OrderReview
