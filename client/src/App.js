import HomePage from "./homepage";
import About from "./about";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from "./contact";
import  { Login } from "./login";
import SignUp from "./signup";

import Booking from "./booking";





function App() {
  document.body.style.margin='0'
  document.body.style.padding='0'

  return (
    <Router>
      <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/About" exact component={About} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/booking" exact component={Booking} />
      <Route path="/SignUp" exact component={SignUp} />
      <Route path="/login" exact component={Login} />
      </Switch>
    </Router>
      
  

  );
}

export default App;