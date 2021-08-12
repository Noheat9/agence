import {BrowserRouter as Router, Route, Switch, Link,} from 'react-router-dom';
import WorksNav from '../../components/WorksNav';
import Platon from './platon';
import Solane from './solane';
import Sedal from './sedal';

const Works = () => {
  return (
    <div className="App">
      <h1>Au fil des années, nous avons pu accompagner les meilleurs.

      Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.</h1><br />
      <h1>Projets</h1><br />
      <Router>
        <WorksNav />
        <main>
          <Switch>
            <Route path="/works/platon">
              <Platon />
            </Route>
            <Route path="/works/sedal">
              <Sedal />
            </Route>
            <Route path="/works/solane">
              <Solane />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default Works;