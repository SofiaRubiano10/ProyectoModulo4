
import './App.css';
import Cabecera from './components/Cabecera';
import Cuerpo from './components/Cuerpo';
import Footer from './components/Footer';
import SobreMi from './components/SobreMi';
import GlobalStyles from './globalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Cabecera />
      <SobreMi />
      <Cuerpo />
      <Footer />
    </div>
  );
}

export default App;
