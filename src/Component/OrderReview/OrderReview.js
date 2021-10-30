import React from 'react'
import useServices from '../hooks/useServices'

const OrderReview = () => {
  const [details, setDetails] = useServices()
  return (
    <div>
      <p>This is OrderReview </p>
    </div>
  )
}

export default OrderReview
