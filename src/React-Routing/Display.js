import React from 'react';

export default function Display(props) {
  return (
    <div>
      <h5>Displaying {props.match.params.id}</h5>
    </div>
  );
}
