import About from './components/About';
import AllInOne from './components/AllInOne';
import Cloud from './components/Cloud';
import Footer from './components/Footer';
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
      <Footer/>
    </>
  );
}

export default App;
