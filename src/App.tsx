import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NewNote from "./pages/NewNote";

function App() {
  return (
    <Container className="m-4">
      <Router>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/new" element={<NewNote />} />
          <Route path="/:id">
            <Route index element={<h1>Show</h1>} />
            <Route path="edit" element={<h1>Edit</h1>} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
