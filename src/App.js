import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import News from './pages/News'
import Fun from './pages/Fun'
import Stars from './pages/Stars'
import Chronicle from './pages/Chronicle'
import Sport from './pages/Sport'
import Post from './pages/Post'
import Login from './pages/Login'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminPost from './pages/admin/AdminPost'
import AdminUser from './pages/admin/AdminUser'
import AdminUpdate from './pages/admin/AdminUpdate'
import { useAuth } from './shared/hooks/auth-hook'
import { AuthContext } from './shared/context/auth-context'
import './App.css';

function App() {
  const { token, login, logout } = useAuth()

  let routes
  /* ODAVDE */
  if (token) {
    routes = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vijesti" element={<News />} />
        <Route path="/zabava" element={<Fun />} />
        <Route path="/stars" element={<Stars />} />
        <Route path="/hronika" element={<Chronicle />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/add-post" element={<AdminPost />} />
        <Route path="/admin/add-user" element={<AdminUser />} />
        <Route path="/admin/edit-post/:id" element={<AdminUpdate />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    )
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vijesti" element={<News />} />
        <Route path="/zabava" element={<Fun />} />
        <Route path="/stars" element={<Stars />} />
        <Route path="/hronika" element={<Chronicle />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/vijesti/:id" element={<Post />} />
        <Route path="/zabava/:id" element={<Post />} />
        <Route path="/stars/:id" element={<Post />} />
        <Route path="/sport/:id" element={<Post />} />
        <Route path="/hronika/:id" element={<Post />} />
      </Routes>
    )
  }

  return (
    <AuthContext.Provider value={{
      isLoggedIn: !!token,
      token: token,
      login: login,
      logout: logout
    }}>
      <BrowserRouter>
        <Navigation />
        <Container className="main-content">
          {routes}
        </Container>
        <Footer />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
