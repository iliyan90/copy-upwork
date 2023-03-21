import Navigation from './components/Navigation/Navigation'
import Navbar from './components/Navigation/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar/>
      <Navigation/>
      <Footer/>
    </Router>
  );
}

export default App;
