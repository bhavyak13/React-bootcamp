import './App.css';
import { generatePalette } from './ColorHelpers';
import Palette from './Palette';
import seedColors from './seedColors';


function App() {
  // console.log(generatePalette(seedColors[3]));
  return (
    <div>
      <Palette {...generatePalette(seedColors[5])} />
    </div>
  );
}

export default App;
