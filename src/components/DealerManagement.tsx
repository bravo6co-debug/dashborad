import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { FileText, Settings, Edit, Plus } from 'lucide-react';

export function DealerManagement() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newDealer, setNewDealer] = useState({
    name: '',
    id: '',
    password: '',
    commission: '',
    deposit: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setNewDealer(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    // 여기에 새 대리점 생성 로직 추가
    console.log('새 대리점 생성:', newDealer);
    setIsDialogOpen(false);
    setNewDealer({
      name: '',
      id: '',
      password: '',
      commission: '',
      deposit: ''
    });
  };

  const dealers = [
    {
      name: '강남대리점 (A등급)',
      totalAmount: '₩8,000,000',
      settlementAmount: '₩2,800,000',
      balance: '₩5,200,000',
      status: 'active',
      agent: '서울총판'
    },
    {
      name: '부산대리점 (B등급)', 
      totalAmount: '₩5,000,000',
      settlementAmount: '₩1,800,000',
      balance: '₩3,200,000',
      status: 'active',
      agent: '부산총판'
    },
    {
      name: '대구대리점 (C등급)',
      totalAmount: '₩6,500,000',
      settlementAmount: '₩6,000,000',
      balance: '₩500,000',
      status: 'active',
      agent: '대구총판'
    },
    {
      name: '광주대리점 (E등급)',
      totalAmount: '₩12,000,000', 
      settlementAmount: '₩4,000,000',
      balance: '₩8,000,000',
      status: 'inactive',
      agent: '광주총판'
    },
    {
      name: '인천대리점 (A등급)',
      totalAmount: '₩7,500,000', 
      settlementAmount: '₩3,200,000',
      balance: '₩4,300,000',
      status: 'active',
      agent: '서울총판'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl">대리점 관리</h1>
        <Button onClick={() => setIsDialogOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          새 대리점 생성
        </Button>
      </div>

      {/* Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>새 대리점 생성</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    대리점명
                  </Label>
                  <Input
                    id="name"
                    value={newDealer.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="col-span-3"
                    placeholder="예: 강남대리점 (A등급)"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="id" className="text-right">
                    아이디
                  </Label>
                  <Input
                    id="id"
                    value={newDealer.id}
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
                    value={newDealer.password}
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
                    value={newDealer.commission}
                    onChange={(e) => handleInputChange('commission', e.target.value)}
                    className="col-span-3"
                    placeholder="예: ₩1,200"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="deposit" className="text-right">
                    입금액
                  </Label>
                  <Input
                    id="deposit"
                    value={newDealer.deposit}
                    onChange={(e) => handleInputChange('deposit', e.target.value)}
                    className="col-span-3"
                    placeholder="예: ₩8,000,000"
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

      {/* Dealer Table */}
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>대리점명</TableHead>
              <TableHead>소속총판</TableHead>
              <TableHead>총입금액(누적)</TableHead>
              <TableHead>집행된금액</TableHead>
              <TableHead>남은 금액</TableHead>
              <TableHead>관리</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dealers.map((dealer, index) => (
              <TableRow key={index}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span>{dealer.name}</span>
                    <Badge variant={dealer.status === 'active' ? 'default' : 'secondary'}>
                      {dealer.status === 'active' ? '활성' : '정지'}
                    </Badge>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">
                    {dealer.agent}
                  </Badge>
                </TableCell>
                <TableCell>{dealer.totalAmount}</TableCell>
                <TableCell>{dealer.settlementAmount}</TableCell>
                <TableCell>{dealer.balance}</TableCell>
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
                      variant={dealer.status === 'active' ? 'destructive' : 'default'} 
                      size="sm"
                    >
                      {dealer.status === 'active' ? '정지' : '해제'}
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* Additional Management Options */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <h3 className="mb-2">총 대리점 수</h3>
          <p className="text-2xl">{dealers.length}</p>
        </Card>
        <Card className="p-4">
          <h3 className="mb-2">활성 대리점</h3>
          <p className="text-2xl">{dealers.filter(d => d.status === 'active').length}</p>
        </Card>
        <Card className="p-4">
          <h3 className="mb-2">정지된 대리점</h3>
          <p className="text-2xl">{dealers.filter(d => d.status === 'inactive').length}</p>
        </Card>
        <Card className="p-4">
          <h3 className="mb-2">총판별 대리점</h3>
          <p className="text-2xl">{new Set(dealers.map(d => d.agent)).size}</p>
        </Card>
      </div>
    </div>
  );
}
