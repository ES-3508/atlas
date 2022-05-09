import React from 'react'
import { useParams } from 'react-router-dom'

export default function Id() {
    let {id}=useParams()
  return (
    <div>
        <h2>Id</h2>
        
    </div>
  )
}
