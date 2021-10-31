import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const useServices = () => {
  const [details, setDetails] = useState()

  useEffect(() => {
    fetch('https://afternoon-bayou-69075.herokuapp.com/products')
      .then((response) => response.json())
      .then((data) => setDetails(data))
  }, [])
  return [details, setDetails]
}

export default useServices
