import React from 'react';

const Contents = ({ selectedCountryName }) => {
  return(
    <div>
      {
        selectedCountryName && 
      <h3>You have selected {selectedCountryName}</h3>
      }
    </div>
  )
}

export default Contents;
