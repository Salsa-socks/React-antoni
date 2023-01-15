import './App.css';

import Navbar from './components/Navbar';
import Slideshow from './components/Slideshow';
// components arranged from top to bottom of screen
/* navbar, slideshow component import*/

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slideshow/>
    </div>
  );
}

export default App;