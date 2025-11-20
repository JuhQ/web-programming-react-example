import ComponentA from '../components/ComponentA';
import ComponentB from '../components/ComponentB';
import {MyProvider} from '../context/MyContext';

const ContextExample = () => {
  return (
    <>
      <MyProvider>
        <ComponentA />
        <ComponentB />
      </MyProvider>
    </>
  );
};

export default ContextExample;
