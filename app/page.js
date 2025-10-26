'use client'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [language, setLanguage] = useState('es')

  useEffect(() => {
    if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
      setIsDarkMode(true)
    }else{
      setIsDarkMode(false)
    }
    
    const savedLanguage = localStorage.getItem('language') || 'es'
    setLanguage(savedLanguage)
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
      localStorage.theme = 'light'
    }
  }, [isDarkMode])

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es')
  }

  return (
    <>
      <Navbar 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode}
        language={language}
        toggleLanguage={toggleLanguage}
      />
      <Header isDarkMode={isDarkMode} language={language} />
      <About isDarkMode={isDarkMode} language={language} />
      <Skills isDarkMode={isDarkMode} language={language} />
      <Projects isDarkMode={isDarkMode} language={language} />
      <Contact isDarkMode={isDarkMode} language={language} />
      <Footer isDarkMode={isDarkMode} language={language} />
    </>
  )
}
