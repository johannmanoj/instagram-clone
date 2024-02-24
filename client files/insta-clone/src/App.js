import logo from './logo.svg';
import insta_logo from './images/insta_logo.png';
import insta_login_img from './images/login_page_image.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='login-page'>
        
          <img className='insta-login-img' src={insta_login_img} alt="react logo"/>
          
          <div className='login-card'>

          <img className='insta-logo' src={insta_logo} alt="react logo"/>
            <br></br>
            <input placeholder='Phone number' className='login-input'></input><br></br>
            <input placeholder='Password' className='login-input'></input><br></br>
            <button className='login-button'>Log in</button><br></br>
            <p className='login-text'>OR</p>
            <p className='login-text'>Don't have an account? Sign up</p>
          </div>
        
        </div>
      </header>
    </div>
  );
}

export default App;
