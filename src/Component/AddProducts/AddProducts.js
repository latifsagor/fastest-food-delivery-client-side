import React from 'react'
import { useForm } from 'react-hook-form'

const AddProducts = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    fetch(`http://localhost:5000/addProduct`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    console.log(data)
  }
  return (
    <div className="container text-center py-5">
      <h1>Add Products</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input {...register('name')} placeholder="Products Title" />

        {/* include validation with required or other standard HTML validation rules */}
        <input
          type="number"
          {...register('price', { required: true })}
          placeholder="Price"
        />
        <input
          type="text"
          {...register('description', { required: true })}
          placeholder="Description"
        />

        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  )
}

export default AddProducts
