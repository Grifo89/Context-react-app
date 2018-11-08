import React from 'react';
import spinner from './spinner.gif'

/**
 * Spinner
 */
export default () => {
  return(
    <div>
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: '200px',position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}
      />
    </div>
  )
}
