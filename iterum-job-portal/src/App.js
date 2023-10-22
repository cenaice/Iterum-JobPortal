import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Navbar } from "./components/Navbar";
import { Hero } from "./pages/Hero";
import { FeaturesCards } from "./components/FeaturesCards";
import { JobPortal } from "./pages/JobPortal";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import necessary routing components
import { ProfilePage } from "./pages/ProfilePage";
import { About } from "./pages/About";

export default function App() {
  return (
    <MantineProvider defaultColorScheme="light">
      <Router>
        <Navbar />
        <div>
          {/* Set up the Routes */}
          <Routes>
            <Route path="/" element={<><Hero /><FeaturesCards /></>} />
            <Route path="/jobportal" element={<JobPortal />} />
            <Route path="/profilepage" element={<ProfilePage />} />
            <Route path="/aboutpage" element={<About />} />
          </Routes>
        </div>
      </Router>
    </MantineProvider>
  );
}

