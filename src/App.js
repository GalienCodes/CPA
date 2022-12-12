import LandingPage from './components/LandingPage';
// This is a React Router v6 app
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Contact from './components/modules/Contact';
import NavBar from './components/modules/NavBar';
import About from './components/modules/About';
import Team from './components/modules/teams/Team';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={
        <div div className='max-w-4xl flex flex-col mx-auto bg-gray-900 font-globalFont min-h-screen'>
        <LandingPage/>
      </div>
      } />
      <Route path="/contact" element={
      <div div className='max-w-4xl flex flex-col mx-auto bg-gray-900 font-globalFont min-h-screen'>
         <NavBar/>
            <Contact/>
      </div>
     } />
      <Route path="/about" element={
      <div div className='max-w-4xl flex flex-col mx-auto bg-gray-900 font-globalFont min-h-screen'>
         <NavBar/>
            <About/>
      </div>
     } />
     <Route path="/team" element={
      <div div className='max-w-4xl flex flex-col mx-auto bg-gray-900 font-globalFont min-h-screen'>
         <NavBar/>
            <Team />
      </div>
     } />
      <Route path="/mission" element={
      <div div className='max-w-4xl flex flex-col mx-auto bg-gray-900 font-globalFont min-h-screen'>
         <NavBar/>
            {/* <Team /> */}
      </div>
     } />
    </Routes>
  </BrowserRouter>
  
  );
}

export default App;
