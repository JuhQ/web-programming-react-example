import {useState} from 'react';

const Button = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('juha');

  return (
    <button
      onClick={() => {
        setCounter(counter + 1);
        console.log('counter', counter);
        setName(`${name}-${counter}`);
      }}
    >
      click here ({counter}) ({name})
    </button>
  );
};

export default Button;
