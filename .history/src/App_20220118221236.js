import logo from './ch_icon.png';
import './App.css';
import './Button.scss';
import './Title.scss';

function App() {
  return (
    <>
      <p>
        <span>Chameleons in the sky</span>
      </p>
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
