import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

export const UserProfile = () => {
  const { currentUser, logOut } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logOut();
      navigate('/login');
    } catch (error) {
      console.log(error);
      alert('Ocorreu um erro ao tentar sair.');
    }
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Perfil do Usuário</h1>
        <button onClick={handleLogout}>Sair</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{currentUser.email}</td>
            <td>
              <Link to="/update-profile">Atualizar perfil do usuário</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
