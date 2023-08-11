To turn the provided code into a React app that uses Firebase to fetch temperature and humidity values and send light states, follow these steps:

1. Set Up Firebase:
   - Go to the Firebase Console (https://console.firebase.google.com/).
   - Create a new project or use an existing one.
   - In your Firebase project, navigate to the "Authentication" section and set up authentication as needed (optional).
   - In the "Database" section, create a Firestore database.
   - In the "Firestore Database" section, create a new collection called "smartHome" (or a name of your choice).

2. Install Dependencies:
   In your project directory, open the terminal and run these commands to install the required dependencies:

   ```bash
   npm install react react-dom firebase
   ```

3. Create Components:
   Create separate components for the header, card, and button as needed. For example, you can create `Header.js`, `Card.js`, and `Button.js` components.

4. Use Firebase in your React App:

   ```jsx
   // Import necessary modules
   import React, { useState, useEffect } from 'react';
   import firebase from 'firebase/app';
   import 'firebase/firestore';
   import Header from './Header';
   import Card from './Card';

   // Initialize Firebase
   const firebaseConfig = {
     // Your Firebase configuration
   };
   firebase.initializeApp(firebaseConfig);

   // Create a reference to the "smartHome" collection
   const db = firebase.firestore().collection('smartHome');

   function App() {
    const title = "Smart Home";
    const Date = DateTime.now;
     const [temperature, setTemperature] = useState('');
     const [humidity, setHumidity] = useState('');

     useEffect(() => {
       // Fetch temperature and humidity values from Firebase
       const fetchValues = async () => {
         const doc = await db.doc('sensors').get();
         const data = doc.data();
         setTemperature(data.temperature);
         setHumidity(data.humidity);
       };
       fetchValues();
     }, []);

     return (
       <div className="container">
         <Header Date={Date} title={title}/>
         <Card temperature={temperature} humidity={humidity} db={db} />
       </div>
     );
   }

   export default App;
   ```

5. Implement Card Component:

   ```jsx
   import React from 'react';
   import Button from './Button';

   function Card({ temperature, humidity, db }) {
     const toggleLight = async (lightIndex, currentState) => {
       // Toggle light state and update in Firebase
       const newState = !currentState;
       await db.doc('lights').update({ [`light${lightIndex}`]: newState });
     };

     return (
       <div className="row">
         {/* ... Card layout and temperature/humidity display ... */}
         <Button label="Light 1" onClick={() => toggleLight(1, light1State)} />
         <Button label="Light 2" onClick={() => toggleLight(2, light2State)} />
         <Button label="Light 3" onClick={() => toggleLight(3, light3State)} />
         <Button label="Light 4" onClick={() => toggleLight(4, light4State)} />
       </div>
     );
   }

   export default Card;
   ```

6. Implement Button Component:

   ```jsx
   import React from 'react';

   function Button({ label, onClick }) {
     return (
       <div className="button-container">
         <button className="btn w-100 btn-info toggle-button" onClick={onClick}>
           <i className="fa fa-lightbulb"></i>
         </button>
         <p className="btn-label w-100">{label}</p>
         <div className="indicator"></div>
       </div>
     );
   }

   export default Button;
   ```

7. Implement Header Component:
   
   ```jsx
   import React from 'react';

   function Header({ Date, title }) {
     return (
       <section className="sh_header_bar">
         <span>{Date}</span>
         <div className="row">
           <div className="col-9">
             <span className="heading">{title}</span>
           </div>
         </div>
       </section>
     );
   }

   export default Header;
   ```

Make sure to replace placeholder data and comments with actual Firebase configuration and data structure details. This is a basic example to get you started, and you can further improve and optimize the code as needed.