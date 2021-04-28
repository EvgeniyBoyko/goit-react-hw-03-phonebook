import React from 'react';
import PropTypes from 'prop-types';

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

Filter.defaultProps = {
  changeFilter: () => {}
}

Filter.propTypes = {
  filter: PropTypes.func,
  changeFilter: PropTypes.func
}

export default Filter;