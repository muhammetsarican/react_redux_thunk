import { Container } from "reactstrap";
import Navigation from "../Navigation/Navigation";
import Dashboard from "./Dashboard";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import CartDetail from "../Cart/CartDetail";
import AddOrUpdateProduct from "../Products/AddOrUpdateProduct";
import NotFound from "../Common/NotFound";

function App() {
  return (
    <Container>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route  path="/product" component={Dashboard} />
        <Route path="/saveproduct/:productId" component={AddOrUpdateProduct} />
        <Route path="/saveproduct" component={AddOrUpdateProduct} />
        <Route  path="/cart" component={CartDetail} />
        <Route component={NotFound} />
      </Switch>
    </Container>
  );
}

export default App;
