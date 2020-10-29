import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./App.css";
import Fib from "./Fib";
import logo from "./logo.svg";
import OtherPage from "./OtherPage";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/">Home</Link>
          <Link to="/otherPage">Other Page</Link>
        </header>
        <div>
          <Route exact path="/" component={Fib} />
          <Route exact path="/otherPage" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
