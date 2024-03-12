
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Info from './components/Info';
import Navbar from './components/Navbar';
import News from './components/News';
import Question from './components/Question';
import Team from './components/Team';

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Info/>
      <Team/>
      <Question/>
      <News/>
      <Footer/>
    </>
  );
}

export default App;
