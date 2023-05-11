import React from 'react';
import Profile from './profile/Profile';

function App() {
  // Fonction handleName pour afficher une alerte avec le nom de l'utilisateur
  const handleName = (name) => {
    alert(`Nom de l'utilisateur du profil : ${name}`);
  };

  return (
    <div className="App">
      <Profile
        fullName="Abdou Aziz Gueye"
        bio="Développeur web full-stack"
        profession="Ingénieur logiciel"
        handleName={handleName}
      >
        {
          // Insérez l'image en tant qu'enfant du composant Profile
          // Ajoutez des styles à l'image pour la border-radius et un box-shadow
        }
        <img
          src="https://img.freepik.com/photos-gratuite/portrait-personne-noire-americaine-levant_23-2148749586.jpg?w=1380&t=st=1683806079~exp=1683806679~hmac=e893eac895baa5cbc95b32e8fda2179ba1527b271e7ff192b566fe6d12de2269"
          alt="Profil"
          width="150"
          height="150"
          style={{
            borderRadius: '50%',
            boxShadow: '0 0 5px 2px rgba(0, 0, 0, 0.2)',
          }}
        />
      </Profile>
    </div>
  );
}

export default App;
