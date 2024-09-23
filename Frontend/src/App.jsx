import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import Home from './Pages/Home';

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className="font-sans">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <div className="flex justify-center items-center min-h-screen bg-gray-100">
                  <Home />
                </div>
              }
            />
          </Routes>
        </Router>
      </div>
    </MantineProvider>
  );
};

export default App;
