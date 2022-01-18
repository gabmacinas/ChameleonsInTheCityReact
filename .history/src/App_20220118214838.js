import logo from './ch_icon.png';
import './App.css';
import './Button.scss';

function App() {
  return (
    <>
      <div className='card'>
        <img src={logo} alt='logo' className='card-img' />
      </div>
      <div class='buttons'>
        <button class='offset'>Discord</button>
      </div>
    </>
  );
}

export default App;
