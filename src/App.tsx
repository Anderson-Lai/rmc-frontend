import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Components/Layout"
import Home from "./Pages/Home"
import Resources from "./Pages/Resources"
import Clubs from "./Pages/Clubs"
import Announcements from "./Pages/Announcements"
import Contact from "./Pages/Contact"

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/resources" element={<Resources />} />
          <Route index path="/clubs" element={<Clubs />} />
          <Route index path="/announcements" element={<Announcements />} />
          <Route index path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}