import React from 'react';

function Card(props) {
  console.log(props)
  return(
    <div className='card'>
      <p>{props.id}</p>
      <img className='card__image' src={props.link} alt={props.name} />
    </div>
  )
}

export default Card