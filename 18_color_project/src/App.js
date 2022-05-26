import './App.css';
import { generatePalette } from './ColorHelpers';
import Palette from './Palette';
import PaletteList from './PaletteList';
import seedColors from './seedColors';
import { Route, Routes, useParams } from 'react-router-dom'
import SingleColorPalette from './SingleColorPalette';
import NewPalette from './NewPalette';
import { useState } from 'react';

function NotFound() {
  return (
    <div>
      <h1>NOT FOUND</h1>
    </div>
  )
}

function PaletteWrapper(props) {
  const { paletteId } = useParams();
  let palette = props.palette.filter(p => (p.id === paletteId));
  if (palette.length === 0) {
    return (<NotFound />)
  }
  return (<Palette {...generatePalette(palette[0])} />)
}

function SingleColorPaletteWrapper(props) {
  const { paletteId, colorId } = useParams();
  let palette = props.palette.filter(p => (p.id === paletteId));
  if (palette.length === 0) {
    return (<NotFound />)
  }
  return (<SingleColorPalette {...generatePalette(palette[0])} colorId={colorId} />)
}


function App() {
  const [palette, setPalette] = useState(seedColors);
  const savePalette = (newPalette) => {
    console.log(newPalette);
    setPalette([...palette, newPalette])
  }
  return (
    <div>
      <Routes>
        <Route path='/' element={<PaletteList colors={palette} />} />
        <Route path='/palette/:paletteId/' element={<PaletteWrapper palette={palette} />} />
        <Route path='/palette/:paletteId/:colorId' element={<SingleColorPaletteWrapper palette={palette} />} />
        <Route path='/palette/new' element={<NewPalette savePalette={savePalette} palette={palette}/>} />
      </Routes>
    </div>
  );
}

export default App;
