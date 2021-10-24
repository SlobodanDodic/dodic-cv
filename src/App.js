import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/MenuAndNavbar/Navbar";
import Home from "./Components/LandingPages/Home";
import About from "../src/Components/AboutAtoms/About";
import Projects from "../src/Components/ProjectsAtom/Projects";
import Songs from "../src/Components/SongsAtoms/Songs";
import Quiz from "./Components/Quiz/Quiz";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/songs" component={Songs} />
          <Route path="/quiz" component={Quiz} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
