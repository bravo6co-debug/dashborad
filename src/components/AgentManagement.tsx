import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { FileText, Settings, Edit, Plus } from 'lucide-react';

export function AgentManagement() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newAgent, setNewAgent] = useState({
    name: '',
    id: '',
    password: '',
    commission: '',
    deposit: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setNewAgent(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    // 여기에 새 총판 생성 로직 추가
    console.log('새 총판 생성:', newAgent);
    setIsDialogOpen(false);
    setNewAgent({
      name: '',
      id: '',
      password: '',
      commission: '',
      deposit: ''
    });
  };

  const agents = [
    {
      name: '서울총판',
      commission: '₩1,500',
      totalAmount: '₩10,000,000',
      settlementAmount: '₩3,500,000',
      balance: '₩6,500,000',
      status: 'active'
    },
    {
      name: '부산총판', 
      commission: '₩1,200',
      totalAmount: '₩6,000,000',
      settlementAmount: '₩2,100,000',
      balance: '₩2,900,000',
      status: 'active'
    },
    {
      name: '대구총판',
      commission: '₩1,800', 
      totalAmount: '₩8,000,000',
      settlementAmount: '₩7,500,000',
      balance: '₩500,000',
      status: 'active'
    },
    {
      name: '광주총판',
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
        <Button onClick={() => setIsDialogOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          새 총판 생성
        </Button>
      </div>

      {/* Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>새 총판 생성</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    총판명
                  </Label>
                  <Input
                    id="name"
                    value={newAgent.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="col-span-3"
                    placeholder="예: 서울총판 (A등급)"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="id" className="text-right">
                    아이디
                  </Label>
                  <Input
                    id="id"
                    value={newAgent.id}
                    onChange={(e) => handleInputChange('id', e.target.value)}
                    className="col-span-3"
                    placeholder="아이디를 입력하세요"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="password" className="text-right">
                    패스워드
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    value={newAgent.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className="col-span-3"
                    placeholder="패스워드를 입력하세요"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="commission" className="text-right">
                    단가
                  </Label>
                  <Input
                    id="commission"
                    value={newAgent.commission}
                    onChange={(e) => handleInputChange('commission', e.target.value)}
                    className="col-span-3"
                    placeholder="예: ₩1,500"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="deposit" className="text-right">
                    입금액
                  </Label>
                  <Input
                    id="deposit"
                    value={newAgent.deposit}
                    onChange={(e) => handleInputChange('deposit', e.target.value)}
                    className="col-span-3"
                    placeholder="예: ₩10,000,000"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  취소
                </Button>
                <Button onClick={handleSubmit}>
                  생성
                </Button>
              </div>
            </DialogContent>
      </Dialog>

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
                  <span>{agent.name}</span>
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