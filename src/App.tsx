import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Redirect } from 'react-router-dom';
import Navigation from './components/Navigation';
import MenuSection from './components/MenuSection';
import { menuData } from './data/menuData';

function App() {
  return (
    <Router basename="/lona/">
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
            <Route path="*" element={<Redirect to="/" />} /> // این خط اضافه شده
          </Routes>
        </main>
      </div>
    </Router>
  );
}