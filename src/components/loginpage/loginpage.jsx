import React, { useState } from 'react'
import './loginpage.css'
import { loginUser, registerUser} from './app1'

import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'


const LoginPage = () =>{
    //const [showSignupForm, setShowSignupForm] = useState(false);  
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState(''); // Add Email state variable
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const handleSignupLinkClick = () => {
      setIsLogin(false); // Show the signup form when the signup link is clicked
  };
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
        await loginUser(username, password);
        // Handle successful login```
    } catch (error) {
        setError('Login failed. Please check your credentials.');
        // Handle login error
    }
};


  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
    }
    try {
        const userData = { username, password, email };
        const data = await registerUser(userData);
        console.log('Signup successful', data);
        // Handle successful signup 
    } catch (error) {
        setError(error.message);
        // Handle signup error 
    }
}


return (
  <div className="container">
   
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      {isLogin ? (
          <form onSubmit={handleLoginSubmit}>
              <div>
                  <label> <img src={user_icon} alt="Username" />
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    </label>
              
              </div>
              <div>
                  <label>  <img src={password_icon} alt="Password" />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required /> 
                    </label>
                  
              </div>
              <p>Don't have an account? <button onClick={handleSignupLinkClick}>Sign Up</button></p>
              <button type="submit">Login</button>
          </form>
      ) : (
          <form onSubmit={handleSignupSubmit}>
              <div>
                  <label>
                    <img src={user_icon} alt="Username" />
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    </label>
                  
              </div>
              <div>
                  <label>
                  <img src={email_icon} alt="Email" />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                  </label>
                 
              </div>
              <div>
                  <label> 
                    <img src={password_icon} alt="Password" />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </label>
          
              </div>
              <div>
                  <label>
                  <img src={password_icon} alt="confirmPassword" />
                    <input type="confirmPassword" placeholder="re-enterpassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />

                  </label>
                 
              </div>
              <p>Already have an account? <button onClick={() => setIsLogin(true)}>Login</button></p>
              <button type="submit">Sign Up</button>
          </form>
      )}
      {error && <p>{error}</p>}
  

  </div>
);
      }
export default LoginPage;
