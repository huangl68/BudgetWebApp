import Navbar from './Navbar';
import EntryPage from './Pages/EntryPage';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <Router>
        <Navbar />        
        <Route path="/" exact component={EntryPage} />
        <Route path="/dashboard" exact component={Dashboard}/>
    </Router>
  );
}

export default App;
