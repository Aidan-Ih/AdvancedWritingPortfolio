
import './App.css';
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";

import Homepage from './Homepage';
import Interview from './Interview';
import HowTo from './HowTo';

function App() {
  return (
    <div>
      <HashRouter>
         <div>
            <Routes>
               <Route path="/" element={<Homepage/>}/>
               <Route path="/Interview" element={<Interview/>}/>
               <Route path="/HowTo" element={<HowTo/>}/>
            </Routes>
         </div>
      </HashRouter>
      
    </div>
  );
}

export default App;
