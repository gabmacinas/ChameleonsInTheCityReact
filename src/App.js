import logo from './Showcase.gif';
import './App.css';
import './Button.scss';
import './Title.scss';

function App() {
  return (
    <>
      <h1>Chameleons In The City</h1>
      <div className='card'>
        <img src={logo} alt='logo' className='card-img' />
      </div>{' '}
      <br />
      <div className='buttons'>
        <button className='offset'>Mint Me!</button>
        <button className='offset'>Discord</button>
      </div>
    </>
  );
}

export default App;
