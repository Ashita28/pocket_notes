/* eslint-disable react/prop-types */
import { useState } from 'react';
import PopUp from './PopUp';

const Sidebar = () => {
  const [list, setList] = useState(null);
  const [showPopUp, setShowPopUp] = useState(false);

  const handleClosePopUp = () => {
    setShowPopUp(false);
  };

  const handleOpenPopUp = () => {
    setShowPopUp(true);
  };

  return (
    <div className='side-bar'>
      <section className='side-heading'>
        <h1>Pocket Notes</h1>
      </section>
      <section className='list-cls'>
        {list ? (
          <div className='group-list'>
            <div className='logo'>
              <p>GN</p>
            </div>
            <p className='gname'>Group Name</p>
          </div>
        ) : null}
        <button className='add-btn' onClick={handleOpenPopUp}>+</button>
      </section>
      {showPopUp && (
        <PopUp onClose={handleClosePopUp} />
      )}
    </div>
  );
};

export default Sidebar;
