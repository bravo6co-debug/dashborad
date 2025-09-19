import { useState } from 'react';
import { Button } from './ui/button';
import { BarChart3, Building2, Calculator } from 'lucide-react';
import { AgentDashboard } from './AgentDashboard';
import { DealerManagement } from './DealerManagement';
import { AgentSettlement } from './AgentSettlement';

export function AgentPage() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <AgentDashboard />;
      case 'dealers':
        return <DealerManagement />;
      case 'settlement':
        return <AgentSettlement />;
      default:
        return <AgentDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Agent Sidebar */}
      <div className="w-64 h-screen bg-sidebar border-r border-sidebar-border flex flex-col">
        <div className="p-6 border-b border-sidebar-border">
          <h1 className="text-xl text-sidebar-foreground">총판용 페이지</h1>
          <p className="text-sm text-muted-foreground mt-1">서울총판 (A등급)</p>
        </div>
        
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            <Button
              variant={activeTab === 'dashboard' ? "default" : "ghost"}
              className={`w-full justify-start gap-3 ${
                activeTab === 'dashboard' 
                  ? 'bg-sidebar-primary text-sidebar-primary-foreground' 
                  : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
              }`}
              onClick={() => setActiveTab('dashboard')}
            >
              <BarChart3 className="h-5 w-5" />
              대시보드
            </Button>
            <Button
              variant={activeTab === 'dealers' ? "default" : "ghost"}
              className={`w-full justify-start gap-3 ${
                activeTab === 'dealers' 
                  ? 'bg-sidebar-primary text-sidebar-primary-foreground' 
                  : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
              }`}
              onClick={() => setActiveTab('dealers')}
            >
              <Building2 className="h-5 w-5" />
              대리점관리
            </Button>
            <Button
              variant={activeTab === 'settlement' ? "default" : "ghost"}
              className={`w-full justify-start gap-3 ${
                activeTab === 'settlement' 
                  ? 'bg-sidebar-primary text-sidebar-primary-foreground' 
                  : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
              }`}
              onClick={() => setActiveTab('settlement')}
            >
              <Calculator className="h-5 w-5" />
              정산관리
            </Button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {renderContent()}
      </div>
    </div>
  );
}
