import React, { useEffect, useState } from 'react'
import Service from '../Service/Service'

const Services = () => {
  const [services, setServices] = useState([])
  useEffect(() => {
    fetch('/services.json')
      .then((res) => res.json())
      .then((data) => setServices(data))
  }, [])
  return (
    <div id="services" className="container">
      <div className="row">
        <h2 className="pt-5 pb-2 text-center text-uppercase fw-bolder">
          Our Services
        </h2>
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  )
}

export default Services
