import React from 'react';

function Select(props) {
  return (
    <select className='select'>
      {props.children}
    </select>
  )
}

export default Select