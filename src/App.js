import './App.css';

import Main from './components/Sections/Main';
import Projects from './components/Sections/Projects';
import TopSkills from './components/Sections/TopSkills';
import Footer from './components/Sections/Footer';

function App() {
  return (
    <div className="App">
      <Main />
      <Projects />
      <TopSkills />
      <Footer />
    </div>
  );
}

export default App;
