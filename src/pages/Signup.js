import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

export const Signup = () => {
  const { signUp } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(element) {
    element.preventDefault();

    setLoading(true);

    if (password.length < 6) {
      alert('Senha deve ter no mínimo 6 caracteres');
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      alert('As senhas não conferem');
      setLoading(false);
      return;
    }

    try {
      await signUp(email, password);
      navigate('/');
    } catch (error) {
      alert('Ocorreu um erro ao tentar criar o usuário');
    }

    setLoading(false);
  }

  return (
    <div className="container">
      <h2>Cadastro</h2>
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

        <label>Confirmar senha</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={element => setConfirmPassword(element.target.value)}
        />

        <button disabled={loading} className="button-block" type="submit">
          Cadastrar
        </button>
      </form>
      <div className="center">
        <div>
          <p>
            Já tem uma conta?
            <Link to="/login">Entrar</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
