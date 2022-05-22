import logo from './logo.svg';
import './App.css';
import Example from './UseState';
import HeartBroken from './HeartBroken';
import SimpleForm from './SimpleForm';
import FormHooks from './FormWithHooks';
import Clicker from './ClickerUSeEffect';
import Movie from './ApiCallUseEffectDeep';

function App() {
  return (
    <div className="App">
      {/* <Example />
      <HeartBroken />
      <SimpleForm />
      <FormHooks />
      <Clicker /> */}
      <Movie />
    </div>
  );
}

export default App;
