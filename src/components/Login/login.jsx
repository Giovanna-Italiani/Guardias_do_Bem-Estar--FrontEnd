import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import LoginServidor from '../../service/loginservice';
import './login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [erro, setErro] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const loginService = new LoginServidor();

  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = {
      username,
      password,
    };

    try {
      const response = await loginService.autenticar(userData);

      if (response.status === 200) {
        // Assuming you have a context or some state management to set the user as logged in
        // Example: AuthContext.login(response.data);
        navigate('/homepage'); // Redireciona para a página inicial após o login bem-sucedido
      } else {
        setErro('Login failed');
      }
    } catch (error) {
      setErro('Nome de usuário ou senha incorretos.');
      console.error('Error:', error);
    }
  };

  const handleSignUpClick = () => {
    navigate('/cadastro');
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login">
      <div className="loginBox">
        <div className="login-access">
          <h1>Bem vinda</h1>
          <hr />
          <h2>Faça login para entrar na nossa comunidade!</h2>

          <form className="access" onSubmit={handleLogin}>
            <div className="accessGroup">
              <label htmlFor="usuaria" />
              <input
                type="text"
                id="usuaria"
                name="usuaria"
                placeholder="Usuária"
                className="inputField"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="accessGroup">
              <label htmlFor="senha" />
              <div className="passwordInputWrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="senha"
                  name="senha"
                  placeholder="Senha"
                  className="inputField"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div
                  className="passwordToggleIcon"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>

            <button type="submit">Entrar</button>

            {erro && <p>{erro}</p>}

            <div className="redefinirSenha">
              <a href="/cadastro">Esqueci minha senha</a>
            </div>
          </form>

          <div className="newUser">
            <hr />
            <h1>É nova por aqui?</h1>
            <button type="button" onClick={handleSignUpClick}>
              Criar conta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
