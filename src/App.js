import './App.css';
import Intro from './Intro'
import Sidebar from './Sidebar';
import About from './About';
function App() {
  return (
    <div className="App">
      <div id="content">
        <Intro/>
        <About/>
      </div>
      <Sidebar/>
    </div>
  );
}

export default App;
