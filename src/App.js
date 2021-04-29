import './App.css';
import Intro from './Intro'
import Sidebar from './Sidebar';
import About from './About';
import Logo from './Logo';
import Experience from './Experience'
import Projects from './Projects'
import Credit from './Credit'

function App() {
  return (
    <div className="App">
      <Logo></Logo>
      <div id="content">
        <Intro/>
        <About/>
        <Experience/>
        <Projects/>
        <Credit/>
      </div>
      <Sidebar/>
    </div>
  );
}

export default App;
