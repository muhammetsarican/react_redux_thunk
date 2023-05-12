import { Container } from "reactstrap";
import Navigation from "../Navigation/Navigation";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Container>
      <Navigation />
      <Dashboard />
    </Container>
  );
}

export default App;
