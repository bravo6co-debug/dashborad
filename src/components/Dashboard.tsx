import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Badge } from './ui/badge';
import { Calendar, Download, BarChart3, Users, TrendingUp, Award, CalendarDays } from 'lucide-react';

export function Dashboard() {
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
    { label: '리워드요청수', value: '520', icon: Users, color: 'text-purple-600' },
    { label: '승인수', value: '492', icon: TrendingUp, color: 'text-blue-600' },
    { label: '승인률', value: '95%', icon: Award, color: 'text-green-600' }
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
    <div className="space-y-6">


      {/* Period Selection */}
      <div className="flex gap-2">
        {periodOptions.map((option) => (
          <Button
            key={option.value}
            variant={selectedPeriod === option.value ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedPeriod(option.value)}
            className="flex flex-col items-center h-auto py-2 px-4"
          >
            <span className="text-sm">{option.label}</span>
            <span className="text-xs opacity-70">{option.date}</span>
          </Button>
        ))}
      </div>

      {/* Campaign Stats */}
      <div>
        <h2 className="mb-4">캠페인 (전일 24시 기준)</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {campaignStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="flex items-center p-4">
                <div className="flex items-center gap-3">
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl">{stat.value}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Housing Stats */}
      <div>
        <h2 className="mb-4">발주 (전일 24시 기준)</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {housingStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="flex items-center p-4">
                <div className="flex items-center gap-3">
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl">{stat.value}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Campaign Report Table */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2>캠페인 별 보고서</h2>
          <Button variant="outline" size="sm">
            검색
          </Button>
        </div>

        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>캠페인명</TableHead>
                <TableHead>시작일</TableHead>
                <TableHead>종료일</TableHead>
                <TableHead>수행률</TableHead>
                <TableHead>상태</TableHead>
                <TableHead>보고서</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {campaigns.map((campaign, index) => (
                <TableRow key={index}>
                  <TableCell>{campaign.name}</TableCell>
                  <TableCell>{campaign.startDate}</TableCell>
                  <TableCell>{campaign.endDate}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span>{campaign.progress}%</span>
                      <div className="w-16 h-2 bg-gray-200 rounded-full">
                        <div 
                          className={`h-full ${campaign.statusColor} rounded-full`}
                          style={{ width: `${campaign.progress}%` }}
                        />
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={campaign.status === '완료' ? 'default' : 'secondary'}>
                      {campaign.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      클릭
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