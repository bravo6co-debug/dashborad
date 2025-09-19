import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { CalendarDays, ChevronDown } from 'lucide-react';

export function SettlementManagement() {
  const [selectedMonth, setSelectedMonth] = useState('2025년 9월');
  
  const monthlySettlement = {
    deposit: '2,500,000',
    usage: '1,600,000', 
    balance: '900,000'
  };

  const agentDetails = [
    {
      name: '총판1',
      deposit: '1,000,000',
      usage: '500,000',
      balance: '500,000'
    },
    {
      name: '총판2', 
      deposit: '700,000',
      usage: '400,000',
      balance: '300,000'
    },
    {
      name: '총판3',
      deposit: '800,000',
      usage: '700,000',
      balance: '100,000'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl">정산관리</h1>
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
                <TableHead className="bg-muted">입금금액</TableHead>
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

      {/* Agent Details */}
      <div>
        <h2 className="mb-4">세부내역</h2>
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="bg-muted w-32"></TableHead>
                <TableHead className="bg-muted">입금금액</TableHead>
                <TableHead className="bg-muted">사용금액</TableHead>
                <TableHead className="bg-muted">남은금액</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {agentDetails.map((agent, index) => (
                <TableRow key={index}>
                  <TableCell className="bg-muted/50">{agent.name}</TableCell>
                  <TableCell>{agent.deposit}</TableCell>
                  <TableCell>{agent.usage}</TableCell>
                  <TableCell>{agent.balance}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>


    </div>
  );
}