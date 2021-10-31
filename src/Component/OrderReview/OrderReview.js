import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const OrderReview = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [orders, setOrders] = useState([])
  const [isDeleted, setIsDeleted] = useState(null)

  const { user } = useAuth()
  const email = user?.email

  useEffect(() => {
    fetch(`https://afternoon-bayou-69075.herokuapp.com/myOrders/${email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data))
  }, [])

  // Delete Options Start
  const handleDelete = (id) => {
    fetch(`https://afternoon-bayou-69075.herokuapp.com/orders/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert('deleted successfully')
          const remaining = orders.filter((order) => order._id !== id)
          setOrders(remaining)
        } else {
          alert('not deleted')
        }
      })
    console.log(id)
  }
  // Delete Options End

  // Place order information
  const onSubmit = (data) => {
    fetch(`https://afternoon-bayou-69075.herokuapp.com/placeOrder`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
    reset()
    console.log(data)
  }

  return (
    <div className="container text-center py-5">
      <h2 className="mb-3">Ordered Item: {orders?.length} </h2>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-12">
          {orders.map((order) => (
            <div key={order.name} className="m-3">
              <Card style={{ width: '100%' }}>
                <Card.Img variant="top img-fluid" src={order?.img} />
                <Card.Body>
                  <Card.Title>{order?.name}</Card.Title>
                  <Card.Text>{order?.description}</Card.Text>
                  <Card.Text className="text-success">
                    Price: {order?.price}$
                  </Card.Text>

                  <Button onClick={() => handleDelete(order?._id)}>
                    Remove
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
            <input
              defaultValue={user.displayName}
              {...register('name')}
              className="my-2 p-2 w-50"
            />{' '}
            <br />
            <input
              defaultValue={user.email}
              {...register('email', { required: true })}
              className="my-2 p-2 w-50"
            />{' '}
            <br />
            {errors.email && (
              <span className="error">This field is required</span>
            )}
            <input
              placeholder="Address"
              defaultValue=""
              className="my-2 p-2 w-50"
              {...register('address')}
            />{' '}
            <br />
            <input
              placeholder="City"
              className="my-2 p-2 w-50"
              defaultValue=""
              {...register('city')}
            />{' '}
            <br />
            <input
              placeholder="Phone number"
              defaultValue=""
              className="my-2 p-2 w-50"
              {...register('phone')}
            />{' '}
            <br />
            {/* <input
              className="my-2 p-2 w-50 btn btn-outline-danger"
              type="submit"
            /> */}
            <button
              type="submit"
              className="my-2 p-2 w-50 btn btn-outline-danger"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default OrderReview

// col-lg-4 col-md-6 col-12 mb-3
