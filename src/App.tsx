import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import MenuSection from './components/MenuSection';
import { menuData } from './data/menuData';

function App() {
  return (
    <Router>
      <>
        <div className="layout">
          <Navigation />
          <main className="main">
            <Routes>
              <Route path="/" element={<Navigate to="/sandwich" replace />} />
              {Object.entries(menuData).map(([category]) => (
                <Route
                  key={category}
                  path={`/${category}`}
                  element={<MenuSection category={category} />}
                />
              ))}
            </Routes>
          </main>
        </div>
      </>
    </Router>
  );
}

export default App;