import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Blog from './pages/blog/Blog'
import BlogDetails from './pages/blog/BlogDetails'
import Contact from './pages/contact/Contact'
import BookAppointment from './pages/appointment/BookAppointment'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-900 scroll-smooth">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<BookAppointment />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
