import './App.css';
import HomeView from './views/HomeView';
import ProfileView from './views/ProfileView';
import CareerView from './views/CareerView';
import CompetencesView from './views/CompetencesView';
import ProjectsView from './views/ProjectsView';
import ContactsView from './views/ContactsView';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
        <Router>
          <Routes>
            <Route path='/' element={<HomeView />} />
            <Route path='/home' element={<HomeView />} />
            <Route path='/profile' element={<ProfileView />} />
            <Route path='/career' element={<CareerView />} />
            <Route path='/competences' element={<CompetencesView />} />
            <Route path='/projects' element={<ProjectsView />} />
            <Route path='/contacts' element={<ContactsView />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
