import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Global Style
import GlobalStyle from './Styles/styles'

// Pages
import Home from './Pages/Home'
import Search from './Pages/Search'

function App() {
  return (
    <Router>
      <GlobalStyle/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/buscar" element={<Search/>} />
      </Routes>
    </Router>
  );
}

export default App;
