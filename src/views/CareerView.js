import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/CareerView.css'

function CareerView() {
  return (
    <div className='CareerView'>
      <div className='CareerViewText'>
        <h1>Parcours</h1>
      </div>
      <VerticalTimeline animate={true} lineColor={'#D7390A'} className='Timeline'>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(0, 0, 0, 0)', color: '#D7390A', border: '3px solid  #D7390A' , borderRadius: '15px', boxShadow : '0 0 0 0 #fff'}}
          contentArrowStyle={{ borderRight: '7px solid  #D7390A', marginLeft: '7px' }}
          date="2021 - present"
          iconStyle={{ background: '#0c0c0c', color: '#fff', boxShadow : '0 0 0 4px #D7390A, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)' }}>
          <h3 className="vertical-timeline-element-title">Ingénieur Logiciel Fullstack</h3>
          <h4 className="vertical-timeline-element-subtitle">@IIDRE, Bordeaux, France</h4>
          <p className='TimelineElementText'>
            CDI à la suite de 6 mois d'alternance pour le compte de ma dernière année à EPITECH.
          </p>
          <p className='TimelineElementText'>
            Création de logiciels clients destinés à accompagner le matériel de géolocalisation de précision.
          </p>
          <p className='TimelineElementText'>
            Développement sur des technologies multiples avec la création de logiciels androids et webs.
          </p>
          <p className='TimelineElementText'>
            Utilisation des technologies Java, JavaScript, VueJS, Python, Docker, HTML, CSS, Git.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(0, 0, 0, 0)', color: '#D7390A', border: '3px solid  #D7390A' , borderRadius: '15px', boxShadow : '0 0 0 0 #fff'}}
          contentArrowStyle={{ borderRight: '7px solid  #D7390A', marginRight: '7px' }}
          date="2017 - 2022"
          iconStyle={{ background: '#0c0c0c', color: '#fff', boxShadow : '0 0 0 4px #D7390A, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)' }}>
          <h3 className="vertical-timeline-element-title">Diplôme d'Expert en Technologie de l'information</h3>
          <h4 className="vertical-timeline-element-subtitle">@EPITECH, France</h4>
          <p className='TimelineElementText'>
            Formation de 5 ans à EPITECH m'ayant appris les bases du développement sur de multiples technologies.
          </p>
          <p className='TimelineElementText'>
            Projets effectués au cours de la formation aussi bien côté front que côté back, travail en groupe avec méthode agile.
          </p>
          <p className='TimelineElementText'>
            Utilisation des technologies C, C++, JavaScript, React, NodeJS, Python, Docker, Git, Kotlin.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(0, 0, 0, 0)', color: '#D7390A', border: '3px solid  #D7390A' , borderRadius: '15px', boxShadow : '0 0 0 0 #fff'}}
          contentArrowStyle={{ borderRight: '7px solid  #D7390A', marginLeft: '7px' }}
          date="2018 - 2019"
          iconStyle={{ background: '#0c0c0c', color: '#fff', boxShadow : '0 0 0 4px #D7390A, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)' }}>
          <h3 className="vertical-timeline-element-title">Développeur/Assistant Informatique</h3>
          <h4 className="vertical-timeline-element-subtitle">@RESO France, Nantes, France</h4>
          <p className='TimelineElementText'>
            Stage de 6 mois pour le compte de ma première année à EPITECH.
          </p>
          <p className='TimelineElementText'>
            Apprentissage de la technologie WinDev, avant de commencer le développement de logiciels internes à l'entreprise. Intervention également pour effectuer différents dépannages matériels ou réseaux.
          </p>
          <p className='TimelineElementText'>
            Utilisation des technologies C++, Windev.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(0, 0, 0, 0)', color: '#D7390A', border: '3px solid  #D7390A' , borderRadius: '15px', boxShadow : '0 0 0 0 #fff'}}
          contentArrowStyle={{ borderRight: '7px solid  #D7390A', marginRight: '7px' }}
          date="2015 - 2017"
          iconStyle={{ background: '#0c0c0c', color: '#fff', boxShadow : '0 0 0 4px #D7390A, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)' }}>
          <h3 className="vertical-timeline-element-title">DUT Réseaux et Télécommunication</h3>
          <h4 className="vertical-timeline-element-subtitle">@IUT Blois, Blois, France</h4>
          <p className='TimelineElementText'>
            Formation de 2 ans, durant laquelle j'ai pu apprendre les bases du développement, mais surtout le fonctionnement des technologies réseaux.
          </p>
          <p className='TimelineElementText'>
            Formation soutenu par un stage en entreprise.
          </p>
          <p className='TimelineElementText'>
            Utilisation des technologies HTML, CSS, PHP, C++, C.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(0, 0, 0, 0)', color: '#D7390A', border: '3px solid  #D7390A' , borderRadius: '15px', boxShadow : '0 0 0 0 #fff'}}
          contentArrowStyle={{ borderRight: '7px solid  #D7390A', marginLeft: '7px' }}
          date="2017"
          iconStyle={{ background: '#0c0c0c', color: '#fff', boxShadow : '0 0 0 4px #D7390A, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)' }}>
          <h3 className="vertical-timeline-element-title">Assistant Informatique</h3>
          <h4 className="vertical-timeline-element-subtitle">@BMS37, Chambray-lès-Tours, France</h4>
          <p className='TimelineElementText'>
            Stage de 3 mois pour le compte de ma dernière année de DUT Réseaux et Télécommunication à Blois.
          </p>
          <p className='TimelineElementText'>
            Nombreux dépannages chez des clients particuliers et professionnels, refonte du réseau informatique de l'entreprise, développement du site interne de l'entreprise.
          </p>
          <p className='TimelineElementText'>
            Utilisation des technologies HTML, CSS, PHP.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(0, 0, 0, 0)', color: '#D7390A', border: '3px solid  #D7390A' , borderRadius: '15px', boxShadow : '0 0 0 0 #fff'}}
          contentArrowStyle={{ borderRight: '7px solid  #D7390A', marginRight: '7px' }}
          date="2015"
          iconStyle={{ background: '#0c0c0c', color: '#fff', boxShadow : '0 0 0 4px #D7390A, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)' }}>
          <h3 className="vertical-timeline-element-title">Baccalauréat Science de l'Ingénieur</h3>
          <h4 className="vertical-timeline-element-subtitle">@Lycée Saint Gatien, Joué-lès-Tours, France</h4>
          <p className='TimelineElementText'>
            Baccalauréat en Science de l'ingénieur obtenu avec mention.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement iconStyle={{ background: '#0c0c0c', color: '#fff', boxShadow : '0 0 0 4px #D7390A, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)' }}/>
      </VerticalTimeline>
    </div>

  )
}

export default CareerView;