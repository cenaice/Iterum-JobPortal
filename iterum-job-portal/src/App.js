import "./App.css";
// core styles are required for all packages
import "@mantine/core/styles.css";
import { MantineProvider, createTheme } from "@mantine/core";
import { Navbar } from "./components/Navbar";
import { Hero } from "./pages/Hero";
import { FeaturesCards } from "./components/FeaturesCards";

const darkTheme = createTheme({
  colorScheme: "dark",
  // Customize other theme properties here
});

export default function App() {
  return (
    <MantineProvider
      theme={{ colorScheme: "dark" }}
      withGlobalStyles
      withNormalizeCSS
    >
      <Navbar />
      <div>
        <Hero />
        <FeaturesCards />
      </div>
    </MantineProvider>
  );
}
