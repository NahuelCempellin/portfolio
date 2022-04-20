import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/nav/navbar';
import Home from './components/home/home';
import { AppDiv, HomeDiv } from './styles/app/app';

function App() {
  return (
    <div className="App">
      <AppDiv>
      <NavBar/>
      <HomeDiv>
      <Home/>
      </HomeDiv>
      </AppDiv>
    </div>
  );
}

export default App;
