import {useEffect, useRef, useState} from 'react';

const Example = () => {
  // component internal states
  const [name, setName] = useState('Matti');
  const [count, setCount] = useState(0);

  // reference to some HTML element
  // the reference to specific element is unknown at this point, ref={testElement} will create the reference later to the specific element
  const testElement = useRef(null);

  console.log('name before', name);

  useEffect(() => {
    setName('Juha');
    console.log('Mount happened');
  }, []);

  console.log('name after', name);

  useEffect(() => {
    // Update div element's color based on count
    testElement.current?.style.setProperty('color', `rgb(${count * 5}, 0, 0)`);
  }, [count]); // Only re-run the effect if count changes

  return (
    <div ref={testElement}>
      <div>Name: {name}</div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default Example;
