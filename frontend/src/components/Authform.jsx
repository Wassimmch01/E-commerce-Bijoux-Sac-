import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'authentification ici...
    // Après succès :
    navigate('/');
  };

  return (
    <>
      <Header />

      <div className="auth-container  py-5">
        <div className="auth-box mx-auto" style={{ maxWidth: 400 }}>
          <h2 className="text-center mb-4">
            {isLogin ? 'Connexion' : 'Créer un compte'}
          </h2>
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <input
                type="text"
                placeholder="Nom complet"
                className="form-control mb-3"
              />
            )}
            <input
              type="email"
              placeholder="Email"
              className="form-control mb-3"
              required
            />
            <input
              type="password"
              placeholder="Mot de passe"
              className="form-control mb-3"
              required
            />
            <button type="submit" className="button w-100">
              {isLogin ? 'Se connecter' : "S'inscrire"}
            </button>
          </form>
          <p className="text-center mt-3">
            {isLogin ? "Pas encore de compte ?" : "Déjà inscrit ?"}{' '}
            <span
              onClick={() => setIsLogin(!isLogin)}
              style={{ cursor: 'pointer', color: '#007bff' }}
            >
              {isLogin ? "Créer un compte" : "Se connecter"}
            </span>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
