import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { AgentManagement } from './components/AgentManagement';
import { AgentPage } from './components/AgentPage';
import { SettlementManagement } from './components/SettlementManagement';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'agents':
        return <AgentManagement />;
      case 'agent-page':
        return <AgentPage />;
      case 'settlement':
        return <SettlementManagement />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="flex-1 p-8">
        {renderContent()}
      </div>
    </div>
  );
}