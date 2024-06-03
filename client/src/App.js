
import NavBar from "./components/navbar";
import MainPage from "./components/main";
import Skills from "./components/skills";
import Projects from "./components/projects_section";
import GetInTouch from "./components/connect";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
   

    <Router>
        <div className="main-section">
          <Routes>
            <Route path="/" element={
              <><NavBar />
                <MainPage />
                <Skills />
                <Projects />
              </>
            } />
            <Route path="/connect" element={
            <>
              <NavBar />
            <GetInTouch />
            </>
            } />
          </Routes>
        </div>
      </Router>

  );
}

export default App;
