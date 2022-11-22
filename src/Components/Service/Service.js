import React from 'react'

const Service = (props) => {
  const { _id, name, price, duration, img } = props.realService

  return (
    <div>
      <h1>Service Name:{name}</h1>
    </div>
  )
}

export default Service
