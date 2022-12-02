import React from 'react';
import ListLogo from '../components/ListLogo';

function HomeView() {
  return (
    <div className='HomeView'>
        <div className='LeftPanel'>
            <div className='Content'>
            <div className='Name'>
                CARL AMELINE
            </div>
            <div className='Subtitle'>
                Développeur fullstack, travaillant actuellement chez IIDRE, à la recherche de nouvelles opportunités !
            </div>
            </div>
        </div>
        <div className='RightPanel'>
            <div className='Content'>
                <a href='/profile'>
                    <div className='MenuPoint'>
                        <h1>Profil</h1>
                        <h2>01</h2>
                    </div>
                </a>
                <a href='/career'>
                    <div className='MenuPoint'>
                        <h1>Parcour</h1>
                        <h2>02</h2>
                    </div>
                </a>
                <a href='/competences'>
                    <div className='MenuPoint'>
                        <h1>Compétences</h1>
                        <h2>03</h2>
                    </div>
                </a>
                <a href='/projects'>
                    <div className='MenuPoint'>
                        <h1>Projets</h1>
                        <h2>04</h2>
                    </div>
                </a>
                <a href='/contacts'>
                    <div className='MenuPoint'>
                        <h1>Contacts</h1>
                        <h2>05</h2>
                    </div>
                </a>
            </div>
        </div>
        <ListLogo />
    </div>
  )
}

export default HomeView;