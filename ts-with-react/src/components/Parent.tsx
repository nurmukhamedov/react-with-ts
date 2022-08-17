import React from 'react'
import { Child } from './Child'

const Parent = () => {
  return (
    <div> 
        <Child color='#000' onClick={() => console.log('clicked')} name='Muhammadrasul' age={22} /> 
    </div>
  )
}

export default Parent