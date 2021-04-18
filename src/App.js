import './App.css';
import Intro from './Intro'
import Sidebar from './Sidebar';
import About from './About';
import Logo from './Logo';
function App() {
  return (
    <div className="App">
      <Logo></Logo>
      <div id="content">
        <Intro/>
        <About/>
      </div>
      <Sidebar/>
    </div>
  );
}

export default App;
