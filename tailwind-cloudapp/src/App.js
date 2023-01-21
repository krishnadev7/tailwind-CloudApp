import About from './components/About';
import AllInOne from './components/AllInOne';
import Cloud from './components/Cloud';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import Support from './components/Support';

function App() {
  return (
    <>
      <Navbar />
      <Cloud />
      <About />
      <Support />
      <AllInOne/>
      <Pricing/>
    </>
  );
}

export default App;
