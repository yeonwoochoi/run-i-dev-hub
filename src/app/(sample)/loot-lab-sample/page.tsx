'use client';

import React, { useState, useMemo } from 'react';

// --- ICONS ---
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

// --- MOCK DATA & STYLES ---
const rankStyles = {
  S: {
    bar: 'bg-purple-500',
    text: 'text-purple-300',
    tag: 'bg-purple-600 text-purple-100',
  },
  A: {
    bar: 'bg-blue-500',
    text: 'text-blue-300',
    tag: 'bg-blue-600 text-blue-100',
  },
  B: {
    bar: 'bg-green-500',
    text: 'text-green-300',
    tag: 'bg-green-600 text-green-100',
  },
  C: {
    bar: 'bg-gray-500',
    text: 'text-gray-300',
    tag: 'bg-gray-600 text-gray-100',
  },
  M: {
    bar: 'bg-yellow-500',
    text: 'text-yellow-300',
    tag: 'bg-yellow-600 text-yellow-100',
  },
  N: {
    bar: 'bg-stone-500',
    text: 'text-stone-300',
    tag: 'bg-stone-500 text-stone-100',
  },
};

const mockDropSources = [
  {
    id: 1,
    name: '호 최고위 수적',
    dropTable: [
      { itemId: 3001, rank: 'N', name: '수적의 뾰족칼', probability: 0.2 },
      { itemId: 3002, rank: 'N', name: '수적의 단도', probability: 0.1 },
      { itemId: 3003, rank: 'N', name: '수적의 다리싸개', probability: 0.1 },
      { itemId: 3004, rank: 'N', name: '수적의 천웃옷', probability: 0.1 },
      { itemId: 3005, rank: 'N', name: '수적의 철갑옷', probability: 0.1 },
      { itemId: 3006, rank: 'N', name: '수적의 철판 갑옷', probability: 0.1 },
      {
        itemId: 3007,
        rank: 'N',
        name: '수적의 상어가죽바지',
        probability: 0.1,
      },
      { itemId: 3008, rank: 'C', name: '혁다세의 대궁', probability: 0.05 },
      { itemId: 3009, rank: 'C', name: '음차의 단궁', probability: 0.05 },
      { itemId: 3010, rank: 'B', name: '여을의 저주 단도', probability: 0.01 },
    ],
  },
  {
    id: 2,
    name: '호 중간 수적',
    dropTable: [
      {
        itemId: 3011,
        rank: 'N',
        name: '수적의 상어가죽장갑',
        probability: 0.2,
      },
      { itemId: 3012, rank: 'N', name: '수적의 무늬장갑', probability: 0.1 },
      { itemId: 3013, rank: 'N', name: '수적의 소가죽장갑', probability: 0.1 },
      { itemId: 3014, rank: 'N', name: '수적의 천웃옷', probability: 0.1 },
      { itemId: 3015, rank: 'N', name: '수적의 전투활', probability: 0.1 },
      { itemId: 3016, rank: 'N', name: '수적의 천 바지', probability: 0.1 },
      { itemId: 3017, rank: 'N', name: '수적의 나무갑옷', probability: 0.1 },
      { itemId: 3018, rank: 'C', name: '아리의 전쟁창', probability: 0.05 },
    ],
  },
  {
    id: 3,
    name: '호 일반 수적',
    dropTable: [
      { itemId: 3011, rank: 'N', name: '수적의 군장화', probability: 0.2 },
      { itemId: 3012, rank: 'N', name: '수적의 다리보호구', probability: 0.1 },
      { itemId: 3013, rank: 'N', name: '수적의 신발', probability: 0.1 },
      { itemId: 3014, rank: 'N', name: '수적의 뼈투구', probability: 0.1 },
      { itemId: 3015, rank: 'N', name: '수적의 천 두건', probability: 0.1 },
      { itemId: 3016, rank: 'N', name: '수적의 더러운옷', probability: 0.1 },
    ],
  },
];

// --- LOOT LAB PAGE COMPONENT ---
export default function LootLabPage() {
  const [selectedSourceId, setSelectedSourceId] = useState(
    mockDropSources[0].id
  );
  const [trialCount, setTrialCount] = useState(1000);
  const [simulationResult, setSimulationResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const selectedSource = useMemo(
    () => mockDropSources.find((s) => s.id === selectedSourceId),
    [selectedSourceId]
  );

  const runSimulation = () => {
    setIsLoading(true);
    setSimulationResult(null);

    setTimeout(() => {
      const dropCounts = {};
      const rankCounts = { S: 0, A: 0, B: 0, C: 0, M: 0, N: 0 };
      let totalDrops = 0;

      for (let i = 0; i < trialCount; i++) {
        selectedSource.dropTable.forEach((item) => {
          if (Math.random() < item.probability) {
            dropCounts[item.itemId] = (dropCounts[item.itemId] || 0) + 1;
            rankCounts[item.rank]++;
            totalDrops++;
          }
        });
      }

      const results = selectedSource.dropTable
        .map((item) => ({
          ...item,
          count: dropCounts[item.itemId] || 0,
          actualRate: ((dropCounts[item.itemId] || 0) / trialCount) * 100,
        }))
        .sort((a, b) => b.probability - a.probability);

      setSimulationResult({
        totalDrops,
        trialCount,
        rankCounts,
        results,
      });
      setIsLoading(false);
    }, 500); // Simulate network delay
  };

  return (
    <div className="flex min-h-screen bg-gray-900 font-sans text-gray-300">
      {/* Sidebar */}
      <aside className="flex w-64 flex-shrink-0 flex-col border-r border-gray-700/50 bg-gray-800">
        <div className="flex h-16 items-center justify-center border-b border-gray-700/50">
          <h1 className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-xl font-bold tracking-wider text-transparent">
            Game Dev Hub
          </h1>
        </div>
        <nav className="flex-1 space-y-2 px-4 py-6">
          <a
            href="/dashboard-sample"
            className="flex items-center rounded-lg px-4 py-2.5 text-sm font-medium text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
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
            className="flex items-center rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white"
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
        <header className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white">Loot Lab</h2>
            <p className="mt-1 text-gray-400">
              아이템 드랍 확률을 시뮬레이션합니다.
            </p>
          </div>
          <button
            onClick={runSimulation}
            disabled={isLoading}
            className="rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white shadow-lg shadow-indigo-600/30 transition-colors duration-300 hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isLoading ? '시뮬레이션 중...' : '시뮬레이션 시작'}
          </button>
        </header>

        {/* Simulation Settings */}
        <section className="mb-8 rounded-lg border border-gray-700/50 bg-gray-800 p-6">
          <h3 className="mb-4 text-lg font-semibold text-white">
            시뮬레이션 설정
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="source-select"
                className="mb-1 block text-sm font-medium text-gray-400"
              >
                드랍 소스:
              </label>
              <select
                id="source-select"
                value={selectedSourceId}
                onChange={(e) => setSelectedSourceId(parseInt(e.target.value))}
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              >
                {mockDropSources.map((source) => (
                  <option key={source.id} value={source.id}>
                    {source.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="trial-count"
                className="mb-1 block text-sm font-medium text-gray-400"
              >
                시도 횟수:
              </label>
              <input
                id="trial-count"
                type="number"
                value={trialCount}
                onChange={(e) =>
                  setTrialCount(Math.max(1, parseInt(e.target.value) || 1))
                }
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
          </div>
        </section>

        {/* Simulation Results */}
        <section className="rounded-lg border border-gray-700/50 bg-gray-800 p-6">
          <h3 className="mb-4 text-lg font-semibold text-white">
            시뮬레이션 결과
          </h3>
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-t-4 border-gray-600 border-indigo-500"></div>
            </div>
          ) : simulationResult ? (
            <div>
              <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
                {/* Summary */}
                <div className="rounded-lg bg-gray-700 p-6 lg:col-span-1">
                  <h4 className="mb-4 font-semibold text-gray-200">요약</h4>
                  <ul className="space-y-3 text-sm text-gray-300">
                    <li>
                      <span className="font-medium text-gray-400">
                        총 시도 횟수:
                      </span>{' '}
                      {simulationResult.trialCount.toLocaleString()}회
                    </li>
                    <li>
                      <span className="font-medium text-gray-400">
                        총 드랍 아이템:
                      </span>{' '}
                      {simulationResult.totalDrops.toLocaleString()}개
                    </li>
                    <li>
                      <span className="font-medium text-gray-400">
                        평균 드랍률:
                      </span>{' '}
                      {(
                        (simulationResult.totalDrops /
                          simulationResult.trialCount) *
                        100
                      ).toFixed(2)}
                      %
                    </li>
                  </ul>
                </div>
                {/* Rank Distribution */}
                <div className="rounded-lg bg-gray-700 p-6 lg:col-span-2">
                  <h4 className="mb-4 font-semibold text-gray-200">
                    등급별 분포
                  </h4>
                  <div className="space-y-3">
                    {Object.keys(rankStyles).map((rank) => {
                      const count = simulationResult.rankCounts[rank];
                      const percentage =
                        simulationResult.totalDrops > 0
                          ? (count / simulationResult.totalDrops) * 100
                          : 0;
                      return (
                        <div key={rank} className="flex items-center">
                          <span
                            className={`w-10 font-bold ${rankStyles[rank].text}`}
                          >
                            {rank}
                          </span>
                          <div className="mx-2 h-5 flex-1 rounded-full bg-gray-800">
                            <div
                              className={`${rankStyles[rank].bar} h-5 rounded-full text-center text-xs leading-5 text-white`}
                              style={{ width: `${percentage}%` }}
                            >
                              {percentage > 10
                                ? `${percentage.toFixed(1)}%`
                                : ''}
                            </div>
                          </div>
                          <span className="w-20 text-right text-sm text-gray-400">
                            {count.toLocaleString()} 개
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              {/* Detailed Results Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="border-b border-gray-700">
                    <tr>
                      <th className="px-4 py-3 text-sm font-semibold text-gray-400">
                        아이템 이름
                      </th>
                      <th className="px-4 py-3 text-sm font-semibold text-gray-400">
                        등급
                      </th>
                      <th className="px-4 py-3 text-sm font-semibold text-gray-400">
                        획득 수량
                      </th>
                      <th className="px-4 py-3 text-sm font-semibold text-gray-400">
                        기대 확률
                      </th>
                      <th className="px-4 py-3 text-sm font-semibold text-gray-400">
                        실제 확률
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {simulationResult.results.map((item) => (
                      <tr
                        key={item.itemId}
                        className="border-b border-gray-700/50 transition-colors hover:bg-gray-700/40"
                      >
                        <td className="px-4 py-3 text-sm font-medium text-white">
                          {item.name}
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`rounded-full px-2 py-1 text-xs font-semibold ${rankStyles[item.rank].tag}`}
                          >
                            {item.rank}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-300">
                          {item.count.toLocaleString()}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-300">
                          {(item.probability * 100).toFixed(3)}%
                        </td>
                        <td className="px-4 py-3 text-sm font-bold text-cyan-400">
                          {item.actualRate.toFixed(3)}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="py-12 text-center text-gray-500">
              <p>
                드랍 소스와 시도 횟수를 설정하고 &apos;시뮬레이션 시작&apos;
                버튼을 클릭하세요.
              </p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
