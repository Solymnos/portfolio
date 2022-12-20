import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import CareerPage from './pages/CareerPage';
import CompentencesPage from './pages/CompetencesPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactsPage from './pages/ContactsPage';
import ErrorPage from './pages/ErrorPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/career' element={<CareerPage />} />
          <Route path='/competences' element={<CompentencesPage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/contacts' element={<ContactsPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
