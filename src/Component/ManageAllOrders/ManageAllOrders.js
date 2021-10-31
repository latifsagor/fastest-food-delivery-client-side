import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'

const ManageAllOrders = () => {
  const [manageOrders, setManageOrders] = useState([])

  useEffect(() => {
    fetch(`https://afternoon-bayou-69075.herokuapp.com/manageAllOrders`)
      .then((res) => res.json())
      .then((data) => setManageOrders(data))
  }, [])
  return (
    <div className="container">
      <h2>This is manage all orders page.</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Action</th>
          </tr>
        </thead>
        {manageOrders?.map((manageOrder, index) => (
          <tbody>
            <tr>
              <td>{index + 1}</td>
              <td>{manageOrder?.name}</td>
              <td>{manageOrder?.email}</td>
              <td>{manageOrder?.address}</td>
              <td>{manageOrder?.phone}</td>
              <button className="btn bg-success p-2 text-white">Print</button>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  )
}

export default ManageAllOrders
