import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navhead from './Components/Navhead';
import Footer from './Components/Footer';
import Map from './Components/Map';
import Hero from './Components/Hero';
import Mission from './Components/Mission';
import Vision from './Components/Vision';


function App() {
  return (
    <div className="App">
      <Navhead/>
      <Hero/>
      <Vision/>
      <Mission/>
      <Map/>
      <Footer/>
    </div>
  );
}

export default App;
