import React from 'react';
import TopBanner from '../components/TopBanner';
import BottomBanner from '../components/BottomBanner'

function HomeView() {
  return (
    <div className='HomeView'>
        <TopBanner />
        <div className='LeftPart'>
            <div className='Content'>
                <div className='Name'>
                    CARL AMELINE
                </div>
                <div className='Subtitle'>Développeur fullstack, travaillant actuellement à IIDRE, à la recherche de nouvelles opportunités !
                </div>
            </div>   
        </div>
        <div className='RightPart'>
            <div className='Content'>
                <div>
                    Profil
                </div>
                <div>
                    Parcours
                </div>
                <div>
                    Compétences
                </div>
                <div>
                    Projets
                </div>
                <div>
                    Contacts
                </div>
            </div>
        </div>
        <BottomBanner />
    </div>
  )
}

export default HomeView;