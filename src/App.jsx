import './App.css';

import Button from './components/Button';
import Welcome from './components/Welcome';

function App() {
  return (
    <>
      <h1 id="hello">Heading 1</h1>
      <Welcome name="Juha" random="Hello world" />

      <Button />

      {/*
      Welcome({name: "Juha", random: "Hello world"})
      */}
    </>
  );
}

export default App;
