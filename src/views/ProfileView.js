import React from 'react'
import '../styles/ProfileView.css';
import pixelpp from '../assets/img/pixelpp.png'
function ProfileView() {
  return (
    <div className='ProfileView'>
        <div className='ProfileViewText'>
            <h1>Profil</h1>
          <div className='ProfileText'>
            <img className='ProfilePixelImg' src={pixelpp} alt='pppixel'></img>
            <p>Développeur passionné par les jeux vidéo et l'esport, j'ai acquis une solide expérience dans la création de jeux et d'applications interactives. Doté d'un esprit créatif et d'un sens aigu de la logique, je suis capable de concevoir et de mettre en œuvre des solutions innovantes pour des projets complexes.</p>
            <p>En plus de mes compétences en développement, j'ai également une bonne connaissance des technologies et des outils utilisés dans l'industrie du jeu vidéo et de l'esport. Je suis capable de travailler en équipe et de respecter les délais impartis.</p>
            <p>Mes principaux domaines d'expertise sont le développement de jeux en 2D et en 3D, la création d'applications en réalité virtuelle et augmentée, ainsi que le développement de systèmes de gestion pour les compétitions d'esport. Je suis également familier avec les différents moteurs de jeu et les outils de développement, tels que Unity, Unreal Engine, et les différents langages de programmation tels que C++, C# et Java.</p>
            <p>En résumé, je suis un développeur talentueux et motivé, passionné par les jeux vidéo et l'esport, et je suis prêt à mettre mes compétences au service de projets passionnants dans ces domaines</p> 
          </div>
        </div>
    </div>
  )
}

export default ProfileView;