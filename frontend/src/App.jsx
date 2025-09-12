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
import { axiosInstance } from './lib/axios'
import { useQuery } from '@tanstack/react-query'
import { Navigate } from 'react-router'
const App = () => {

    const {data: authData, isLoading, isError} = useQuery({
    queryKey: ['authUser'],
    queryFn: async () => {
      const response = await axiosInstance.get('/auth/me');
      return response.data;
    },
    retry: false, // Retry once on failure
    })
    const authUser = authData?.user;

  return (
    <div className='h-screen ' data-theme="night">
      <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/login" element={!authUser ? <LoginPage/> : <Navigate to="/" />} />
        <Route path="/signup" element={!authUser ? <SignUpPage/> : <Navigate to="/" />} />
        <Route path="/onboarding" element={authUser ? <OnboardingPage/> : <Navigate to="/login" />} />
        <Route path="/notifications" element={authUser ? <NotificationPage/> : <Navigate to="/login" />} />
        <Route path="/calls" element={authUser ? <CallPage/> : <Navigate to="/login" />} />
        <Route path="/chats" element={authUser ? <ChatPage/> : <Navigate to="/login" />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
