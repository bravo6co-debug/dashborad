import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { CalendarDays, ChevronDown } from 'lucide-react';

export function AgentSettlement() {
  const [selectedMonth, setSelectedMonth] = useState('2025년 9월');
  
  const monthlySettlement = {
    deposit: '15,000,000',
    usage: '8,500,000', 
    balance: '6,500,000'
  };

  const dealerDetails = [
    {
      name: '강남대리점',
      deposit: '3,000,000',
      usage: '2,500,000',
      balance: '500,000'
    },
    {
      name: '부산대리점', 
      deposit: '2,500,000',
      usage: '1,800,000',
      balance: '700,000'
    },
    {
      name: '대구대리점',
      deposit: '2,800,000',
      usage: '2,200,000',
      balance: '600,000'
    },
    {
      name: '인천대리점',
      deposit: '2,200,000',
      usage: '1,500,000',
      balance: '700,000'
    },
    {
      name: '광주대리점',
      deposit: '4,500,000',
      usage: '500,000',
      balance: '4,000,000'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl">총판 정산관리</h1>
      </div>

      {/* Month Selection */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-lg">{selectedMonth}</span>
          <Button variant="ghost" size="sm">
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <CalendarDays className="h-4 w-4" />
          <span>DatePicker</span>
        </div>
      </div>

      {/* Monthly Settlement Summary */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="bg-muted">총입금액(누적)</TableHead>
                <TableHead className="bg-muted">사용금액</TableHead>
                <TableHead className="bg-muted">남은금액</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="text-lg">{monthlySettlement.deposit}</TableCell>
                <TableCell className="text-lg">{monthlySettlement.usage}</TableCell>
                <TableCell className="text-lg">{monthlySettlement.balance}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Dealer Details */}
      <div>
        <h2 className="mb-4">대리점별 세부내역</h2>
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="bg-muted w-32">대리점명</TableHead>
                <TableHead className="bg-muted">입금금액</TableHead>
                <TableHead className="bg-muted">사용금액</TableHead>
                <TableHead className="bg-muted">남은금액</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dealerDetails.map((dealer, index) => (
                <TableRow key={index}>
                  <TableCell className="bg-muted/50">{dealer.name}</TableCell>
                  <TableCell>{dealer.deposit}</TableCell>
                  <TableCell>{dealer.usage}</TableCell>
                  <TableCell>{dealer.balance}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
}
