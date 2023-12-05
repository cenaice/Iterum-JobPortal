import "@mantine/core/styles.css";
import { MantineProvider, createTheme } from "@mantine/core";
import { Navbar } from "./components/Navbar";
import { Hero } from "./pages/Hero";
import { FeaturesCards } from "./components/FeaturesCards";
import { JobPortal } from "./pages/JobPortal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProfilePage } from "./pages/ProfilePage";
import { About } from "./pages/About";
import { Footer } from "./components/Footer";

// Define the base theme using createTheme
const baseTheme = createTheme({
  breakpoints: {
    xs: "30em",
    sm: "48em",
    md: "64em",
    lg: "74em",
    xl: "90em",
  },
  // You can add other global theme settings here if needed
});

export default function App() {
  // Extend and customize the base theme
  const theme = {
    ...baseTheme,
    fontFamily: "Verdana, sans-serif",
    fontFamilyMonospace: "Monaco, Courier, monospace",
    headings: { fontFamily: "Greycliff CF, sans-serif" },
  };

  return (
    <>
      <MantineProvider theme={theme}>
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <FeaturesCards />
                  <Footer />
                </>
              }
            />
            <Route path="/jobportal" element={<JobPortal />} />
            <Route path="/profilepage" element={<ProfilePage />} />
            <Route path="/aboutpage" element={<About />} />
          </Routes>
        </Router>
      </MantineProvider>
    </>
  );
}
