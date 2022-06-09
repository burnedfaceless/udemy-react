import React from 'react'

import './Modal.css'

const Modal = ({title, body, setModalDisplay}) => {
  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className='titleCloseBtn'>
          <button onClick={() => setModalDisplay(false)}> X </button>
        </div>
        <div className='title'>
          <h2>{title}</h2>
        </div>
        <div className='body'>
          {body}
        </div>
        <div className='footer'>
          <button onClick={() => setModalDisplay(false)}>Okay</button>
        </div>
      </div>
    </div>
  )
}

export default Modal