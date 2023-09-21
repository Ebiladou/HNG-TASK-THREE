import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const hardcodedEmail = 'user@example.com';
  const hardcodedPassword = '1Password';

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email === hardcodedEmail && formData.password === hardcodedPassword) {
      navigate('/gallery');
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className='login-form'>
      <h2>Login to get full access</h2>
      <form onSubmit={handleSubmit}>
      <div className="signbtns">
        <button>Sign in with google</button>
        <button>Sign in with facebook</button>
      </div>
        <p>or</p>
        <div className='form-input'>
          <div className='email'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className='password'>
            <label htmlFor='password'>Enter Password</label>
            <input
              type='password'
              name='password'
              id='password'
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>

          <button type='submit'>Submit</button>
        </div>
        {error && <div className='error'>{error}</div>}
      </form>
    </div>
  );
}

export default Login;