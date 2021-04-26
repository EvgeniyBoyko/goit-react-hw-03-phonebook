import React from 'react';

const Filter = ({ filter, changeFilter }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        onChange={changeFilter}
        type="text"
        value={filter}
      />
    </>
  );
};

export default Filter;