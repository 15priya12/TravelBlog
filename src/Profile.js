import React from 'react';

const Profile = ({ profile, onProfileClick }) => {
  const handleClick = () => {
    onProfileClick(profile);
  };

  return (
    <div className="profile" onClick={handleClick}>
      <img src={profile.imageUrl} alt={profile.name}
             style={{
                         width: "100px",
                         height:"80px",
                         borderRadius: "50%",
                         objectFit: "cover",
                         }}
            />
      <p>{profile.name}</p>
    </div>
  );
};

export default Profile;


