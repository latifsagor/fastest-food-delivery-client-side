import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const useServices = () => {
  const [details, setDetails] = useState()

  useEffect(() => {
    fetch('/services.json')
      .then((response) => response.json())
      .then((data) => setDetails(data))
  }, [])
  return [details, setDetails]
}

export default useServices
