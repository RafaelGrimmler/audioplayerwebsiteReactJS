import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";

// Global Style
import GlobalStyle from './Styles/styles'

// Pages
import Home from './Pages/Home'
import Search from "./Pages/Search";
import Artist from "./Pages/Artist";
import Artists from "./Pages/Artists";

// components
import Player from "./Components/Player"

// context
import { CurrentMusicProvider } from './Context/CurrentMusic'
import { ReproductionProvider } from './Context/Reproduction'

function App() {
  return (
    <CurrentMusicProvider>
      <ReproductionProvider>
      
        <Router>
          <GlobalStyle/>

          <Player />
    
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/buscar/:querry" element={<Search/>} />
            <Route path="/artista/:id" element={<Artist/>} />
            <Route path="/artistas" element={<Artists/>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>

        </Router>

      </ReproductionProvider>
    </CurrentMusicProvider>
  );
}

export default App;
