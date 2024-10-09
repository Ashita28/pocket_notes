/* eslint-disable react/prop-types */
import { useRef, useEffect } from 'react';

const Note = ({ note }) => {
  const componentRef = useRef(null);

  useEffect(() => {
    const component = componentRef.current;
    const initialHeight = component.clientHeight * 0.1;
    component.style.minHeight = `${initialHeight}px`;
  }, []);

  return (
    <div className="note">
      <div ref={componentRef}>
        {note}
      </div>
    </div>
  );
};

export default Note;