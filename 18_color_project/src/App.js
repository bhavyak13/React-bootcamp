import './App.css';
import { generatePalette } from './ColorHelpers';
import Palette from './Palette';
import PaletteList from './PaletteList';
import seedColors from './seedColors';
import { Route, Routes, useParams } from 'react-router-dom'
import SingleColorPalette from './SingleColorPalette';
import NewPalette from './NewPalette';

function NotFound() {
  return (
    <div>
      <h1>NOT FOUND</h1>
    </div>
  )
}

function PaletteWrapper() {
  const { paletteId } = useParams();
  let palette = seedColors.filter(p => (p.id === paletteId));
  if (palette.length === 0) {
    return (<NotFound />)
  }
  return (<Palette {...generatePalette(palette[0])} />)
}

function SingleColorPaletteWrapper() {
  const { paletteId, colorId } = useParams();
  let palette = seedColors.filter(p => (p.id === paletteId));
  if (palette.length === 0) {
    return (<NotFound />)
  }
  return (<SingleColorPalette {...generatePalette(palette[0])} colorId={colorId} />)
}


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<PaletteList colors={seedColors} />} />
        <Route path='/palette/:paletteId/' element={<PaletteWrapper />} />
        <Route path='/palette/:paletteId/:colorId' element={<SingleColorPaletteWrapper />} />
        <Route path='/palette/new' element={<NewPalette />} />
      </Routes>
    </div>
  );
}

export default App;
