import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Global Style
import GlobalStyle from './Styles/styles'

// Pages
import Home from './Pages/Home'
import Search from './Pages/Search'

// components
import Player from "./Components/Player";

// context
import { CurrentMusicProvider } from './Context/CurrentMusic'

function App() {
  return (
    <CurrentMusicProvider>
      
      <Router>
        <GlobalStyle/>
  
        <Player className='player' />

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/buscar" element={<Search/>} />
        </Routes>

      </Router>

    </CurrentMusicProvider>
  );
}

export default App;
