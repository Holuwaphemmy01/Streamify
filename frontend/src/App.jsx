import React from 'react'
import HomePage from './pages/HomePage'
import LoginPage from './pages/Login'
import SignUpPage from './pages/SignUpPage'
import OnboardingPage from './pages/OnboardingPage'
import { Route, Routes } from 'react-router'

const App = () => {
  return (
    <div className='h-screen ' data-theme="night">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/onboarding" element={<OnboardingPage/>} />
      </Routes>
      <h1 className='text-center'>Welcome to Streamify</h1>
    </div>
  )
}

export default App
