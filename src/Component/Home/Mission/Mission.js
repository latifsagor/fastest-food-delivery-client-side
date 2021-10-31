import React from 'react'
import { Button } from 'react-bootstrap'
import MissionImg from '../../images/disesh.jpg'

const Mission = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <h2 className="text-center fs-1 text-success text-uppercase py-2">
          Our Missions
        </h2>
        <div className="col-lg-6 col-md-12">
          <img className="img-fluid" src={MissionImg} alt="mission" />
        </div>
        <div className="col-lg-6 col-md-12 d-flex align-items-center">
          <div>
            <h3 className="fs-1">Dishes that amplify your feelings</h3>
            <p className="text-muted">
              Our mission is to serve people who crave unique flavors,
              experiences, and ideas while creating opportunities for chefs to
              showcase their creativity. We hope to foster a spirit of
              exploration by connecting people through food.
            </p>
            <Button to="#" variant="outline-dark">
              Discover More
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mission
