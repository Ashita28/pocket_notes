/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Note } from './index'
import sendDisable from '../assets/sendDisable.png'
import send from '../assets/send.png'

const DisplayNotes = () => {

  const [note, setNote] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const handleNote = (event) => {
    setNote(event.target.value);
  }

  return (
    <div className='display-cls'>
      <nav className='nav-cls'>
        <div className='group-logo'>
          <p className='logo-cls'>GN</p>
        </div>
        <p className='gname'>Group Name</p>
      </nav>
      <div className='notes'>
      <Note note={note}/>
      </div>
      <div className='type-cls'>
        <div className='type-subcls'>
          <textarea 
          id='text' 
          placeholder='Enter your text here...........' 
            value={note}
            onChange={handleNote}
          />
          {isDisabled ? <img className='send-btn' src={sendDisable} alt='send-btn'/> :
          <img className='send-btn' src={send} alt='send-btn'/>}
        </div>
      </div>
    </div>
  )
}

export default DisplayNotes
