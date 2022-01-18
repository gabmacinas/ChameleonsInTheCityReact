import logo from './ch_icon.png';
import './App.css';
import './Button.scss';
import './Stars.sass';

function App() {
  return (
    <>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <div id='title'>
        <span>PURE CSS</span>
        <br />
        <span>PARALLAX PIXEL STARS</span>
      </div>
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
