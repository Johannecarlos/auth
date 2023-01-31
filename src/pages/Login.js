import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

export const Login = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(element) {
    element.preventDefault();

    setLoading(true);

    if (password.length < 6) {
      alert('Senha deve ter no mínimo 6 caracteres');
      setLoading(false);
      return;
    }

    try {
      await signIn(email, password);
      navigate('/');
    } catch (error) {
      alert('Ocorreu um erro ao tentar efetuar o login');
      console.error(error);
    }

    setLoading(false);
  }

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={element => setEmail(element.target.value)}
        />

        <label>Senha</label>
        <input
          type="password"
          value={password}
          onChange={element => setPassword(element.target.value)}
        />

        <button disabled={loading} className="button-block" type="submit">
          Login
        </button>
      </form>
      <div className="center">
        <div>
          <p>
            Esqueceu a senha?
            <Link to="/forgot-password">Recuperar senha</Link>
          </p>
          <p>
            Não tem uma conta?
            <Link to="/signup">Cadastre-se</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
