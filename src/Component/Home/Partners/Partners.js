import React from 'react'
import kfc from '../../images/kfc.png'
import pizzaHut from '../../images/pizzaHut.png'
import kacchiBhai from '../../images/kacchi-vai.png'
import delhiDarbar from '../../images/delhi-darbar.png'

const Partners = () => {
  return (
    <div className="container py-1">
      <h2 className="text-center text-success py-3 text-uppercase">
        Our Trusted Partners
      </h2>
      <div className="row">
        <div className="col-lg-3">
          <img className="img-fluid" src={kfc} alt="" />
        </div>
        <div className="col-lg-3">
          <img className="img-fluid" src={kacchiBhai} alt="" />
        </div>
        <div className="col-lg-3">
          <img className="img-fluid" src={pizzaHut} alt="" />
        </div>
        <div className="col-lg-3">
          <img className="img-fluid" src={delhiDarbar} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Partners
