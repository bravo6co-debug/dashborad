import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { CalendarDays, ChevronDown, Plus } from 'lucide-react';

export function AgentSettlement() {
  const [selectedMonth, setSelectedMonth] = useState('2025년 9월');
  
  const balanceStatus = {
    companyDeposit: '10,000,000',
    dealerCharge: '7,500,000',
    availableBalance: '2,500,000'
  };

  const dealerChargeDetails = [
    {
      name: 'A마트',
      totalCharge: '3,000,000',
      campaignUsage: '1,800,000',
      currentBalance: '1,200,000',
      lastChargeDate: '2024.01.15 14:30'
    },
    {
      name: 'B스토어',
      totalCharge: '2,500,000',
      campaignUsage: '2,000,000',
      currentBalance: '500,000',
      lastChargeDate: '2024.01.14 09:20'
    },
    {
      name: 'C샵',
      totalCharge: '2,000,000',
      campaignUsage: '1,700,000',
      currentBalance: '300,000',
      lastChargeDate: '2024.01.13 16:45'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl">총판 정산관리</h1>
      </div>


      {/* 총판 잔액 현황 */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl">💰 총판 잔액 현황</h2>
          <div className="flex items-center gap-2">
            <span className="text-lg">{selectedMonth}</span>
            <Button variant="ghost" size="sm">
              <ChevronDown className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CalendarDays className="h-4 w-4" />
              <span>DatePicker</span>
            </div>
          </div>
        </div>
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="bg-muted">본사 입금 총액</TableHead>
                <TableHead className="bg-muted">대리점 충전 총액</TableHead>
                <TableHead className="bg-muted">충전 가능 잔액</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="text-lg font-semibold">₩{balanceStatus.companyDeposit}</TableCell>
                <TableCell className="text-lg font-semibold">₩{balanceStatus.dealerCharge}</TableCell>
                <TableCell className="text-lg font-semibold text-blue-600">₩{balanceStatus.availableBalance}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>

      {/* 대리점 충전 현황 */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl">대리점 충전 현황</h2>
        </div>
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="bg-muted w-32">대리점명</TableHead>
                <TableHead className="bg-muted">충전금액</TableHead>
                <TableHead className="bg-muted">캠페인사용금액</TableHead>
                <TableHead className="bg-muted">현재 잔액</TableHead>
                <TableHead className="bg-muted">최근 충전일</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dealerChargeDetails.map((dealer, index) => (
                <TableRow key={index}>
                  <TableCell className="bg-muted/50 font-medium">{dealer.name}</TableCell>
                  <TableCell className="font-semibold">₩{dealer.totalCharge}</TableCell>
                  <TableCell className="text-red-600">₩{dealer.campaignUsage}</TableCell>
                  <TableCell className="text-green-600 font-semibold">₩{dealer.currentBalance}</TableCell>
                  <TableCell className="text-muted-foreground">{dealer.lastChargeDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
}
