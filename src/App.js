import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Plans from './components/Plans/Plans';
import Programs from './components/programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Testimonals from './components/Testimonals/Testimonals';
function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Reasons/>
      <Plans/>
      <Testimonals/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
