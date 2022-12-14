import React, { useState } from 'react';
import '../styles/CompetencesView.css';
import Toolbar from '../components/Toolbar';
import { motion, AnimatePresence } from 'framer-motion';

const competences =
[
  {
    id : 0,
    name : 'C'
  },
  {
    id : 1,
    name : 'C++'
  },
  {
    id : 2,
    name : 'Python'
  },
  {
    id : 3,
    name : 'Javascript'
  },
  {
    id : 4,
    name : 'React'
  },
]

function CompetencesView() {
  const [selectedID, setSelectedID] = useState(null);
  return (
    <div className='CompetencesView'>
      <Toolbar />
      <div className='CompetencesViewTitle'>
        <h1>Compétences</h1>
      </div>
      <div>
      {
        competences.map(competence => (
          <motion.div layoutId={competence.id} onClick={() => setSelectedID(competence.id)}>
            <motion.h1>{competence.name}</motion.h1>
          </motion.div>
        ))
      }
      <AnimatePresence>
        {selectedID && (
          <motion.div layoutId={selectedID}>
            <motion.h1>{competences[selectedID].name}</motion.h1>
            <motion.button onClick={() => setSelectedID(null)} />
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </div>
  )
}

export default CompetencesView;