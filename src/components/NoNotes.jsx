import React from 'react'
import bg from '../assets/bg.png'

const NoNotes = () => {
  return (
    <div className='notes-cls'>
      <img src={bg} alt='bg' className='bg-cls'/>
      <h1 className='notes-head'>Pocket Notes</h1>
      <h3 className='sub-head'>Send and receive messages without keeping your phone online.<br/>
      Use Pocket Notes on up to 4 linked devices and 1 mobile phone</h3>
    </div>
  )
}

export default NoNotes
