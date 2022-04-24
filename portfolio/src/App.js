import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/nav/navbar';
import Landing from './components/landing/landing';
import Home from './components/home/home';
import Proyectos from './components/Proyects/work';
import AboutMe from './components/About/About';
import { AppDiv, HomeDiv } from './styles/app/app';
import {Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <AppDiv>
      <NavBar/>
      <HomeDiv>
        <Routes>
           <Route exact path='/' element={<Landing/>}/>
           <Route exact path='/home' element={<Home/>}/> 
           <Route exact path='/proyects' element={<Proyectos/>}/> 
           <Route exact path='/about' element={<AboutMe/>}/>   
        </Routes>
      </HomeDiv>
      </AppDiv>
    </div>
  );
}

export default App;
