import React from 'react'

export default function Description(props) {
    console.log(props)
    const item=props.item
  return (
    <div>
    <p> {item.description} </p> 
    <button  onClick={()=> props.alertFunction(item.name) }>buy </button>
    </div>
  )
}
