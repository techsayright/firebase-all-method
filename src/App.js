import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Navdata from './components/Navdata';
import GetData from './components/GetData';
import SetData from './components/SetData';
import EditData from './components/EditData';
import './App.css';


function App() {
  return (
    <div>
    <Router>
      <div className="App">
        <Navdata />
        <Switch>
          <Route exact path="/" component={GetData} />
          <Route exact path="/getdata" component={GetData} />
          <Route exact path="/setdata" component={SetData} />
          <Route exact path="/editdata/:id" component={EditData} />
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
