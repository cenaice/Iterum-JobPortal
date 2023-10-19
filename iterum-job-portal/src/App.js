
import "./App.css";
import "@mantine/core/styles.css";
import { MantineProvider, createTheme } from "@mantine/core";
import { Navbar } from "./components/Navbar";
import { Hero } from "./pages/Hero";
import { FeaturesCards } from "./components/FeaturesCards";
import { JobPortal } from "./pages/JobPortal";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import necessary routing components

const darkTheme = createTheme({
  colorScheme: "dark",
  // Customize other theme properties here
});

export default function App() {
  return (
    <MantineProvider theme={{ colorScheme: "dark" }} withGlobalStyles withNormalizeCSS>
      <Router>
        <Navbar />
        <div>
          {/* Set up the Routes */}
          <Routes>
            <Route path="/" element={<><Hero /><FeaturesCards /></>} />
            <Route path="/jobportal" element={<JobPortal />} />
          </Routes>
        </div>
      </Router>
    </MantineProvider>
  );
}

