// React component for the login form
import React, {useState,useEffect} from 'react';
import './Login.css'; // Importing the CSS file for styling
import Login from './App2'

function LoginForm(){
    const [Signup,setSignUp] = useState(false);

    const handleSingup = (e) =>{
      e.preventDefault();
      setSignUp(!Signup);
    }
    return (
      <>
{  !Signup &&     ( 
  <div className="login-container">
        <img src= "https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/557e9cb1ce105779cdb5.svg"/>     
        <h2>Log in to your account</h2>
        <form>
          Email address or phone number
          <input type="text" placeholder="" />
          <button type="submit">NEXT</button>
          <p className="terms">
            By continuing, you agree to our <a href="/terms">Terms</a> and <a href="/privacy">Privacy Policy</a>
          </p>
          <p className="signup">
            NEED AN ACCOUNT? <a href="/signup" onClick={(e)=>{
              handleSingup(e);
            }}>SIGN UP</a>
          </p>
        </form>
        </div>
        )
        }
        {Signup &&
        <Login Signup={Signup} setSignup={setSignUp} />
        }
      </>
    );
}

export default LoginForm;
