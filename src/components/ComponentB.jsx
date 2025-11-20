import {useMyContext} from '../context/MyContext';

const ComponentB = () => {
  const {number, setNumber} = useMyContext();
  return (
    <>
      <div>Consumed via useMyContext in ComponentB: {number}</div>
      <button
        onClick={() => {
          setNumber(number + 100);
        }}
      >
        Click this button
      </button>
    </>
  );
};

export default ComponentB;
