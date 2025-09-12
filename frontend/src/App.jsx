import React from 'react'
import HomePage from './pages/HomePage'
import LoginPage from './pages/Login'
import SignUpPage from './pages/SignUpPage'
import OnboardingPage from './pages/OnboardingPage'
import NotificationPage from './pages/NotificationPage'
import CallPage from './pages/CallPage'
import ChatPage from './pages/ChatPage'
import { Route, Routes } from 'react-router'
import { Toaster, toast } from 'react-hot-toast'

const App = () => {
  return (
    <div className='h-screen ' data-theme="night">
      <button onClick={() => toast.error('Button clicked!')}>Show Toast</button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/onboarding" element={<OnboardingPage/>} />
        <Route path="/notifications" element={<NotificationPage/>} />
        <Route path="/calls" element={<CallPage/>} />
        <Route path="/chats" element={<ChatPage/>} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
