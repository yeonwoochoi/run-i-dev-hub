'use client';

import React from 'react';

// --- ICONS ---
// We'll keep the icons as they are useful for different sections.
// Additionally, new icons for the dashboard-sample interface are added.

const LayoutDashboardIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="7" height="9" x="3" y="3" rx="1" />
    <rect width="7" height="5" x="14" y="3" rx="1" />
    <rect width="7" height="9" x="14" y="12" rx="1" />
    <rect width="7" height="5" x="3" y="16" rx="1" />
  </svg>
);
const CubeIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);
const SwordsIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
    <line x1="13" y1="19" x2="19" y2="13" />
    <line x1="16" y1="16" x2="20" y2="20" />
    <line x1="19" y1="21" x2="21" y2="19" />
    <polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5" />
  </svg>
);
const DicesIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <path d="M16 8h.01" />
    <path d="M12 12h.01" />
    <path d="M8 16h.01" />
    <path d="M8 8h.01" />
    <path d="M16 16h.01" />
  </svg>
);
const HammerIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m15 12-8.373 8.373a1 1 0 1 1-1.414-1.414L12.586 12l-1.414-1.414a1 1 0 1 1 1.414-1.414L21 12" />
    <path d="M9.5 2.5 12 5l-2.5 2.5L7 5l2.5-2.5" />
    <path d="m14 7 3-3" />
    <path d="M5 21 3 19" />
    <path d="m21 5-3 3" />
  </svg>
);
const UsersIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const FileTextIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </svg>
);

// --- MOCK DATA ---
const summaryStats = [
  {
    title: '총 에셋',
    value: '1428',
    change: '+2.5%',
    changeType: 'increase',
    icon: <CubeIcon className="h-6 w-6 text-indigo-400" />,
  },
  {
    title: '오늘 실행된 시뮬레이션',
    value: '56',
    change: '+10.2%',
    changeType: 'increase',
    icon: <SwordsIcon className="h-6 w-6 text-rose-400" />,
  },
  {
    title: '총 퀘스트',
    value: '72',
    change: '+3',
    changeType: 'increase',
    icon: <FileTextIcon className="h-6 w-6 text-cyan-400" />,
  },
  {
    title: '팀 멤버',
    value: '4',
    change: '+0',
    changeType: 'neutral',
    icon: <UsersIcon className="h-6 w-6 text-emerald-400" />,
  },
];

const assetDistributionData = {
  labels: [
    'Buffs',
    'Enemies',
    'Items',
    'Maps',
    'Npc',
    'Quests',
    'Set Items',
    'Skills',
  ],
  values: [1, 15, 55, 4, 8, 9, 6, 2],
  colors: [
    'bg-indigo-500', // Buffs
    'bg-sky-500', // Enemies
    'bg-emerald-500', // Items
    'bg-rose-500', // Maps
    'bg-indigo-500', // Npc
    'bg-sky-500', // Quests
    'bg-emerald-500', // Set Items
    'bg-rose-500', // Skills
  ],
};

const recentActivities = [
  // Asset Studio - 이해린
  {
    user: '이해린',
    action: "아이템 '해모수의 용광의 칼' 업데이트",
    time: new Date('2024-02-28T01:10:00Z'),
    lab: 'Asset Studio',
  },
  {
    user: '이해린',
    action: "아이템 '대소의 도륙칼' 업데이트",
    time: new Date('2024-02-28T01:15:00Z'),
    lab: 'Asset Studio',
  },
  {
    user: '이해린',
    action: "아이템 '고무서의 면류관' 추가",
    time: new Date('2024-02-28T01:18:00Z'),
    lab: 'Asset Studio',
  },
  {
    user: '이해린',
    action: "아이템 '대음의 용갑옷' 추가",
    time: new Date('2024-02-28T01:25:00Z'),
    lab: 'Asset Studio',
  },
  {
    user: '이해린',
    action: "아이템 '내휴의 청동치마' 추가",
    time: new Date('2024-02-28T01:30:00Z'),
    lab: 'Asset Studio',
  },

  // Loot Lab - 김성준
  {
    user: '김성준',
    action: "'호 최고위 수적1' 드랍 시뮬레이션",
    time: new Date('2024-02-28T01:35:00Z'),
    lab: 'Loot Lab',
  },
  {
    user: '김성준',
    action: "'호 중간 수적1' 드랍 시뮬레이션",
    time: new Date('2024-02-27T03:14:00Z'),
    lab: 'Loot Lab',
  },
  {
    user: '김성준',
    action: "'호 중간 수적1' 드랍 시뮬레이션",
    time: new Date('2024-02-27T03:13:00Z'),
    lab: 'Loot Lab',
  },
  {
    user: '김성준',
    action: "'호 중간 수적1' 드랍 시뮬레이션",
    time: new Date('2024-02-27T03:12:00Z'),
    lab: 'Loot Lab',
  },
];

// --- DASHBOARD PAGE COMPONENT ---
export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-900 font-sans text-gray-300">
      {/* Sidebar */}
      <aside className="flex w-64 flex-shrink-0 flex-col border-r border-gray-700/50 bg-gray-800">
        <div className="flex h-16 items-center justify-center border-b border-gray-700/50">
          <h1 className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-xl font-bold tracking-wider text-transparent">
            Run-i Dev Hub
          </h1>
        </div>
        <nav className="flex-1 space-y-2 px-4 py-6">
          <a
            href="/dashboard-sample"
            className="flex items-center rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white"
          >
            <LayoutDashboardIcon className="mr-3 h-5 w-5" /> Dashboard
          </a>
          <a
            href="/asset-studio-sample"
            className="flex items-center rounded-lg px-4 py-2.5 text-sm font-medium text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
          >
            <CubeIcon className="mr-3 h-5 w-5" /> Asset Studio
          </a>
          <a
            href="/combat-lab-sample"
            className="flex items-center rounded-lg px-4 py-2.5 text-sm font-medium text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
          >
            <SwordsIcon className="mr-3 h-5 w-5" /> Combat Lab
          </a>
          <a
            href="/loot-lab-sample"
            className="flex items-center rounded-lg px-4 py-2.5 text-sm font-medium text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
          >
            <DicesIcon className="mr-3 h-5 w-5" /> Loot Lab
          </a>
          <a
            href="/forge-lab-sample"
            className="flex items-center rounded-lg px-4 py-2.5 text-sm font-medium text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
          >
            <HammerIcon className="mr-3 h-5 w-5" /> Forge Lab
          </a>
          <a
            href="/log-sample"
            className="flex items-center rounded-lg px-4 py-2.5 text-sm font-medium text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
          >
            <FileTextIcon className="mr-3 h-5 w-5" /> Activity Logs
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white">Dashboard</h2>
            <p className="mt-1 text-gray-400">프로젝트 현황을 요약합니다.</p>
          </div>
          <button className="rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white shadow-lg shadow-indigo-600/30 transition-colors duration-300 hover:bg-indigo-500">
            신규 에셋 생성
          </button>
        </header>

        {/* Summary Stats */}
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {summaryStats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-lg border border-gray-700/50 bg-gray-800 p-6"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-sm font-medium text-gray-400">
                  {stat.title}
                </h3>
                {stat.icon}
              </div>
              <div>
                <p className="mt-2 text-3xl font-bold text-white">
                  {stat.value}
                </p>
                <p
                  className={`mt-1 text-sm ${
                    stat.changeType === 'increase'
                      ? 'text-emerald-400'
                      : stat.changeType === 'decrease'
                        ? 'text-rose-400'
                        : 'text-gray-500'
                  }`}
                >
                  {stat.change}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* Charts & Tables */}
        <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Asset Distribution Chart */}
          <div className="rounded-lg border border-gray-700/50 bg-gray-800 p-6 lg:col-span-1">
            <h3 className="mb-4 text-lg font-semibold text-white">
              에셋 분포 (그래프)
            </h3>
            <div className="space-y-4">
              {assetDistributionData.labels.map((label, index) => (
                <div key={index}>
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-sm text-gray-400">{label}</span>
                    <span className="text-sm font-medium text-white">
                      {assetDistributionData.values[index]}%
                    </span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-gray-700">
                    <div
                      className={`${assetDistributionData.colors[index]} h-2.5 rounded-full`}
                      style={{
                        width: `${assetDistributionData.values[index]}%`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity Table */}
          <div className="rounded-lg border border-gray-700/50 bg-gray-800 p-6 lg:col-span-2">
            <h3 className="mb-4 text-lg font-semibold text-white">
              최근 활동 (표)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="border-b border-gray-700">
                  <tr>
                    <th className="px-4 py-3 text-sm font-semibold text-gray-400">
                      사용자
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-gray-400">
                      활동
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-gray-400">
                      시간
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {recentActivities.map((activity, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-700/50 transition-colors hover:bg-gray-700/40"
                    >
                      <td className="px-4 py-3 text-sm text-white">
                        {activity.user}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-300">
                        {activity.action}
                      </td>
                      <td className="px-4 py-3 text-sm whitespace-nowrap text-gray-400">
                        {activity.time.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
