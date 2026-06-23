import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { postJson } from '../services/api.js'
import '../styles/login.css'
import logo from "../assets/logo.png"

function Login() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: '',
    senha: ''
  })

  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm((current) => ({
      ...current,
      [name]: value
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setMessage('')
    setError('')

    try {
      const { data } = await postJson('/user/login', form)

      setMessage('Login realizado com sucesso!')
      console.log(data)

      if (data.token) {
        localStorage.setItem('token', data.token)
        localStorage.setItem('userName', data.name);
      }

      navigate('/dashboard')

    } catch (err) {
      setError(
        err.response?.data?.error ||
        err.message ||
        'Email ou senha inválidos'
      )
    }
  }

  return (
    <main className="login-page">

      <section className="left-panel animate-fade-in delay-1">
        <div className="logo">
          <img src={logo} alt="LETO" />
        </div>

        <h1>
          Monitoramento Operacional Hospitalar
        </h1>

        <p>
          Gestão inteligente de leitos,
          transporte e higienização para
          hospitais de alta complexidade.
        </p>
      </section>

      <section className="right-panel animate-fade-in delay-2">
        <div className="login-card">

          <div className="login-icon">
            {/* CORRIGIDO: Ajustado o link do xmlns para a especificação padrão estável do W3C */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://w3.org">
              <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 8V16" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 11H15" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <h2>Acesso ao Sistema</h2>

          <p className="subtitle">
            Insira suas credenciais para continuar
          </p>

          <form
            onSubmit={handleSubmit}
            className="login-form"
          >

            <input
              name="email"
              type="email"
              placeholder="nome@hospital.com.br"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              name="senha"
              type="password"
              placeholder="Senha"
              value={form.senha}
              onChange={handleChange}
              required
            />

            <button type="submit">
              Entrar no sistema
            </button>

          </form>

          {message &&
            <p className="success animate-fade-in">
              {message}
            </p>
          }

          {error &&
            <p className="error animate-fade-in">
              {error}
            </p>
          }

        </div>
      </section>

    </main>
  )
}

export default Login
