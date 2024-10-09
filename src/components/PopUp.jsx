/* eslint-disable react/prop-types */
import { useState } from 'react';

const PopUp = ({ onClose }) => {
  const [groupName, setGroupName] = useState('');
  const [color, setColor] = useState(''); // To hold selected color

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Group Name:', groupName, 'Color:', color);
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Create New group</h2>
        <form onSubmit={handleSubmit}>
          <label>Group Name</label>
          <input
            type="text"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            placeholder="Enter group name"
            required
          />
          <label>Choose colour</label>
          <div className="color-options">
            {['#b19cd9', '#ffb6c1', '#7fffd4', '#ff9966', '#4169e1', '#1e90ff'].map((col) => (
              <span
                key={col}
                className={`color-circle ${color === col ? 'selected' : ''}`}
                style={{ backgroundColor: col }}
                onClick={() => setColor(col)}
              />
            ))}
          </div>
          <button type="submit" className="create-btn">
            Create
          </button>
        </form>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PopUp;
