import React from 'react';

const DropDown = ({ countryNames, selectedCountry }) => {
  return(
    <div>
      <select onChange={selectedCountry}>
       {countryNames.map(country => {
         return (
           <option key={country.name}>{country.name}</option>
         )
      })} 
      </select>
    </div>
  )
}

export default DropDown;
