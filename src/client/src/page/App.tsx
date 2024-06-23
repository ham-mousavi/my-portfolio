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
import { useState } from 'react';

const Index = () => {
  return (
    <main className='w-full h-screen block '>
      <section className='w-full h-4/5 m-auto  flex justify-center items-center bg-my-yellow-geranium dark:bg-my-yellow-geranium-inv dark:text-white'>
        <div className='w-60 h-72 mr-4 bg-green-400'>
          This is him!
          <br />
          Have I told you he’s a Software Engineer?(mostly on web & data)
        </div>
        <div className='w-2/5 h-72 mt-40'>
          <h3 className='font-Ephesis text-4xl'>Hello, there!</h3>
          <br />
          <p>Interest in art and science, tendency to learn new things made Hamid a software engineer.
            Here you can find his recent posts and projects, plus, know him more by browsing this web site!</p>
        </div>
      </section>
    </main>
  )
}

function App() {
  const [darkMode, setDarkMode] = useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)

  return (
    <div>
      <div className={`${darkMode ? "dark" : ""}`}>
        <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route path='/' element={<Index />}></Route>
            <Route path='/articles' element={<Articles />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/projects' element={<Projects />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;