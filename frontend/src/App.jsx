import React from 'react'
import HomePage from './pages/HomePage'
import LoginPage from './pages/Login'
import SignUpPage from './pages/SignUpPage'
import OnboardingPage from './pages/OnboardingPage'
import NotificationPage from './pages/NotificationPage'
import CallPage from './pages/CallPage'
import ChatPage from './pages/ChatPage'
import { Route, Routes } from 'react-router'

const App = () => {
  return (
    <div className='h-screen ' data-theme="night">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/onboarding" element={<OnboardingPage/>} />
        <Route path="/notifications" element={<NotificationPage/>} />
        <Route path="/calls" element={<CallPage/>} />
        <Route path="/chats" element={<ChatPage/>} />
      </Routes>
      <footer className='text-center p-4'>
        <p>&copy; 2023 Streamify. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
