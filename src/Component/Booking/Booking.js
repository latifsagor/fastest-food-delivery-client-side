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
          <img className="img-fluid" src={element?.img} alt="" />
          <h2>{element?.name}</h2>
          <p>{element?.description}</p>
        </div>
        <div className="col-lg-5"></div>
      </div>
    </div>
  )
}

export default Booking
