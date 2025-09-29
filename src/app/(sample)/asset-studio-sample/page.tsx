'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// --- ICONS (Reusing from dashboard and adding new ones) ---
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
const ChevronRightIcon = (props) => (
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
    <path d="m9 18 6-6-6-6" />
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
const SearchIcon = (props) => (
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
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

// --- MOCK DATA ---
const domains = [
  'Buff',
  'Enemy',
  'Item',
  'Map',
  'Npc',
  'Quest',
  'Set-Item',
  'Stat',
];
const mockItems = [
  {
    id: 1001,
    image: 'http://localhost:3000/images/sp_item_bottom_temp.png',
    name: '수적의 더러운 바지', // image에 맞춘 이름
    rank: 'N',
    sellPrice: 300,
  },
  {
    id: 1002,
    image: 'http://localhost:3000/images/sp_item_top_temp.png',
    name: '수적의 더러운옷',
    rank: 'N',
    sellPrice: 250,
  },
  {
    id: 1003,
    image: 'http://localhost:3000/images/sp_item_gloves_temp.png',
    name: '수적의 팔목장갑',
    rank: 'N',
    sellPrice: 120,
  },
  {
    id: 1004,
    image: 'http://localhost:3000/images/sp_item_shoes_temp.png',
    name: '수적의 신발',
    rank: 'N',
    sellPrice: 450,
  },
  {
    id: 1005,
    image: 'http://localhost:3000/images/sp_item_sword_temp.png',
    name: '도적의 검',
    rank: 'M',
    sellPrice: 1100,
  },
  {
    id: 1006,
    image: 'http://localhost:3000/images/sp_item_spear_temp.png',
    name: '도적의 창',
    rank: 'N',
    sellPrice: 800,
  },
  {
    id: 1007,
    image: 'http://localhost:3000/images/sp_item_hat_temp.png',
    name: '도적의 모자',
    rank: 'N',
    sellPrice: 550,
  },
  {
    id: 1008,
    image: 'http://localhost:3000/images/sp_item_bow_temp.png',
    name: '도적의 대나무 활',
    rank: 'N',
    sellPrice: 450,
  },
  {
    id: 1009,
    image: 'http://localhost:3000/images/sp_item_bow_temp_2.png',
    name: '수적의 전투 활',
    rank: 'M',
    sellPrice: 1500,
  },
  {
    id: 1010,
    image: 'http://localhost:3000/images/sp_item_bottom_temp.png',
    name: '도적의 전투 바지',
    rank: 'M',
    sellPrice: 1500,
  },
  {
    id: 1011,
    image: 'http://localhost:3000/images/sp_item_bottom_temp.png',
    name: '도적의 더러운 바지', // image에 맞춘 이름
    rank: 'N',
    sellPrice: 300,
  },
  {
    id: 1012,
    image: 'http://localhost:3000/images/sp_item_top_temp.png',
    name: '도적의 더러운옷',
    rank: 'N',
    sellPrice: 250,
  },
  {
    id: 1013,
    image: 'http://localhost:3000/images/sp_item_gloves_temp.png',
    name: '도적의 팔목장갑',
    rank: 'N',
    sellPrice: 120,
  },
  {
    id: 1014,
    image: 'http://localhost:3000/images/sp_item_shoes_temp.png',
    name: '도적의 신발',
    rank: 'N',
    sellPrice: 450,
  },
  {
    id: 1015,
    image: 'http://localhost:3000/images/sp_item_sword_temp.png',
    name: '도적의 검',
    rank: 'M',
    sellPrice: 1100,
  },
  {
    id: 1016,
    image: 'http://localhost:3000/images/sp_item_spear_temp.png',
    name: '도적의 창',
    rank: 'N',
    sellPrice: 800,
  },
  {
    id: 1017,
    image: 'http://localhost:3000/images/sp_item_hat_temp.png',
    name: '도적의 모자',
    rank: 'N',
    sellPrice: 550,
  },
  {
    id: 1018,
    image: 'http://localhost:3000/images/sp_item_bow_temp.png',
    name: '도적의 대나무 활',
    rank: 'N',
    sellPrice: 450,
  },
  {
    id: 1019,
    image: 'http://localhost:3000/images/sp_item_bow_temp_2.png',
    name: '도적의 전투 활',
    rank: 'M',
    sellPrice: 1500,
  },
];

const rankStyles = {
  S: 'bg-purple-600 text-purple-100',
  A: 'bg-blue-600 text-blue-100',
  B: 'bg-green-600 text-green-100',
  C: 'bg-gray-600 text-gray-100',
  M: 'bg-yellow-600 text-yellow-100',
  N: 'bg-stone-500 text-stone-100',
};

// --- ASSET STUDIO PAGE COMPONENT ---
export default function AssetStudioPage() {
  const [activeTab, setActiveTab] = useState('Item');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const itemsPerPage = 10;

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  const filteredItems = useMemo(() => {
    if (!debouncedSearchTerm) {
      return mockItems;
    }
    return mockItems.filter((item) =>
      item.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
  }, [debouncedSearchTerm]);

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearchTerm]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = 23;
  // const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

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
          {/* Navigation Links */}
          <a
            href="/dashboard-sample"
            className="flex items-center rounded-lg px-4 py-2.5 text-sm font-medium text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
          >
            <LayoutDashboardIcon className="mr-3 h-5 w-5" /> Dashboard
          </a>
          <a
            href="/asset-studio-sample"
            className="flex items-center rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white"
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
        <header className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white">Asset Studio</h2>
            <p className="mt-1 text-gray-400">게임 에셋 데이터를 관리합니다.</p>
          </div>
          <Link
            href="/asset-studio-sample/insert"
            className="rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white shadow-lg shadow-indigo-600/30 transition-colors duration-300 hover:bg-indigo-500"
          >
            신규 {activeTab} 생성
          </Link>
        </header>

        {/* Domain Tabs */}
        <div className="border-b border-gray-700">
          <nav className="-mb-px flex space-x-6">
            {domains.map((domain) => (
              <button
                key={domain}
                onClick={() => setActiveTab(domain)}
                className={`border-b-2 px-1 py-3 text-sm font-medium transition-colors ${
                  activeTab === domain
                    ? 'border-indigo-500 text-indigo-400'
                    : 'border-transparent text-gray-500 hover:border-gray-500 hover:text-gray-300'
                }`}
              >
                {domain}
              </button>
            ))}
          </nav>
        </div>

        {/* Search and Filters */}
        <div className="mt-6">
          <div className="relative">
            <SearchIcon className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="아이템 이름으로 검색..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-sm rounded-lg border border-gray-600 bg-gray-700 py-2 pr-4 pl-10 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Content Area */}
        <div className="mt-8">
          {activeTab === 'Item' && (
            <div className="rounded-lg border border-gray-700/50 bg-gray-800">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="border-b border-gray-700">
                    <tr>
                      <th className="px-5 py-3 text-sm font-semibold text-gray-400">
                        ID
                      </th>
                      <th className="px-5 py-3 text-sm font-semibold text-gray-400">
                        Image
                      </th>
                      <th className="px-5 py-3 text-sm font-semibold text-gray-400">
                        Name
                      </th>
                      <th className="px-5 py-3 text-sm font-semibold text-gray-400">
                        Rank
                      </th>
                      <th className="px-5 py-3 text-sm font-semibold text-gray-400">
                        Sell Price
                      </th>
                      <th className="px-5 py-3 text-sm font-semibold text-gray-400"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.map((item) => (
                      <tr
                        key={item.id}
                        className="border-b border-gray-700/50 transition-colors hover:bg-gray-700/40"
                      >
                        <td className="px-5 py-3 text-sm text-gray-300">
                          {item.id}
                        </td>
                        <td className="px-5 py-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-10 w-10 rounded-md bg-gray-700 object-cover"
                          />
                        </td>
                        <td className="px-5 py-3 text-sm font-medium text-white">
                          {item.name}
                        </td>
                        <td className="px-5 py-3 text-sm">
                          <span
                            className={`rounded-full px-2 py-1 text-xs font-semibold ${rankStyles[item.rank] || 'bg-gray-500'}`}
                          >
                            {item.rank}
                          </span>
                        </td>
                        <td className="px-5 py-3 text-sm text-gray-300">
                          {item.sellPrice.toLocaleString()}
                        </td>
                        <td className="px-5 py-3 text-sm text-gray-400">
                          <button className="rounded-full p-1 hover:bg-gray-600">
                            <ChevronRightIcon className="h-5 w-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {totalPages > 0 && (
                <div className="flex items-center justify-between border-t border-gray-700 p-4">
                  <span className="text-sm text-gray-400">
                    Showing {indexOfFirstItem + 1} to{' '}
                    {Math.min(indexOfLastItem, filteredItems.length)} of 428
                    results
                  </span>
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => paginate(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="rounded-md bg-gray-700 px-3 py-1 text-sm hover:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Previous
                    </button>
                    <span className="px-3 py-1 text-sm">
                      Page {currentPage} of {totalPages}
                    </span>
                    <button
                      onClick={() => paginate(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="rounded-md bg-gray-700 px-3 py-1 text-sm hover:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
          {/* Other domain tabs can be added here as needed */}
        </div>
      </main>
    </div>
  );
}
