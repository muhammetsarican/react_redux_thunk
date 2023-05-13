import { Container } from "reactstrap";
import Navigation from "../Navigation/Navigation";
import Dashboard from "./Dashboard";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import CartDetail from "../Cart/CartDetail";

function App() {
  return (
    <Container>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/product" component={Dashboard} />
        <Route exact path="/cart" component={CartDetail} />
      </Switch>
    </Container>
  );
}

export default App;
