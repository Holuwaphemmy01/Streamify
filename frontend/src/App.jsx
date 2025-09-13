import React from 'react'
import HomePage from './pages/HomePage'
import LoginPage from './pages/Login'
import SignUpPage from './pages/SignUpPage'
import OnboardingPage from './pages/OnboardingPage'
import NotificationPage from './pages/NotificationPage'
import CallPage from './pages/CallPage'
import ChatPage from './pages/ChatPage'
import { Route, Routes } from 'react-router'
import { Toaster } from 'react-hot-toast'
import { Navigate } from 'react-router'
import PageLoader from './components/PageLoader'
import useAuthUser from './hooks/useAuthUser'
const App = () => {

    
    const {isLoading, authUser}= useAuthUser();

    const isAuthenticated = Boolean(authUser);
    const isOnboarded = authUser?.isOnboarded

    if(isLoading) return <PageLoader/>

  return (
    <div className='h-screen ' data-theme="night">
      <Routes>
        <Route path="/" element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/login" element={!isAuthenticated ? <LoginPage/> : <Navigate to="/" />} />
        <Route path="/signup" element={!isAuthenticated ? <SignUpPage/> : <Navigate to="/" />} />
        <Route path="/onboarding" element={isAuthenticated ? <OnboardingPage/> : <Navigate to="/login" />} />
        <Route path="/notifications" element={isAuthenticated ? <NotificationPage/> : <Navigate to="/login" />} />
        <Route path="/calls" element={isAuthenticated ? <CallPage/> : <Navigate to="/login" />} />
        <Route path="/chats" element={isAuthenticated ? <ChatPage/> : <Navigate to="/login" />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
