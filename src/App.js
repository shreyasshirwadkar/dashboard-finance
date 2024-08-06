import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChartsPage from "./pages/chartsPage";
import HomePage from "./pages/homePage";
import ChatPage from "./pages/chat";
import FilePage from "./pages/filee";
import DomainsPage from "./pages/domains";
import ReportsPage from "./pages/reports";
import Settings from "./pages/settings";
import AdvertisePage from "./pages/advertise";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<ChartsPage />} />
        <Route path="/file" element={<FilePage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/advertise" element={<AdvertisePage />} />
        <Route path="/domains" element={<DomainsPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/settings" element={<Settings />} />

        {/* Add other routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
