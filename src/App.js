import './App.css';
import Navbar from './Component/Navbar';
import Tabs from './Component/Tabs';
import MidSection from './Component/MidSection';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Tabs/>
      <MidSection/>
      <Footer/>
    </div>
  );
}

export default App;
