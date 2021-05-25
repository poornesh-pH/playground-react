import React from 'react';

export default function Display(props) {
  return (
    <div>
      <h4>Displaying {props.match.params.id}</h4>
    </div>
  );
}
