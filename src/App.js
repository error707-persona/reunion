
import './App.css';
import NavBar from './components/NavBar';
import Searchbar from './components/Searchbar';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='flex justify-center border'>
        <div className='mt-40'>
          <Searchbar/>
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
