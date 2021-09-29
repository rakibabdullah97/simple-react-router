import './App.css';
import Friends from './Component/Friends/Friends';
import PNF from './Component/PageNotFound/PNF';
import Home from './Component/Home/Home';
import Friend from './Component/Friend/Friend';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Component/Header/Header';

function App() {

  return (
    <div className="App">

      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/friends'>
            <Friends></Friends>
          </Route>
          <Route path='/PNF'>
            <PNF></PNF>
          </Route>
          {/* <Route path='*'>
           <NotFound></NotFound>
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
