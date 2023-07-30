import React, { useState } from 'react';
const portalInfo = require("../../riotAssets/portals.js")
const ryzeInfo = require("../../riotAssets/ryze.js")

const PortalDisplay = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [autocompleteOptions, setAutocompleteOptions] = useState([]);

  const handleInputChange = (event) => {
    const inputText = event.target.value;
    // Filter the options based on user input and limit to 5 options
    const filteredOptions = Object.keys(portalInfo)
      .filter((option) => option.toLowerCase().includes(inputText.toLowerCase()))
      .slice(0, 5);
    setAutocompleteOptions(filteredOptions);

    // Only update the selectedOption state if the typed text matches a valid option
    if (filteredOptions.includes(inputText)) {
      setSelectedOption(inputText);
    } else {
      setSelectedOption('');
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setAutocompleteOptions([]); // Clear the autocomplete options after selecting an option
  };

  return (
    <div className='component'>
      <input
        type="text"
        value={selectedOption}
        onChange={handleInputChange}
        placeholder="Type to search..."
      />
      {autocompleteOptions.length > 0 && (
        <ul>
          {autocompleteOptions.map((option) => (
            <li key={option} onClick={() => handleOptionSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
      {selectedOption && (
        <div>
          <h3>{selectedOption}</h3>
          <p>{portalInfo[selectedOption]?.info}</p>
          {ryzeInfo[portalInfo[selectedOption]?.region]}
        </div>
      )}
    </div>
  );
};

export default PortalDisplay;






