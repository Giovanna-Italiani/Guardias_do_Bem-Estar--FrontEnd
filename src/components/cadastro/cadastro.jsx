import './cadastro.css';
import UserServidor from '../../service/cadastro';
import { estadosBrasileiros } from './estados';

import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [idade, setIdade] = useState('');
  const [cpf, setCpf] = useState('');
  const [genero, setGenero] = useState('');
  const [cep, setCep] = useState('');
  const [uf, setUf] = useState('');
  const [cidade, setCidade] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitForm, setSubmitForm] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validateFields = () => {
    const passwordsMatch = password === confirmPassword;
    setIsSubmitted(true);

    return (
      nome &&
      email &&
      telefone &&
      idade &&
      cpf &&
      genero &&
      cep &&
      uf &&
      cidade &&
      endereco &&
      numero &&
      nickname &&
      password &&
      confirmPassword &&
      passwordsMatch
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateFields()) {
      return;
    }

    try {
      const userData = {
        nome,
        email,
        telefone,
        idade,
        cpf,
        genero,
        cep,
        uf,
        cidade,
        endereco,
        numero,
        nickname,
        password,
      };

      const userService = new UserServidor();
      await userService.salvar(userData);

      setSubmitForm(true);
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      setError(
        'Erro ao cadastrar usuário. Por favor, tente novamente mais tarde.',
      );
    }
  };

  const handleCancel = () => {
    navigate('/login');
  };

  const handleSuccess = () => {
    navigate('/voluntaria');
  };

  return (
    <div className="cadastro-usuario">
      <div className="cadastro-usuario-box">
        <div className="cadastro-usuario-form">
          <h1>Cadastrar-se</h1>
          <form onSubmit={handleSubmit} className="form" method="POST">
            {/* Nome Completo */}
            <div className="form-group">
              <label htmlFor="nome">Nome completo</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Digite seu nome completo"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>

            {/* E-mail */}
            <div className="form-group">
              <label htmlFor="email">Endereço de email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Telefone */}
            <div className="form-group">
              <label htmlFor="telefone">Telefone</label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                placeholder="Digite seu telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                required
              />
            </div>

            <div className="form-group-box">
              {/* Idade */}
              <div className="form-group">
                <label htmlFor="idade">Idade</label>
                <input
                  type="number"
                  id="idade"
                  name="idade"
                  placeholder="Digite sua idade"
                  value={idade}
                  onChange={(e) => setIdade(e.target.value)}
                  required
                />
              </div>

              {/* Gênero */}
              <div className="form-group">
                <label htmlFor="genero">Gênero</label>
                <select
                  id="genero"
                  name="genero"
                  value={genero}
                  onChange={(e) => setGenero(e.target.value)}
                  required
                >
                  <option value="">Selecione...</option>
                  <option value="Feminino">Feminino</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>

              {/* CPF */}
              <div className="form-group">
                <label htmlFor="cpf">CPF</label>
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  placeholder="Digite seu CPF"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group-box">
              {/* CEP */}
              <div className="form-group">
                <label htmlFor="cep">CEP</label>
                <input
                  type="text"
                  id="cep"
                  name="cep"
                  placeholder="Digite seu CEP"
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  required
                />
              </div>

              {/* Estado */}
              <div className="form-group">
                <label htmlFor="uf">Estado</label>
                <select
                  id="uf"
                  name="uf"
                  value={uf}
                  onChange={(e) => setUf(e.target.value)}
                  required
                >
                  <option value="">Selecione...</option>
                  {estadosBrasileiros.map((estado) => (
                    <option key={estado.sigla} value={estado.sigla}>
                      {estado.nome}
                    </option>
                  ))}
                </select>
              </div>

              {/* Cidade */}
              <div className="form-group">
                <label htmlFor="cidade">Cidade</label>
                <input
                  type="text"
                  id="cidade"
                  name="cidade"
                  placeholder="Digite sua cidade"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group-box">
              {/* Endereço */}
              <div className="form-group">
                <label htmlFor="endereco">Endereço</label>
                <input
                  type="text"
                  id="endereco"
                  name="endereco"
                  placeholder="Digite seu endereço"
                  value={endereco}
                  onChange={(e) => setEndereco(e.target.value)}
                  required
                />
              </div>

              {/* Número */}
              <div className="form-group">
                <label htmlFor="numero">Número</label>
                <input
                  type="text"
                  id="numero"
                  name="numero"
                  placeholder="Digite o número"
                  value={numero}
                  onChange={(e) => setNumero(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Usuário */}
            <div className="form-group">
              <label htmlFor="nickname">Usuário</label>
              <input
                type="text"
                id="nickname"
                name="nickname"
                placeholder="Digite seu usuário"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                required
              />
            </div>

            {/* Senha */}
            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <div className="passwordInputWrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div
                  className="passwordToggleIcon"
                  onClick={handleToggleShowPassword}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>

            {/* Confirmar Senha */}
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirmar Senha</label>
              <div className="passwordInputWrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirme sua senha"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <div
                  className="passwordToggleIcon"
                  onClick={handleToggleShowPassword}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>

              {isSubmitted && password !== confirmPassword && (
                <p className="error-message">
                  As senhas não coincidem. Por favor, tente novamente.
                </p>
              )}
            </div>
            {/* Botões de Ação */}
            <div className="form-group-box">
              <button
                className="btnCancel"
                type="button"
                onClick={handleCancel}
              >
                Cancelar
              </button>
              <button className="btnSubmit" type="submit">
                Cadastrar
              </button>
            </div>
          </form>

          {/* Exibição de erro */}
          {error && <p className="error-message">{error}</p>}

          {/* Submissão do formulário */}
          {submitForm && (
            <div className="success-message">
              <p>Usuário cadastrado com sucesso!</p>
              <button className="btnSubmit" onClick={handleSuccess}>
                Continuar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
