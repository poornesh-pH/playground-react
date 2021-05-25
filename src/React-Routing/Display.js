import React from 'react';

export default function Display() {
  console.log(this.props);
  return (
    <div>
      <p>Displaying</p>
    </div>
  );
}
