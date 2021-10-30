// import React from 'react'
// import { Card, Button } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

// const Service = ({ service, index }) => {
//   const { name, price, description, img, id } = service
//   const handleAddToCart = (index) => {
//     console.log(index)
//   }
//   return (
//     <div className="col-lg-4 col-md-6 col-12 mb-3">
//       <Card style={{ width: '22rem' }}>
//         <Card.Img variant="top img-fluid" src={img} />
//         <Card.Body>
//           <Card.Title>{name}</Card.Title>
//           <Card.Text>{description}</Card.Text>
//           <Card.Text className="text-success">Price: {price}$</Card.Text>
//           <Link to={`/booking/${id}`}>
//             <Button variant="outline-dark">View Details</Button>
//           </Link>
//           <Button
//             variant="outline-success ms-5"
//             onClick={() => handleAddToCart(index)}
//           >
//             Buy Now
//           </Button>
//         </Card.Body>
//       </Card>
//     </div>
//   )
// }

// export default Service
