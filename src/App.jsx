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

  return (
    <>
      <h1>Multilingual Greeting Generator!</h1>
    </>
  )
}

export default App
