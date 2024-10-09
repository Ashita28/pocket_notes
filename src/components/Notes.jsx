/* eslint-disable react/prop-types */
import {useState} from 'react'
import {NoNotes, DisplayNotes} from './index'

const Notes = () => {

    const [hasNotes, setHasNotes] = useState(false);

  return (
    <>
    {hasNotes ? <DisplayNotes/> : <NoNotes/>}
    </>
  )
}

export default Notes
