import Button from '../components/Button';
import Example from '../components/Example';
import Home from '../components/Home';
import Welcome from '../components/Welcome';

function HomeView() {
  return (
    <>
      <Example />

      <Home />

      <h1 id="hello">Heading 1</h1>
      <Welcome name="Juha" random="Hello world" />

      <Button />

      {/*
      Welcome({name: "Juha", random: "Hello world"})
      */}
    </>
  );
}

export default HomeView;
