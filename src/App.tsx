import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Components/Layout"
import Home from "./Pages/Home"
import Resources from "./Pages/Resources"
import Extracurriculars from "./Pages/Extracurriculars"
import Announcements from "./Pages/Announcements"
import Contact from "./Pages/Contact"
import { Analytics } from '@vercel/analytics/react'
import Showreel from "./Pages/Showreel"
// import SmoothScroll from "./Components/SmoothScroll"
import Form from "./Pages/Form"

export default function App() {
  return (
    <BrowserRouter>
      <Analytics />
      {/* <SmoothScroll /> */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/extracurriculars" element={<Extracurriculars />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/showreel" element={<Showreel />} />
          <Route path="/form" element={<Form />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}