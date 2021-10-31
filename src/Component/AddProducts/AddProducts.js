import React from 'react'
import { useForm } from 'react-hook-form'

const AddProducts = () => {
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    fetch(`https://afternoon-bayou-69075.herokuapp.com/addProduct`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    reset()
    console.log(data)
  }
  return (
    <div className="container text-center py-5">
      <h1>Add Products</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          {...register('name')}
          placeholder="Products Title"
          className="m-2 p-2"
        />{' '}
        <br />
        {/* include validation with required or other standard HTML validation rules */}
        <input
          type="number"
          {...register('price', { required: true })}
          placeholder="Price"
          className="m-2 p-2"
        />{' '}
        <br />
        <input
          type="text"
          {...register('description', { required: true })}
          placeholder="Description"
          className="m-2 p-2"
        />{' '}
        <br />
        <input
          {...register('img', { required: true })}
          placeholder="Image Link"
          className="m-2 p-2"
        />{' '}
        <br />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" className="btn btn-success" />
      </form>
    </div>
  )
}

export default AddProducts
