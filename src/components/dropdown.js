import React, { useState } from 'react';

const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = () => {
    setIsOpen(false);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'green' }}>
      <div style={{ display: 'inline-block' }}>
        <h3 style={{ color: 'black' }}>Should you use a Dropdown:</h3>
        <button onClick={toggleDropdown} style={{ padding: '10px 20px', background: 'lightgray' }}>
          Show Dropdown
        </button>
        {isOpen && (
          <ul onClick={handleOptionClick} style={{ listStyleType: 'none', padding: 0, background: 'lightgray' }}>
            {items.map((item, index) => (
              <li key={index} style={{ padding: '10px 20px', color: 'black' }}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
