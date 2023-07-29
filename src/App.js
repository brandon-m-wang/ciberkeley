import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./home";
import { About } from "./about";
import { ScrollToTop } from "./scroll-to-top";
import { Leadership } from "./leadership";
import { Network } from "./network";
import { Fund } from "./fund";
import { Education } from "./education";
import { Join } from "./join";
import { Member } from "./member";

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/leadership">
          <Leadership />
        </Route>
        <Route path="/network">
          <Network />
        </Route>
        <Route path="/the-fund">
          <Fund />
        </Route>
        <Route path="/education">
          <Education />
        </Route>
        <Route path="/join-us">
          <Join />
        </Route>
        <Route path="/members-portal">
          <Member />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

// brandon was here

export default App;
