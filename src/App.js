import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LandingPage from './pages/landingpage';

const theme = createTheme({
  typography: {
    fontFamily: 'DM sans, sans-serif',
  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#0046E6',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      // light: will be calculated from palette.primary.main,
      main: '#FFFFFF',
      // dark: will be calculated from palette.primary.main,
      contrastText:  '#0046E6',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <LandingPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
