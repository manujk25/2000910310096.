import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AllTrainsPage from './components/AllTrainsPage';
import SingleTrainPage from './components/SingleTrainPage';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  CssBaseline,
  createTheme,
  ThemeProvider,
  Paper,
} from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Trains Schedule App
            </Typography>
            <nav>
              <ul style={{ display: 'flex', listStyle: 'none' }}>
                <li style={{ margin: '0 1rem' }}>
                  <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                    All Trains
                  </Link>
                </li>
                {/* Add more navigation links as needed */}
              </ul>
            </nav>
          </Toolbar>
        </AppBar>
        <Container component="main" maxWidth="md" sx={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          <Paper elevation={3} sx={{ padding: '1rem' }}>
            <Switch>
              <Route exact path="/">
                <AllTrainsPage />
              </Route>
              <Route path="/train/:trainId">
                <SingleTrainPage />
              </Route>
              {/* Add more routes as needed */}
            </Switch>
          </Paper>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
