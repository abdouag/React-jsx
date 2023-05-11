import React from 'react';
import PropTypes from 'prop-types';

// Composant Profile avec des accessoires fullName, bio, profession, children et handleName
const Profile = ({ fullName, bio, profession, children, handleName }) => {
  // Styles en ligne pour le conteneur et le nom
  const inlineStyles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    name: {
      fontSize: '24px',
    },
  };

  // Retourne le composant Profile avec les informations et le bouton
  return (
    <div style={inlineStyles.container}>
      <h1 style={inlineStyles.name}>{fullName}</h1>
      <p>{bio}</p>
      <p>{profession}</p>
      {children}
      <button onClick={() => handleName(fullName)}>Afficher le nom</button>
    </div>
  );
};

// Définition des accessoires par défaut pour le composant Profile
Profile.defaultProps = {
  fullName: 'Nom par défaut',
  bio: 'Biographie par défaut',
  profession: 'Profession par défaut',
};

// Vérification des types d'accessoires avec PropTypes
Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  children: PropTypes.element,
  handleName: PropTypes.func.isRequired,
};

export default Profile;
