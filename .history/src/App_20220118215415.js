import logo from './ch_icon.png';
import './App.css';
import './Button.scss';

function App() {
  return (
    <>
      <a>Chameleons in the sky</a>
      <div className='card'>
        <img src={logo} alt='logo' className='card-img' />
      </div>{' '}
      <br />
      <div class='buttons'>
        <button class='offset'>Mint Me!</button>
        <button class='offset'>Discord</button>
      </div>
    </>
  );
}

export default App;
