import logo from './ch_icon.png';
import './App.css';
import './Button.scss';

function App() {
  return (
    <>
      <h1>Chameleons in the sky</h1>
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
