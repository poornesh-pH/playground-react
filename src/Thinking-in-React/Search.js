import React from 'react';

export default function Search() {
  return (
    <div>
      <div class="input-field col s6">
        <input id="last_name" type="text" class="validate" />
        <label for="last_name">Search</label>
      </div>
      <div>
        <p>
          <label>
            <input type="checkbox" onChange={}/>
            <span>Show only available items</span>
          </label>
        </p>
      </div>
    </div>
  );
}
