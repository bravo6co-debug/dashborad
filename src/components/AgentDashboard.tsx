import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Badge } from './ui/badge';
import { Calendar, Download, BarChart3, Users, TrendingUp, Award, CalendarDays, Search, FileText } from 'lucide-react';

export function AgentDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState('주별');
  const [selectedDate, setSelectedDate] = useState('2024-09-19');

  const periodOptions = [
    { label: '주별', value: '주별', date: '09.13 - 09.19' },
    { label: '월별', value: '월별', date: '09.01 - 09.19' },
    { label: '기간 설정', value: '기간 설정', date: '미설정' }
  ];

  const campaignStats = [
    { label: '활성된 캠페인', value: '204', icon: TrendingUp, color: 'text-green-600' },
    { label: '완료된 캠페인', value: '37', icon: Award, color: 'text-yellow-600' },
    { label: '취소된 캠페인', value: '10', icon: Users, color: 'text-red-600' }
  ];

  const housingStats = [
    { label: '발주건수', value: '700', icon: BarChart3, color: 'text-gray-600' },
    { label: '승인수', value: '492', icon: TrendingUp, color: 'text-blue-600' }
  ];

  const campaigns = [
    {
      name: '2024 여름 프로모션',
      startDate: '2024-06-01', 
      endDate: '2024-08-31',
      progress: 100,
      status: '완료',
      statusColor: 'bg-green-500'
    },
    {
      name: '신제품 런칭 캠페인',
      startDate: '2024-09-01',
      endDate: '2024-09-30', 
      progress: 92,
      status: '진행중',
      statusColor: 'bg-blue-500'
    },
    {
      name: '추석 특별 이벤트',
      startDate: '2024-09-10',
      endDate: '2024-09-20',
      progress: 100, 
      status: '완료',
      statusColor: 'bg-green-500'
    },
    {
      name: '가을 시즌 마케팅',
      startDate: '2024-10-01',
      endDate: '2024-11-30',
      progress: 45,
      status: '진행중', 
      statusColor: 'bg-yellow-500'
    }
  ];

  return (
    <div className="space-y-8">
      {/* 1. 캠페인 섹션 */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">📊 캠페인 (전일 24시 기준)</h2>
          <div className="flex gap-2">
            {periodOptions.map((option) => (
              <Button
                key={option.value}
                variant={selectedPeriod === option.value ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedPeriod(option.value)}
                className="flex flex-col items-center h-auto py-2 px-3"
              >
                <span className="text-xs">{option.label}</span>
                <span className="text-xs opacity-70">{option.date}</span>
              </Button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {campaignStats.map((stat, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="flex items-center p-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full ${stat.color.replace('text-', 'bg-').replace('-600', '-100')}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* 2. 발주 섹션 */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">📦 발주 (전일 24시 기준)</h2>
          <div className="flex gap-2">
            {periodOptions.map((option) => (
              <Button
                key={`housing-${option.value}`}
                variant={selectedPeriod === option.value ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedPeriod(option.value)}
                className="flex flex-col items-center h-auto py-2 px-3"
              >
                <span className="text-xs">{option.label}</span>
                <span className="text-xs opacity-70">{option.date}</span>
              </Button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          {housingStats.map((stat, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="flex items-center p-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full ${stat.color.replace('text-', 'bg-').replace('-600', '-100')}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* 3. 캠페인 별 보고서 섹션 */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">📋 캠페인 별 보고서</h2>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Search className="h-4 w-4 mr-2" />
              검색
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              내보내기
            </Button>
          </div>
        </div>

        <Card className="overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="font-semibold">캠페인명</TableHead>
                <TableHead className="font-semibold">시작일</TableHead>
                <TableHead className="font-semibold">종료일</TableHead>
                <TableHead className="font-semibold">수행률</TableHead>
                <TableHead className="font-semibold">상태</TableHead>
                <TableHead className="font-semibold">보고서</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {campaigns.map((campaign, index) => (
                <TableRow key={index} className="hover:bg-muted/30">
                  <TableCell className="font-medium">{campaign.name}</TableCell>
                  <TableCell className="text-muted-foreground">{campaign.startDate}</TableCell>
                  <TableCell className="text-muted-foreground">{campaign.endDate}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <span className="font-medium">{campaign.progress}%</span>
                      <div className="w-20 h-2 bg-gray-200 rounded-full">
                        <div 
                          className={`h-full ${campaign.statusColor} rounded-full transition-all duration-300`}
                          style={{ width: `${campaign.progress}%` }}
                        />
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant={campaign.status === '완료' ? 'default' : 'secondary'}
                      className={campaign.status === '완료' ? 'bg-green-100 text-green-800' : ''}
                    >
                      {campaign.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                      <FileText className="h-4 w-4 mr-1" />
                      보고서
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
}
