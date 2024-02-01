import { BrowserRouter as Router} from 'react-router-dom';
import { HomeView } from './Views/HomeView';
import './App.css';

function App() {
    return (
      <div className="App" id="App">
        <header>
          Welcome to FlickPick!
        </header>
        <HomeView />
      </div>
    );
  }
  
  export default App;