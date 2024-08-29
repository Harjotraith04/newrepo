// import styled, { ThemeProvider } from "styled-components";
// import { darkTheme } from "./utils/Themes";
// import Navbar from "./components/Navbar";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Hero from "./components/sections/Hero";
// import Skills from "./components/sections/Skills";
// import Experience from "./components/sections/Experience";
// import Education from "./components/sections/Education";
// import StartCanvas from "./components/canvas/Stars";
// import Projects from "./components/sections/Projects";
// import Contact from "./components/sections/Contact";
// import Footer from "./components/sections/Footer";
// import LandingPage from './pages/LandingPage';
// import LoginPage from './pages/LoginPage';
// import AdminApp from './modules/admin/AdminApp';
// import TeacherApp from './modules/teacher/TeacherApp';
// import StudentApp from './modules/student/StudentApp';
// import ImageComparisonSlider from './components/ImageComparisionSlider';

// const Body = styled.div`
//   background-color: ${({ theme }) => theme.bg};
//   width: 100%;
//   overflow-x: hidden;
//   position: relative;
// `;

// const Wrapper = styled.div`
//   padding-bottom: 100px;
//   background: linear-gradient(
//       38.73deg,
//       rgba(204, 0, 187, 0.15) 0%,
//       rgba(201, 32, 184, 0) 50%
//     ),
//     linear-gradient(
//       141.27deg,
//       rgba(0, 70, 209, 0) 50%,
//       rgba(0, 70, 209, 0.15) 100%
//     );
//   width: 100%;
//   clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
// `;

// function App() {
//   return (
//     <ThemeProvider theme={darkTheme}>
//       <BrowserRouter>
//         <Navbar />
//         <Body>
//           <StartCanvas />
//           <Routes>
//             <Route path="/" element={<LandingPage />} />
//             <Route path="/login" element={<LoginPage />} />
//             <Route path="/ImageComparisionSlider/*" element={<ImageComparisonSlider />}/>
//             <Route path="/admin/*" element={<AdminApp />} />
//             <Route path="/teacher/*" element={<TeacherApp />} />
//             <Route path="/student/*" element={<StudentApp />} />
//             {/* Other routes if necessary */}
//           </Routes>
//           <div>
//             <Hero />
//             <Wrapper>
//               <Skills />
//               <Experience />
//             </Wrapper>
//             <Projects />
//             <Wrapper>
//               <Education />
//               <Contact />
//             </Wrapper>
//             <Footer />
//           </div>
//         </Body>
//       </BrowserRouter>
//     </ThemeProvider>
//   );
// }

// export default App;

import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import AdminApp from './modules/admin/AdminApp';
import TeacherApp from './modules/teacher/TeacherApp';
import StudentApp from './modules/student/StudentApp';
import ImageComparisonSlider from './components/ImageComparisionSlider';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar />
      <Body>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/ImageComparisionSlider/*" element={<ImageComparisonSlider />} />
          <Route path="/admin/*" element={<AdminApp />} />
          <Route path="/teacher/*" element={<TeacherApp />} />
          <Route path="/student/*" element={<StudentApp />} />
          {/* Other routes if necessary */}
        </Routes>
      </Body>
    </ThemeProvider>
  );
}

export default App;
