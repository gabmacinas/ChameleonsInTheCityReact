import chAnimated from './Showcase.gif';
// import background from './bg-min.png';
import icon from './ch-icon.png';
import './App.css';
// import './Button.scss';
// import './Title.scss';

function App() {
  return (
    <>
      <div className='fullscreen nopadding'>
        <div id='header'>
          <img src={icon} alt='ch-icon.png' className='img-logo' width='60px' />
          <ul>
            <li>
              <a href='https://discord.gg/7NsTzyuBKE'>Discord</a>
            </li>
            <li>
              <a href='http://'>Twitter</a>
            </li>
            <li>
              <a href='http://'>Opensea</a>
            </li>
            <li>
              <a href='https://etherscan.io/address/0x7c272a538dd21b74b935878df4079185b47d4eb9'>Etherscan</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='semitrans'>
        <h1>Chameleon In The City</h1>
        <img src={chAnimated} alt='chAnimated' className='floatright' />
        <br />
        <p>
          Chameleons are one of the Masters in Camouflage. <br /> <br />
          To survive, they mimic their surroundings and remain unnoticeable by bigger animals. Until one day, They
          decided to Live in the City! Every night they gather around and share some useful information with each other
          to making their life in the city much easier. They call themselves "The CITC-ens". <br /> <br />
          Can you spot them in the City? Or are you one of them? Happy Hunting!
        </p>
        <div>{/* <button className='btn'>Mint Me!</button> */}</div>
      </div>
      <div className='white'>
        <h2>Frequently Asked Questions</h2>
        <p>How many Chameleons are there?</p>
        <p>
          * There are currently <b>6000</b> Chameleon in the City. <br /> <br />
          How do I mint my own Chameleon?
        </p>
        <p>
          * You can mint your own Chameleon by clicking the button above. <br /> <br />
          How many Chameleons can I mint?
        </p>
        <p>
          * You can mint up to <b>8</b> Chameleon per transaction. <br /> <br />
          How much is a Chameleon worth?
        </p>
        <p>
          * Chameleons are worth <b>0.015 ETH</b>.
        </p>
      </div>

      <div className='dark'>
        <p>All rights reserved.</p>
      </div>
    </>
  );
}

export default App;
