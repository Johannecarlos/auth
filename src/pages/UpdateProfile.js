import React, { useState } from 'react';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

export const UpdateProfile = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { currentUser, updateEmailAddress } = useAuth();
  const [email, setEmail] = useState(currentUser.email);

  async function handleSubmit(element) {
    element.preventDefault();

    setLoading(true);

    if (email === currentUser.email) {
      setLoading(false);
      return navigate('/');
    }

    try {
      await updateEmailAddress(email);
      navigate('/');
    } catch (error) {
      alert('Ocorreu um erro ao tentar alterar o email');
      console.log(error);
    }

    setLoading(false);
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Atualizar Perfil</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={element => setEmail(element.target.value)}
        />
        <button disabled={loading} className="button-block">
          Atualizar
        </button>
      </form>
    </div>
  );
}
