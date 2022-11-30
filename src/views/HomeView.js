import React from 'react';
import TopBanner from '../components/TopBanner';
import BottomBanner from '../components/BottomBanner'

function HomeView() {
  return (
    <div className='HomeView'>
        <TopBanner />
        <div className='LeftPanel'>
            <div className='Content'>
            <div className='Name'>
                CARL AMELINE
            </div>
            <div className='Subtitle'>
                Développeur fullstack, travaillant actuellement à IIDRE, à la recherche de nouvelles opportunités !
            </div>
            </div>
        </div>
        <div className='RightPanel'>
            <div className='Content'>
                <div className='Menu'>
                    <h1>Profil</h1>
                    <h2>01</h2>
                </div>
                <div className='Menu'>
                    <h1>Parcours</h1>
                    <h2>02</h2>
                </div>
                <div className='Menu'>
                    <h1>Compétences</h1>
                    <h2>03</h2>
                </div>
                <div className='Menu'>
                    <h1>Projets</h1>
                    <h2>04</h2>
                </div>
                <div className='Menu'>
                    <h1>Contacts</h1>
                    <h2>05</h2>
                </div>
            </div>
        </div>
        <BottomBanner />
    </div>
  )
}

export default HomeView;