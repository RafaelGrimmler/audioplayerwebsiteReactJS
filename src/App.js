import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";

// Global Style
import GlobalStyle from './Styles/styles'

// Pages
import Home from './Pages/Home'

// components
import Player from "./Components/Player"

// context
import { CurrentMusicProvider } from './Context/CurrentMusic'

function App() {
  return (
    <CurrentMusicProvider>
      
      <Router>
        <GlobalStyle/>

        <Player />
  
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

      </Router>

    </CurrentMusicProvider>
  );
}

export default App;
