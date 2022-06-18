import logo from './logo.png';

export default function Header() {
  return (
    <header className="App-header">
      <img src={logo} alt="logo" className='header-image'/>
      <h2 className='header-title'>Meme Generator</h2>
      <h4 className='header-project'>Learning React Project</h4>
    </header>
  )
}
