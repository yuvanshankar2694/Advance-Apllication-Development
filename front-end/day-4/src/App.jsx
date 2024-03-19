import 'bootstrap/dist/css/bootstrap.min.css'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Welcome from './pages/Welcome'
// import Home from './pages/Home'
// import Classes from './pages/Classes'
// import Login from './pages/Login'
import SignupPage from './pages/SignupPage'
import Poses from './pages/Poses'
import Dashboardcontent from './pages/admin/Dashboardcontent'
import Users from './pages/admin/Users'
import AdminClass from './pages/admin/AdminClass'
import PaymentBilling from './pages/admin/PaymentBilling'
import { Suspense, lazy } from 'react'
import Loader from './components/Loader'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About.jsx'
import Blog from './pages/Blog.jsx'
import Contact from './pages/Contact.jsx'
// import Classesadmin from './pages/admin/classesadmin'
// lazy loaders
const Welcome = lazy(() => import('./pages/Welcome.jsx'))
const Home = lazy(() => import('./pages/Home.jsx'))
const Classes = lazy(() => import('./pages/Classes.jsx'))
const Login = lazy(() => import('./pages/Login.jsx'))
function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/schedule" element={<Poses />} />
            <Route path="/dashboard" element={<Dashboardcontent />} />
            <Route path="/users" element={<Users />} />
            <Route path="/adminclasses" element={<AdminClass />} />
            <Route path="/payment&billing" element={<PaymentBilling />} />
            <Route path="/about" element={<About/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
