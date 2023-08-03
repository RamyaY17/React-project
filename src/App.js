import './App.css';
import Tabledemo from './components/Tabledemo.js'
import List from './components/list.js'
import Moose from './components/moose.js'

function App() {
  return (
    <div className = "App">
      <Moose></Moose>
      <Tabledemo></Tabledemo>
      <List></List>
    </div>
  );
}

export default App;
