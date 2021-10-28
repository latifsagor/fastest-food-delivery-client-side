import React from 'react'
import { useParams } from 'react-router'
import useServices from '../hooks/useServices'

const Booking = () => {
  const { id } = useParams()
  const [details] = useServices()
  const element = details?.find((detail) => Number(detail.id) === Number(id))
  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-lg-7">
          <img src={element?.img} alt="" />
        </div>
        <div className="col-lg-5"></div>
      </div>
    </div>
  )
}

export default Booking
