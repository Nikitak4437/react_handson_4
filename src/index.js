import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationLinks from "./pages/NavigationLinks";
import Home from "./pages/Home";
// import Blogs from "./pages/Student";
// import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Student from "./pages/Student";
import StudentDetails from "./pages/StudentDetails";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavigationLinks />}>
          <Route index element={<Home />} />
          <Route path="student" element={<Student />} />
          <Route path="studentDetails" element={<StudentDetails />} />
          <Route path="nikita" element={<StudentDetails />} />
          {/* <Route path="contact" element={<Contact />} /> */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
