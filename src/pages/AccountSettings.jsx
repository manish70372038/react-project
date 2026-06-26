import React from 'react';
import './AccountSettings.css';

function AccountSettings() {
  const userName = localStorage.getItem('userName') || 'Marry Doe';
  const userEmail = localStorage.getItem('userEmail') || 'Marry@Gmail.Com';

  return (
    <div className="settings-container">
      <div className="settings-topbar">
        <h2 className="settings-topbar-title">Account Settings</h2>
      </div>

      <div className="settings-card">
        <div className="profile-row">
          <div className="avatar-wrapper">
            <img
              src="https://i.pravatar.cc/80?img=47"
              alt={userName}
              className="avatar-img"
            />
            <div className="camera-icon" aria-label="Change photo">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="profile-info">
            <p className="profile-name">{userName}</p>
            <p className="profile-email">{userEmail}</p>
          </div>
        </div>

        <p className="profile-bio">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
          Erat, Sed Diam
        </p>
      </div>

      <div className="settings-divider" />
    </div>
  );
}

export default AccountSettings;