import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(element) {
    element.preventDefault();

    setLoading(true);

    try {
      await resetPassword(email);
      alert('Email de recuperação enviado');
      navigate('/login');
    } catch (error) {
      alert('Ocorreu um erro ao enviar o email');
      console.log(error);
    }

    setLoading(false);
  }

  return (
    <div className="container">
      <h1>Esqueci minha senha</h1>

      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button disabled={loading} className="button-block">
          Recuperar senha
        </button>
      </form>

      <div className="center">
        <div>
          <p>
            Já tem uma conta?
            <Link to="/login">Entrar</Link>
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
