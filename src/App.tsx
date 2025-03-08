import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import MenuSection from './components/MenuSection';
import { menuData } from './data/menuData';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 container mx-auto p-8">
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
    </Router>
  );
}

export default App;