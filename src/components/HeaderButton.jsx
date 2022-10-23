import React from 'react';

function HeaderButton(props) {
  return (
    <button className={`header-btn ${props.active && 'header-btn_active'}`}>
      {props.children}
    </button>
  )
}

export default HeaderButton