import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Header from '../components/Header';
import InputField from '../components/InputField';

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/profile');
  };

  return (
    <section className="page login-page">
      <Header
        title="Signin to your PopX account"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
      />
      <form className="auth-form" onSubmit={handleSubmit}>
        <InputField
          label="Email Address"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter email address"
        />
        <InputField
          label="Password"
          type="password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter password"
        />
        <Button type="submit" variant={email && password ? 'primary' : 'muted'}>
          Login
        </Button>
      </form>
    </section>
  );
}

export default LoginPage;
