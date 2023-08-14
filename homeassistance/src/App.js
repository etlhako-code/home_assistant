import React from 'react';
//import { FirebaseApp } from 'firebase/app';
import 'firebase/database';
import { useFirebaseDatabase } from 'react-firebase-hooks/database';
import Card from './components/Card';
import { initializeApp } from 'firebase/app';
// Initialize Firebase (configure with your own firebaseConfig)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
const FirebaseApp =initializeApp(firebaseConfig);

const App = () => {
  const [snapshot, loading, error] = useFirebaseDatabase(FirebaseApp.database().ref('rooms'));

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const rooms = snapshot.val();

  return (
    <div className="app container">
      <section className="sh_header_bar">
        <span>{Date.now()}</span>
        <div className="row">
          <div className="col-9">
            <span className="heading">Smart Home</span>
          </div>
        </div>
      </section>
      <div className='row'>
        {Object.keys(rooms).map((roomName) => (
          <Card
            key={roomName}
            roomName={roomName}
            temp={rooms[roomName].temp}
            humidity={rooms[roomName].humidity}
            light={rooms[roomName].light}
            plug={rooms[roomName].plug}
          />
        ))}  
      </div>
    </div>
  );
};

export default App;
