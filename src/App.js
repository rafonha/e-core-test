import Home from "./pages/Home";
import UsersPage from "./pages/UsersPage";
import TeamsPage from "./pages/TeamsPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <>
      <Home>
        <h1>Home</h1>
        <UsersPage />
        <TeamsPage />
      </Home>
    </>
  );
}

export default App;
