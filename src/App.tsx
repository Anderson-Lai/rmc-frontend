import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Components/Layout"
import Home from "./Pages/Home"
import Resources from "./Pages/Resources"
import Extracurriculars from "./Pages/Extracurriculars"
import Announcements from "./Pages/Announcements"
import Contact from "./Pages/Contact"
import { Analytics } from '@vercel/analytics/react'

export default function App() {
  return (
    <BrowserRouter>
      <Analytics />
      <Layout>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/resources" element={<Resources />} />
          <Route index path="/extracurriculars" element={<Extracurriculars />} />
          <Route index path="/announcements" element={<Announcements />} />
          <Route index path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}