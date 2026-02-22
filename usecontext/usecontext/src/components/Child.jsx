import React from 'react'
import { useContext } from 'react'
import { countContext } from '../context/Context'

export default function Child() {
    const count = useContext(countContext);
  return (
    <div>
      <h1 >count:{count} </h1>
    </div>
  )
}
