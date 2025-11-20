import {useMyContext} from '../context/MyContext';

const ComponentA = () => {
  const {number} = useMyContext();
  return <div>Consumed via useMyContext in ComponentA: {number}</div>;
};

export default ComponentA;
