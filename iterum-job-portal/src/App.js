import "@mantine/core/styles.css";
import { Button, Code, Title, MantineProvider } from "@mantine/core";
import { Navbar } from "./components/Navbar";
import { Hero } from "./pages/Hero";
import { FeaturesCards } from "./components/FeaturesCards";
import { JobPortal } from "./pages/JobPortal";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProfilePage } from "./pages/ProfilePage";
import { About } from "./pages/About";
import { Footer } from "./components/Footer";


export default function App() {
  return (
    <>
      <MantineProvider
        theme={{
          fontFamily: 'Verdana, sans-serif',
          fontFamilyMonospace: 'Monaco, Courier, monospace',
          headings: { fontFamily: 'Greycliff CF, sans-serif' },
        }}
      >
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<><Hero /><FeaturesCards /><Footer /></>} />
            <Route path="/jobportal" element={<JobPortal />} />
            <Route path="/profilepage" element={<ProfilePage />} />
            <Route path="/aboutpage" element={<About />} />
          </Routes>
        </Router>

      </MantineProvider>
    </>
  );
}

