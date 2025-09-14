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
import Layout from './components/layout.jsx'
const App = () => {

    
    const {isLoading, authUser}= useAuthUser();

    const isAuthenticated = Boolean(authUser);
    const isOnboarded = authUser?.isOnboarded;

    if(isLoading) return <PageLoader/>

  return (
    <div className='h-screen ' data-theme="forest">
      <Routes>
        <Route path="/" element={isAuthenticated  && isOnboarded ? (
          <Layout showSidebar={true}>
            <HomePage/>
          </Layout>
        ): (
          <Navigate to={!isAuthenticated ? "/login" : "/onboarding"}/>
    )} />
        <Route path="/login" element={!isAuthenticated ? <LoginPage/> : <Navigate to={isOnboarded ? "/" : "/onboarding"} />} />
        <Route path="/signup" element={!isAuthenticated ? <SignUpPage/> : <Navigate to={isOnboarded ? "/" : "/onboarding"} />} />
        <Route path="/notifications" element={isAuthenticated ? <NotificationPage/> : <Navigate to="/login" />} />
        <Route path="/calls" element={isAuthenticated ? <CallPage/> : <Navigate to="/login" />} />
        <Route path="/chats" element={isAuthenticated ? <ChatPage/> : <Navigate to="/login" />} />
        <Route 
          path="/onboarding" 
          element={
           isAuthenticated ? (
            !isOnboarded ? (
              <OnboardingPage/>
            ) : (
              <Navigate to='/'/>
            )
            ) : (
             <Navigate to='/login' />
            )
          } 
          />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
