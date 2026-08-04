import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Home } from "./pages/Home";
import { Platform } from "./componants/platform/Platform";
import UseCases from "./pages/UseCases";
import Company from "./pages/Company";
import  Resources  from "./pages/Resources";
import Careers from "./pages/Careers";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/use-cases" element={<UseCases />} />
        <Route path="/company" element={<Company />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/careers" element={<Careers />} />
        
      </Route>
    </Routes>
  );
}

export default App;