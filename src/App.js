import './App.css';
import GlobalStyles from './globalStyles';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SobreMi2 from './pages/SobreMi/SobreMi.jsx';
import Hojav from './pages/Hojav/Hoja.jsx'

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyles />
      <Switch> 
        <Route path= "/" exact component={SobreMi2} />
        <Route path= "/hoja" exact component={Hojav} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
