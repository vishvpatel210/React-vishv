import React from 'react'

export default function Order(props) {
  return (
    <div>
      <h1>{props.order1.orderId}</h1>
      {props.order1.items.map((op)=>
        <h2>{op.name}</h2>  
    )

      }
    </div>
  )
}
