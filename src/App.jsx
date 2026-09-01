import { useState } from 'react'
import './App.css'


const greetings = {
  sv: (name) => `Hej ${name}! Välkommen till kursen!`,
  en: (name) => `Hello ${name}! Welcome to the course!`,
  hy: (name) => `Բարեւ ${name}! Բարի գալուստ դասընթացին!`,
  es: (name) => `¡Hola ${name}! ¡Bienvenido al curso!`,
  fr: (name) => `Bonjour ${name}! Bienvenue dans le cours!`,
  de: (name) => `Hallo ${name}! Willkommen im Kurs!`,
  it: (name) => `Ciao ${name}! Benvenuto nel corso!`,
  pt: (name) => `Olá ${name}! Bem-vindo ao curso!`,
  ru: (name) => `Привет ${name}! Добро пожаловать на курс!`,
  ja: (name) => `こんにちは ${name}! コースへようこそ！`,
  zh: (name) => `你好 ${name}! 欢迎参加课程！`,
  ar: (name) => `مرحبا ${name}! مرحبا بك في الدورة!`
}
function App() {
  const [name, setName] = useState('')
  const [language, setLanguage] = useState('sv')  
  const [result, setResult] = useState('')

  function handleSubmit(event){
    event.preventDefault()
    const cleanName = name.trim()
     if (cleanName === '') {
      setResult('Please enter your name.')
      return
  }

  const generatedGreeting = greetings[language](cleanName)
  setResult(generatedGreeting)
}


  return (
      <main className="app">
      <section className="greeting-card">
        <h1>Multilingual Greeting Generator</h1>
        <p className="instructions">
        Enter your name and choose your preferred language.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your name</label>

          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
  <label htmlFor="language">Preferred language</label>

  <select
    id="language"
    value={language}
    onChange={(event) => setLanguage(event.target.value)}
  >
    <option value="sv">Svenska</option>
    <option value="en">English</option>
    <option value="hy">Հայերեն</option>
    <option value="ru">Русский</option>
    <option value="es">Español</option>
    <option value="fr">Français</option>
    <option value="de">Deutsch</option>
    <option value="it">Italiano</option>
    <option value="pt">Português</option>
    <option value="ja">日本語</option>
    <option value="zh">中文</option>
    <option value="ar">العربية</option>
  </select>
</div>
<button type="submit">Generate Greeting</button>
      </form>
      {result && <p className="result">{result}</p>}
      </section>
    </main>
  )
}

export default App
