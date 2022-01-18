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
        <h1>
          Simple hover effects with <code>box-shadow</code>
        </h1>
        <button class='fill'>Fill In</button>
        <button class='pulse'>Pulse</button>
        <button class='close'>Close</button>
        <button class='raise'>Raise</button>
        <button class='up'>Fill Up</button>
        <button class='slide'>Slide</button>
        <button class='offset'>Offset</button>
      </div>
    </>
  );
}

export default App;
