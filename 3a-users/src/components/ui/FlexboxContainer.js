import React from 'react'
import './FlexboxContainer.css'

const FlexboxContainer = props => {
  return (
      <div className='flexbox-container'>{props.children}</div>
  )
}

export default FlexboxContainer