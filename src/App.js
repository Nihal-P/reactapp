import './App.css';
import Intro from './Intro'
import Sidebar from './Sidebar';
function App() {
  return (
    <div className="App">
      <div className="content">
        <Intro/>
      </div>
      <Sidebar/>
    </div>
  );
}

export default App;
