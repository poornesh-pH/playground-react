import React, { useState } from 'react';
import './style.css';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
import AppRouter from './React-Routing/AppRouter';

export default function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = value => setCounter(counter + value);
  // console.log(counter, 'counter');

  const Display = props => {
    // console.log(props, 'display');
    return (
      <div>
        <p>{props.message}</p>
      </div>
    );
  };

  const Button = props => {
    // console.log(props, 'button');
    const handleClick = () => props.inc(props.increment);
    return (
      <button className="btn btn-small" onClick={handleClick}>
        +{props.increment}
      </button>
    );
  };

  return (
    <>
      <Button inc={incrementCounter} increment={1} />
      <Button inc={incrementCounter} increment={5} />
      <Button inc={incrementCounter} increment={10} />
      <Button inc={incrementCounter} increment={100} />
      <Display message={counter} />
      <AppRouter />
    </> // React.Fragment
  );
}
