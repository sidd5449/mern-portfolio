import './App.css';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import Portfolio from './components/Portfolio/Portfolio';
import Tech from './components/Tech/Tech';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Tech />
      <Portfolio />
    </div>
  );
}

export default App;
