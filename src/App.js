import './App.css';
import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
  <div className="App">
    <Navbar title="NewsChimp"/>
    <Routes>
      <Route key="home" path="/" element={<NewsComponent key="home" country="us" category="general" />} />
      <Route key="business" path="/business" element={<NewsComponent key="business" country="us" category="business" />} />
      <Route key="entertainment" path="/entertainment" element={<NewsComponent key="entertainment" country="us" category="entertainment" />} />
      <Route key="general" path="/general" element={<NewsComponent key="general" country="us" category="general" />} />
      <Route key="health" path="/health" element={<NewsComponent key="health" country="us" category="health" />} />
      <Route key="science" path="/science" element={<NewsComponent key="science" country="us" category="science" />} />
      <Route key="sports" path="/sports" element={<NewsComponent key="sports" country="us" category="sports" />} />
      <Route key="technology" path="/technology" element={<NewsComponent key="technology" country="us" category="technology" />} />
    </Routes>
  </div>
</Router>
  );
}

export default App;


// <Router>
//       <Navbar title="TextEditX" about="About Us" service="Services" />
//       <div className="container my-3">
//           <Routes>
//             <Route path='/about' element={<About/>} />
//             <Route path='/services' element={<Services/>} />
//             {/* <Route path='/home' element={<TextUtils/> } /> */}
//           </Routes>
        
//       </div>
//       </Router>
