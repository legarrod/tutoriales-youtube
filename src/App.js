import './App.css';
import About from './About';
import Home from './Home';
import Layout from './components/Layout/Layout';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/about" element={<About />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav> */}

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
    </Router>
  );
}

export default App;
