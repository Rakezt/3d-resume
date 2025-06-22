
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import FloatingNav from './components/FloatingNav';

const theme = createTheme({
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
  },
  palette: {
    primary: {
      main: '#1A237E',
    },
    secondary: {
      main: '#764ba2',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ position: 'relative' }}>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <FloatingNav />
      </Box>
    </ThemeProvider>
  );
}

export default App;