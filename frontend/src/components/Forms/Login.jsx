import { Link } from 'react-router-dom';
import './Login.css';
import EmailIcon from '@material-ui/icons/Email';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { useLogin } from '../../hooks/useLogin';
import { useState } from 'react';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password);

  }

  return (
    <>
      <div className="htng">
        <div className="bojjd">
          <div className="container">
            <div className="cover">
              <div className="front">
                <img src="https://media.npr.org/assets/img/2020/10/15/benedictinecollege-2_custom-5fb6f99140aa97add9adbfcf3683b136f39aab69.jpg" alt="gh" />
                <div className="text">
                  <span className="text-1">Every senior's experiences <br />are treasures</span>
                  <span className="text-2">Let's rise!</span>
                </div>
              </div>

            </div>
            <div className="forms">
              <div className="form-content">
                <div className="login-form">
                  <div className="title">Login</div>
                  <form onSubmit={handleSubmit}>
                    <div className="input-boxes">
                      <div className="input-box">
                        <EmailIcon />
                        <input type="email" name='email' placeholder='Enter your Email' required onChange={(e) => setEmail(e.target.value)} value={email} />
                      </div>
                      <div className="input-box">
                        <VpnKeyIcon />
                        <input type="password" name='password' placeholder='Enter your Password' required onChange={(e) => setPassword(e.target.value)} value={password} />
                      </div>
                      <div className="button input-box">
                        <input type="submit" value="Submit" disabled={isLoading} />
                        
                        {error && <div className='error' style={{ color: 'red'}}>{error}</div>}
                      </div>
                      <div className="text sign-up-text">Don't have an account? <Link to='/signup' style={{ textDecoration: "none" }}> Sigup now</Link></div>
                    </div>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login