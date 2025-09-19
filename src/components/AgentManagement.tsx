import { Button } from './ui/button';
import { Card } from './ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Badge } from './ui/badge';
import { FileText, Settings, Edit, Plus } from 'lucide-react';

export function AgentManagement() {
  const agents = [
    {
      name: '서울총판 (A등급)',
      commission: '₩1,500',
      totalAmount: '₩10,000,000',
      settlementAmount: '₩3,500,000',
      balance: '₩6,500,000',
      status: 'active'
    },
    {
      name: '부산총판 (B등급)', 
      commission: '₩1,200',
      totalAmount: '₩6,000,000',
      settlementAmount: '₩2,100,000',
      balance: '₩2,900,000',
      status: 'active'
    },
    {
      name: '대구총판 (C등급)',
      commission: '₩1,800', 
      totalAmount: '₩8,000,000',
      settlementAmount: '₩7,500,000',
      balance: '₩500,000',
      status: 'active'
    },
    {
      name: '광주총판 (E등급)',
      commission: '₩2,000',
      totalAmount: '₩15,000,000', 
      settlementAmount: '₩5,000,000',
      balance: '₩10,000,000',
      status: 'inactive'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl">총판 관리</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          새 총판 생성
        </Button>
      </div>

      {/* Agent Table */}
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>총판명</TableHead>
              <TableHead>개별단가</TableHead>
              <TableHead>총입금액(누적)</TableHead>
              <TableHead>집행된금액</TableHead>
              <TableHead>남은 금액</TableHead>
              <TableHead>관리</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {agents.map((agent, index) => (
              <TableRow key={index}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span>{agent.name}</span>
                    <Badge variant={agent.status === 'active' ? 'default' : 'secondary'}>
                      {agent.status === 'active' ? '활성' : '정지'}
                    </Badge>
                  </div>
                </TableCell>
                <TableCell>{agent.commission}</TableCell>
                <TableCell>{agent.totalAmount}</TableCell>
                <TableCell>{agent.settlementAmount}</TableCell>
                <TableCell>{agent.balance}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <FileText className="h-4 w-4 mr-1" />
                      입금
                    </Button>
                    <Button variant="outline" size="sm">
                      <Settings className="h-4 w-4 mr-1" />
                      단가
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4 mr-1" />
                      PW
                    </Button>
                    <Button 
                      variant={agent.status === 'active' ? 'destructive' : 'default'} 
                      size="sm"
                    >
                      {agent.status === 'active' ? '정지' : '해제'}
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* Additional Management Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4">
          <h3 className="mb-2">총 총판 수</h3>
          <p className="text-2xl">{agents.length}</p>
        </Card>
        <Card className="p-4">
          <h3 className="mb-2">활성 총판</h3>
          <p className="text-2xl">{agents.filter(a => a.status === 'active').length}</p>
        </Card>
        <Card className="p-4">
          <h3 className="mb-2">정지된 총판</h3>
          <p className="text-2xl">{agents.filter(a => a.status === 'inactive').length}</p>
        </Card>
      </div>
    </div>
  );
}