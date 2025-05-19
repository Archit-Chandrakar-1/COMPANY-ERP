import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import AccessControl from './pages/AccessControl';
import HomePage from './pages/HomePage';
import InHouseServices from './pages/InHouseServices';

// Placeholder components for other pages
const Clients = () => <div className="p-4">Client Management Page</div>;
const Contractors = () => <div className="p-4">Contractors & Workers Page</div>;
const Materials = () => <div className="p-4">Materials & Inventory Page</div>;
const Equipment = () => <div className="p-4">Equipment Management Page</div>;
const Quotations = () => <div className="p-4">Quotations & Billing Page</div>;
const Permits = () => <div className="p-4">Permits & Compliance Page</div>;
const Reports = () => <div className="p-4">Reports & Analytics Page</div>;
const Settings = () => <div className="p-4">Admin & System Management Page</div>;

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<InHouseServices />} />
      <Route path="/construction/*" element={<AppLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="projects" element={<Projects />} />
        <Route path="clients" element={<Clients />} />
        <Route path="contractors" element={<Contractors />} />
        <Route path="materials" element={<Materials />} />
        <Route path="equipment" element={<Equipment />} />
        <Route path="quotations" element={<Quotations />} />
        <Route path="permits" element={<Permits />} />
        <Route path="reports" element={<Reports />} />
        <Route path="access" element={<AccessControl />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/construction" replace />} />
      </Route>
    </Routes>
  );
}

export default App;