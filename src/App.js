import './App.css';
import {BrowserRouter as Router, Route, Switch, Link,} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Works from './pages/Works'


function App() {
  
  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/works">
              <Works/>
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
