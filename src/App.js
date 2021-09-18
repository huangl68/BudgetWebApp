import Navbar from './Navbar';
import EntryPage from './Pages/EntryPage';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from './Pages/Dashboard';
import EntryProvider from './Store/EntryProvider';

function App() {
  return (
    <Router>
        <Navbar />
        <EntryProvider>
          <Route path="/" exact component={EntryPage} />
          <Route path="/dashboard" exact component={Dashboard}/>
        </EntryProvider>
    </Router>
  );
}

export default App;
