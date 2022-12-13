import React from 'react';
import '../styles/UsedTechnologies.css';

function UsedTechnologies(props) {
  return (
    <div className='UsedTechnologies'>
        {props.technologie}
    </div>
  )
}

export default UsedTechnologies;