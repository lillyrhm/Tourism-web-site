import React from 'react';

export default function debounceMethod() {
  const debounce = (fu, delay) => {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        fu(...args)
      }, delay)
    }
  }
  return (
    <div>
      <button onClick={debounce(e => { console.log('click') }, 2000)}>navbar</button>
    </div>
  )
}


