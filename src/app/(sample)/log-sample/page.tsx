'use client';

import React, { useState } from 'react';

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

const MOCK_LOGS = [
  // Asset Studio - 이해린
  {
    username: '이해린',
    action: 'add',
    assetType: 'Item',
    name: '해모수의 용광의 칼',
    timestamp: new Date('2024-02-28T01:10:00Z'),
  },
  {
    username: '이해린',
    action: 'add',
    assetType: 'Item',
    name: '대소의 도륙칼',
    timestamp: new Date('2024-02-28T01:15:00Z'),
  },
  {
    username: '이해린',
    action: 'add',
    assetType: 'Item',
    name: '고무서의 면류관',
    timestamp: new Date('2024-02-28T01:18:00Z'),
  },
  {
    username: '이해린',
    action: 'add',
    assetType: 'Item',
    name: '대음의 용갑옷',
    timestamp: new Date('2024-02-28T01:25:00Z'),
  },
  {
    username: '이해린',
    action: 'add',
    assetType: 'Item',
    name: '내휴의 청동치마',
    timestamp: new Date('2024-02-28T01:30:00Z'),
  },

  // Loot Lab - 김성준
  {
    username: '김성준',
    action: 'add',
    assetType: 'Enemy',
    name: '호 최고위 수적1',
    timestamp: new Date('2024-02-28T01:35:00Z'),
  },
  {
    username: '김성준',
    action: 'add',
    assetType: 'Enemy',
    name: '호 중간 수적1',
    timestamp: new Date('2024-02-27T03:14:00Z'),
  },
  {
    username: '김성준',
    action: 'add',
    assetType: 'Enemy',
    name: '호 중간 수적1',
    timestamp: new Date('2024-02-27T03:13:00Z'),
  },
  {
    username: '김성준',
    action: 'add',
    assetType: 'Enemy',
    name: '호 중간 수적1',
    timestamp: new Date('2024-02-27T03:12:00Z'),
  },
];

const LogPage = ({ logs, currentPage, totalPages, onPageChange }) => {
  return (
    <div className="rounded-lg bg-gray-800 p-4">
      <h3 className="mb-4 border-b border-gray-700 pb-4 text-lg font-semibold text-white">
        최근 활동 로그
      </h3>
      <ul className="space-y-4">
        {logs.length > 0 ? (
          logs.map((log, index) => (
            <li key={index} className="rounded-lg bg-gray-700/50 p-4">
              <div className="mb-1 flex items-center justify-between text-sm text-gray-400">
                <span>
                  <strong>유저:</strong>{' '}
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-bold ${log.username === '김성준' ? 'bg-purple-600 text-white' : 'bg-emerald-600 text-white'}`}
                  >
                    {log.username}
                  </span>
                </span>
                <span>{log.timestamp.toLocaleString()}</span>
              </div>
              <div className="text-gray-300">
                <span className="font-semibold text-indigo-400">
                  {log.assetType}
                </span>{' '}
                <span className="text-sm text-gray-400">({log.name})</span>{' '}
                에셋이{' '}
                {log.action === 'add' && (
                  <span className="font-semibold text-cyan-400">
                    {log.action === 'add'
                      ? '생성'
                      : log.action === 'edit'
                        ? '수정'
                        : '삭제'}
                  </span>
                )}
                {log.action === 'edit' && (
                  <span className="font-semibold text-purple-400">
                    {log.action === 'add'
                      ? '생성'
                      : log.action === 'edit'
                        ? '수정'
                        : '삭제'}
                  </span>
                )}
                {log.action === 'delete' && (
                  <span className="font-semibold text-red-400">
                    {log.action === 'add'
                      ? '생성'
                      : log.action === 'edit'
                        ? '수정'
                        : '삭제'}
                  </span>
                )}
                되었습니다.
              </div>
            </li>
          ))
        ) : (
          <div className="py-12 text-center text-gray-500">
            활동 로그가 없습니다.
          </div>
        )}
      </ul>

      {/* Pagination Controls */}
      <div className="mt-6 flex items-center justify-center space-x-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium text-gray-300 transition-colors hover:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          이전
        </button>
        <span className="text-sm text-gray-400">
          페이지 {currentPage} / 523
        </span>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium text-gray-300 transition-colors hover:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          다음
        </button>
      </div>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
export default function LogOnlyPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const logsPerPage = 6;

  // Get current logs
  const indexOfLastLog = currentPage * logsPerPage;
  const indexOfFirstLog = indexOfLastLog - logsPerPage;
  const currentLogs = MOCK_LOGS.slice(indexOfFirstLog, indexOfLastLog);
  const totalPages = Math.ceil(MOCK_LOGS.length / logsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
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
          {/* Navigation Links - Provided by user */}
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
          {/* Active Log Page Link */}
          <a
            href="/log-sample"
            className="flex items-center rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white"
          >
            <FileTextIcon className="mr-3 h-5 w-5" /> Activity Logs
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        <header className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white">Activity Logs</h2>
            <p className="mt-1 text-gray-400">
              팀원들의 최근 데이터 변경 이력을 확인합니다.
            </p>
          </div>
        </header>
        <LogPage
          logs={currentLogs}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </main>
    </div>
  );
}
