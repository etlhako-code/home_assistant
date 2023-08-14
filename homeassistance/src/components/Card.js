import React from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

const Card = ({ roomName, temp, humidity, light, plug }) => {
  const handleToggleLight = () => {
    // Update the light field in Firebase database
    firebase.database().ref(`rooms/${roomName}/light`).set(!light);
  };

  const handleTogglePlug = () => {
    // Update the plug field in Firebase database
    firebase.database().ref(`rooms/${roomName}/plug`).set(!plug);
  };

  return (
    <div className='col-md-6 col-lg-3 mb-4'>
        <div className="room-card card">
            <div className="card-header">
                <h5 className="card-title">{roomName}</h5>
            </div>
            <div className="card-body">
                <div class="btn-grid">
                    <div className="button-container">
                        <button className="btn w-100 btn-info" onClick={handleToggleLight}>{light ? 'Turn Off Light' : 'Turn On Light'}</button>
                        <p className="btn-label w-100">light</p>
                        <div className="indicator"></div>
                    </div>
                    <div className="button-container">
                        <button className="btn w-100 btn-info" onClick={handleTogglePlug}>{plug ? 'Turn off Plug' : 'Turn off Plug'}</button>
                        <p className="btn-label w-100">light</p>
                        <div className="indicator"></div>
                    </div>
                    <div className="values">
                        <p>Temperature: {temp}°C</p>
                        <p>Humidity: {humidity}%</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Card;
