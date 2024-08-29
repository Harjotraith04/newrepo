// // src/pages/LandingPage.jsx
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import ImageComparisonSlider from '../components/ImageComparisionSlider'; // Import the slider component
// import Spline from '@splinetool/react-spline';
// import Navbar from '../components/Navbar'; // Import the Navbar component

// function LandingPage() {
//   const navigate = useNavigate();

//   // Set up a state variable to hold the text
//   const [dynamicText, setDynamicText] = useState('Welcome to our website!');

//   // Create an array of texts to cycle through
//   const textArray = [
//     'Welcome to our website!',
//     'Explore our features!',
//     'Thanks for visiting!',
//     'Join us today!',
//   ];

//   useEffect(() => {
//     let index = 0;

//     // Set up an interval to change the text every few seconds
//     const intervalId = setInterval(() => {
//       index = (index + 1) % textArray.length;
//       setDynamicText(textArray[index]);
//     }, 1500); // Change text every 1.5 seconds

//     // Cleanup interval on component unmount
//     return () => clearInterval(intervalId);
//   }, []);

//   const handleLoginRedirect = () => {
//     navigate('/login');
//   };

//   return (
//     <div className="pt-16"> {/* Adjust padding to fit the height of the navbar */}
//       <Navbar /> {/* Include the Navbar here */}

//       <main className="content pt-4">
//         {/* Display the dynamic text */}
//         <h1>{dynamicText}</h1>

//         <button className='login-button mt-4' onClick={handleLoginRedirect}>
//           Login
//         </button>

//         {/* Render 3D Models */}
//         <div className='model-container'>
//           <div className='model model-first'>
//             <Spline scene="https://prod.spline.design/cBmeM9BUBHAK7sFL/scene.splinecode" />
//           </div>
//           <div className='model model-second'>
//             <Spline scene="https://prod.spline.design/36hIVXKxxsjaYE6i/scene.splinecode" />
//           </div>
//         </div>

//         <ImageComparisonSlider />
//       </main>

//       <footer className="footer mt-4">
//         {/* Footer content */}
//       </footer>
//     </div>
//   );
// }

// export default LandingPage;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageComparisonSlider from '../components/ImageComparisionSlider'; // Import the slider component
import Spline from '@splinetool/react-spline';
import Navbar from '../components/Navbar'; // Import the Navbar component

function LandingPage() {
  const navigate = useNavigate();

  // Set up a state variable to hold the text
  const [dynamicText, setDynamicText] = useState('Welcome to our website!');

  // Create an array of texts to cycle through
  const textArray = [
    'Welcome to our website!',
    'Explore our features!',
    'Thanks for visiting!',
    'Join us today!',
  ];

  useEffect(() => {
    let index = 0;

    // Set up an interval to change the text every few seconds
    const intervalId = setInterval(() => {
      index = (index + 1) % textArray.length;
      setDynamicText(textArray[index]);
    }, 1500); // Change text every 1.5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div className="pt-16"> {/* Adjust padding to fit the height of the navbar */}
      <Navbar /> {/* Include the Navbar here */}

      <main className="content pt-4">
        {/* Display the dynamic text */}
        <h1>{dynamicText}</h1>

        <button className='login-button mt-4' onClick={handleLoginRedirect}>
          Login
        </button>

        {/* Render 3D Models */}
        <div className='model-container'>
          <div className='model model-first'>
            <Spline scene="https://prod.spline.design/cBmeM9BUBHAK7sFL/scene.splinecode" />
          </div>
          <div className='model model-second'>
            <Spline scene="https://prod.spline.design/36hIVXKxxsjaYE6i/scene.splinecode" />
          </div>
        </div>

        <ImageComparisonSlider />
      </main>

      <footer className="footer mt-4">
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default LandingPage;
