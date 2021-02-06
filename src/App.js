import './App.css';

// Components
import Nav from './components/Nav';
import Dogs from './components/Dog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <h1>Puppy Paradise 🐕</h1>
      <Dogs></Dogs>
      <Footer></Footer>
    </div>
  );
}

export default App;
