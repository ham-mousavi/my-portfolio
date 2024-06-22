import Navigation from '../component/Navigation';
import {
  Routes,
  Route,
  Outlet
} from 'react-router-dom';
import './App.css';
import Articles from './Articles';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';

function App() {
  return (
    <div>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path='/articles' element={<Articles />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;