import './App.css';

// Components
import Nav from './components/Nav';
import Dog from './components/Dog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <h1>Puppy Paradise 🐕</h1>
      <Dog></Dog>
      <Footer></Footer>
    </div>
  );
}

export default App;
