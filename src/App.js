import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Global Style
import GlobalStyle from './Styles/styles'

// Pages
import Home from './Pages/Home'

function App() {
  return (
    <Router>
      <GlobalStyle/>

      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
