'use client';

import React, { useState, useEffect } from 'react';

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
const REINFORCE_RATES = {
  0: { success: 100, fail: { type: 'nothing' } },
  1: { success: 90, fail: { type: 'nothing' } },
  2: { success: 80, fail: { type: 'nothing' } },
  3: { success: 70, fail: { type: 'nothing' } },
  4: { success: 60, fail: { type: 'nothing' } },
  5: { success: 50, fail: { type: 'nothing' } },
  6: { success: 40, fail: { type: 'nothing' } },
  7: { success: 30, fail: { type: 'downgrade' } },
  8: { success: 25, fail: { type: 'downgrade' } },
  9: { success: 20, fail: { type: 'downgrade' } },
  10: { success: 15, fail: { type: 'reset' } },
  11: { success: 10, fail: { type: 'reset' } },
  12: { success: 5, fail: { type: 'reset' } },
  13: { success: 3, fail: { type: 'destroy' } },
  14: { success: 1, fail: { type: 'destroy' } },
  15: { success: 0.5, fail: { type: 'destroy' } },
};

const TIERS = ['N', 'M', 'C', 'B', 'A', 'S'];

const MOCK_ITEMS = {
  N: [
    { nameKr: '수적의 뾰족칼', baseCombatRating: 10, maxReinforceCount: 7 },
    { nameKr: '수적의 단도', baseCombatRating: 12, maxReinforceCount: 7 },
    { nameKr: '수적의 송곳칼', baseCombatRating: 15, maxReinforceCount: 7 },
    { nameKr: '수적의 소검', baseCombatRating: 18, maxReinforceCount: 7 },
    { nameKr: '수적의 꼬챙이', baseCombatRating: 11, maxReinforceCount: 7 },
    { nameKr: '수적의 회칼', baseCombatRating: 14, maxReinforceCount: 7 },
    { nameKr: '수적의 주머니칼', baseCombatRating: 13, maxReinforceCount: 7 },
    { nameKr: '수적의 검', baseCombatRating: 20, maxReinforceCount: 7 },
    { nameKr: '수적의 장도', baseCombatRating: 22, maxReinforceCount: 7 },
    { nameKr: '수적의 흔한 칼', baseCombatRating: 9, maxReinforceCount: 7 },
    { nameKr: '수적의 쑤시개', baseCombatRating: 8, maxReinforceCount: 7 },
    { nameKr: '수적의 송곳창', baseCombatRating: 25, maxReinforceCount: 7 },
    { nameKr: '수적의 작살', baseCombatRating: 28, maxReinforceCount: 7 },
    { nameKr: '수적의 죽창', baseCombatRating: 30, maxReinforceCount: 7 },
    { nameKr: '수적의 삼지창', baseCombatRating: 32, maxReinforceCount: 7 },
    { nameKr: '수적의 뾰족한 창', baseCombatRating: 27, maxReinforceCount: 7 },
    { nameKr: '수적의 도깨비창', baseCombatRating: 35, maxReinforceCount: 7 },
    { nameKr: '수적의 전쟁창', baseCombatRating: 38, maxReinforceCount: 7 },
    { nameKr: '수적의 창', baseCombatRating: 40, maxReinforceCount: 7 },
    { nameKr: '수적의 장창', baseCombatRating: 42, maxReinforceCount: 7 },
    { nameKr: '수적의 무적방패', baseCombatRating: 50, maxReinforceCount: 7 },
    { nameKr: '수적의 작은방패', baseCombatRating: 20, maxReinforceCount: 7 },
    { nameKr: '수적의 사각방패', baseCombatRating: 30, maxReinforceCount: 7 },
    { nameKr: '수적의 나무방패', baseCombatRating: 15, maxReinforceCount: 7 },
    { nameKr: '수적의 뼈방패', baseCombatRating: 35, maxReinforceCount: 7 },
    { nameKr: '수적의 원방패', baseCombatRating: 25, maxReinforceCount: 7 },
    { nameKr: '수적의 가죽방패', baseCombatRating: 18, maxReinforceCount: 7 },
    {
      nameKr: '수적의 대나무 방패',
      baseCombatRating: 22,
      maxReinforceCount: 7,
    },
    { nameKr: '수적의 대형방패', baseCombatRating: 45, maxReinforceCount: 7 },
    { nameKr: '수적의 골각방패', baseCombatRating: 40, maxReinforceCount: 7 },
    { nameKr: '수적의 파란 두건', baseCombatRating: 5, maxReinforceCount: 7 },
    { nameKr: '수적의 투모', baseCombatRating: 8, maxReinforceCount: 7 },
    { nameKr: '수적의 가죽 두건', baseCombatRating: 6, maxReinforceCount: 7 },
    { nameKr: '수적의 나무 투구', baseCombatRating: 10, maxReinforceCount: 7 },
    { nameKr: '수적의 지옥가면', baseCombatRating: 25, maxReinforceCount: 7 },
    { nameKr: '수적의 모자', baseCombatRating: 4, maxReinforceCount: 7 },
    { nameKr: '수적의 뼈투구', baseCombatRating: 15, maxReinforceCount: 7 },
    { nameKr: '수적의 뿔투구', baseCombatRating: 18, maxReinforceCount: 7 },
    { nameKr: '수적의 철투구', baseCombatRating: 20, maxReinforceCount: 7 },
    { nameKr: '수적의 천 두건', baseCombatRating: 3, maxReinforceCount: 7 },
  ],
  M: [
    {
      nameKr: '백제 부장의 뾰족칼',
      baseCombatRating: 50,
      maxReinforceCount: 7,
    },
    { nameKr: '백제 부장의 단도', baseCombatRating: 55, maxReinforceCount: 7 },
    {
      nameKr: '백제 부장의 송곳칼',
      baseCombatRating: 60,
      maxReinforceCount: 7,
    },
    { nameKr: '백제 부장의 소검', baseCombatRating: 65, maxReinforceCount: 7 },
    {
      nameKr: '백제 부장의 꼬챙이',
      baseCombatRating: 52,
      maxReinforceCount: 7,
    },
    { nameKr: '백제 부장의 회칼', baseCombatRating: 58, maxReinforceCount: 7 },
    {
      nameKr: '백제 부장의 주머니칼',
      baseCombatRating: 56,
      maxReinforceCount: 7,
    },
    { nameKr: '백제 부장의 검', baseCombatRating: 70, maxReinforceCount: 7 },
    { nameKr: '백제 부장의 장도', baseCombatRating: 75, maxReinforceCount: 7 },
    {
      nameKr: '백제 부장의 흔한 칼',
      baseCombatRating: 45,
      maxReinforceCount: 7,
    },
    {
      nameKr: '백제 부장의 쑤시개',
      baseCombatRating: 42,
      maxReinforceCount: 7,
    },
    {
      nameKr: '백제 부장의 송곳창',
      baseCombatRating: 80,
      maxReinforceCount: 7,
    },
    { nameKr: '백제 부장의 작살', baseCombatRating: 85, maxReinforceCount: 7 },
    { nameKr: '백제 부장의 죽창', baseCombatRating: 90, maxReinforceCount: 7 },
    {
      nameKr: '백제 부장의 삼지창',
      baseCombatRating: 95,
      maxReinforceCount: 7,
    },
  ],
  C: [
    { nameKr: '거불리의 눈빛', baseCombatRating: 120, maxReinforceCount: 7 },
    { nameKr: '우야고의 검', baseCombatRating: 130, maxReinforceCount: 7 },
    { nameKr: '모사라의 장검', baseCombatRating: 140, maxReinforceCount: 7 },
    { nameKr: '태우의의 증오', baseCombatRating: 150, maxReinforceCount: 7 },
    { nameKr: '다의발의 혀', baseCombatRating: 125, maxReinforceCount: 7 },
    { nameKr: '거련의 절단기', baseCombatRating: 135, maxReinforceCount: 7 },
    { nameKr: '안부련의 광란', baseCombatRating: 145, maxReinforceCount: 7 },
    { nameKr: '양운의 독침', baseCombatRating: 155, maxReinforceCount: 7 },
    { nameKr: '갈고의 지옥불', baseCombatRating: 160, maxReinforceCount: 7 },
    { nameKr: '거야발의 천둥', baseCombatRating: 170, maxReinforceCount: 7 },
    { nameKr: '주무신의 파괴', baseCombatRating: 180, maxReinforceCount: 7 },
    { nameKr: '사와라의 사냥 활', baseCombatRating: 190, maxReinforceCount: 7 },
  ],
  B: [
    { nameKr: '고시리의 속임수', baseCombatRating: 200, maxReinforceCount: 10 },
    {
      nameKr: '석제임의 초승달 검',
      baseCombatRating: 220,
      maxReinforceCount: 10,
    },
    {
      nameKr: '구을리의 고리자루큰칼',
      baseCombatRating: 240,
      maxReinforceCount: 10,
    },
    {
      nameKr: '구을의 비늘 단도',
      baseCombatRating: 210,
      maxReinforceCount: 10,
    },
    { nameKr: '한율의 용맹', baseCombatRating: 230, maxReinforceCount: 10 },
    { nameKr: '위나의 위엄', baseCombatRating: 250, maxReinforceCount: 10 },
    {
      nameKr: '여을의 저주 단도',
      baseCombatRating: 260,
      maxReinforceCount: 10,
    },
    { nameKr: '동엄의 곡도', baseCombatRating: 270, maxReinforceCount: 10 },
  ],
  A: [
    { nameKr: '혁서의 영혼', baseCombatRating: 300, maxReinforceCount: 10 },
    { nameKr: '주우양의 백호검', baseCombatRating: 350, maxReinforceCount: 10 },
    { nameKr: '지위리의 해부자', baseCombatRating: 320, maxReinforceCount: 10 },
    { nameKr: '거발한의 맥궁', baseCombatRating: 380, maxReinforceCount: 10 },
    { nameKr: '가륵의 매', baseCombatRating: 310, maxReinforceCount: 10 },
    { nameKr: '오사구의 부엉이', baseCombatRating: 340, maxReinforceCount: 10 },
    { nameKr: '달문의 갈래창', baseCombatRating: 370, maxReinforceCount: 10 },
    { nameKr: '우서한의 혀', baseCombatRating: 330, maxReinforceCount: 10 },
  ],
  S: [
    {
      nameKr: '안파견의 곧은 생각',
      baseCombatRating: 500,
      maxReinforceCount: 10,
    },
    { nameKr: '안파견의 심판', baseCombatRating: 550, maxReinforceCount: 10 },
    { nameKr: '안파견의 집행', baseCombatRating: 600, maxReinforceCount: 10 },
    { nameKr: '안파견의 구원', baseCombatRating: 650, maxReinforceCount: 10 },
    { nameKr: '왕검의 축복', baseCombatRating: 700, maxReinforceCount: 10 },
    { nameKr: '왕검의 자애', baseCombatRating: 750, maxReinforceCount: 10 },
    { nameKr: '왕검의 억강', baseCombatRating: 800, maxReinforceCount: 10 },
    { nameKr: '왕검의 부약', baseCombatRating: 850, maxReinforceCount: 10 },
    { nameKr: '왕검의 대동정신', baseCombatRating: 900, maxReinforceCount: 10 },
  ],
};

// --- REINFORCE LAB PAGE COMPONENT ---
export default function ReinforceLabPage() {
  const [selectedTier, setSelectedTier] = useState('N');
  const [selectedItem, setSelectedItem] = useState(MOCK_ITEMS['N'][0]);
  const [itemState, setItemState] = useState({
    level: 0,
    isDestroyed: false,
    remainingAttempts: MOCK_ITEMS['N'][0].maxReinforceCount,
  });
  const [log, setLog] = useState([]);
  const [isReinforcing, setIsReinforcing] = useState(false);

  useEffect(() => {
    // Reset state when selectedItem changes
    setItemState({
      level: 0,
      isDestroyed: false,
      remainingAttempts: selectedItem.maxReinforceCount,
    });
    setLog([]);
  }, [selectedItem]);

  const reinforce = () => {
    if (itemState.isDestroyed || itemState.remainingAttempts <= 0) {
      setLog((prev) => [`더 이상 강화할 수 없습니다.`, ...prev]);
      return;
    }

    setIsReinforcing(true);
    setTimeout(() => {
      const currentLevel = itemState.level;
      const rateInfo = REINFORCE_RATES[currentLevel] || {
        success: 0.1,
        fail: { type: 'destroy' },
      };
      const successChance = rateInfo.success;
      const isSuccess = Math.random() * 100 < successChance;

      let newLogEntry = '';
      const newItemState = {
        ...itemState,
        remainingAttempts: itemState.remainingAttempts - 1,
      };

      if (isSuccess) {
        newItemState.level += 1;
        newLogEntry = `성공! ${selectedItem.nameKr}이(가) +${newItemState.level}로 강화되었습니다.`;
      } else {
        const failType = rateInfo.fail.type;
        if (failType === 'nothing') {
          newLogEntry = `강화 실패! 아이템에 변화가 없습니다.`;
        } else if (failType === 'downgrade') {
          newItemState.level = Math.max(0, newItemState.level - 1);
          newLogEntry = `강화 실패! ${selectedItem.nameKr}이(가) +${newItemState.level}로 하락했습니다.`;
        } else if (failType === 'reset') {
          newItemState.level = 0;
          newLogEntry = `강화 실패! ${selectedItem.nameKr}이(가) +0으로 초기화되었습니다.`;
        } else if (failType === 'destroy') {
          newItemState.isDestroyed = true;
          newLogEntry = `강화 실패! ${selectedItem.nameKr}이(가) 파괴되었습니다...`;
        }
      }

      setLog((prev) => [newLogEntry, ...prev]);
      setItemState(newItemState);
      setIsReinforcing(false);
    }, 1000);
  };

  const resetSimulation = () => {
    setItemState({
      level: 0,
      isDestroyed: false,
      remainingAttempts: selectedItem.maxReinforceCount,
    });
    setLog([]);
    setIsReinforcing(false);
  };

  const handleTierChange = (e) => {
    const tier = e.target.value;
    setSelectedTier(tier);
    setSelectedItem(MOCK_ITEMS[tier][0]);
  };

  const handleItemChange = (e) => {
    const itemName = e.target.value;
    const item = MOCK_ITEMS[selectedTier].find(
      (item) => item.nameKr === itemName
    );
    setSelectedItem(item);
  };

  const calculateCombatRating = () => {
    const levelIncrease =
      selectedItem.baseCombatRating * (itemState.level / 10);
    return Math.round(selectedItem.baseCombatRating + levelIncrease);
  };

  const nextLevelRate =
    REINFORCE_RATES[itemState.level]?.success ||
    REINFORCE_RATES[15]?.success * 10;
  const nextLevelFailType =
    REINFORCE_RATES[itemState.level]?.fail?.type || 'destroy';

  const formatFailType = (type) => {
    switch (type) {
      case 'nothing':
        return '현상 유지';
      case 'downgrade':
        return '레벨 하락';
      case 'reset':
        return '초기화';
      case 'destroy':
        return '아이템 파괴';
      default:
        return '알 수 없음';
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
            className="flex items-center rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white"
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
            <h2 className="text-3xl font-bold text-white">Forge Lab</h2>
            <p className="mt-1 text-gray-400">
              아이템 강화 성공 확률을 시뮬레이션합니다.
            </p>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={reinforce}
              disabled={
                isReinforcing ||
                itemState.isDestroyed ||
                itemState.remainingAttempts <= 0
              }
              className="rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white shadow-lg shadow-indigo-600/30 transition-colors duration-300 hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isReinforcing ? '강화 중...' : '강화 시작'}
            </button>
            <button
              onClick={resetSimulation}
              className="rounded-lg bg-gray-700 px-4 py-2 font-semibold text-white transition-colors duration-300 hover:bg-gray-600"
            >
              초기화
            </button>
          </div>
        </header>

        {/* Reinforcement Panel */}
        <section className="mb-6 flex flex-col items-center rounded-lg border border-gray-700/50 bg-gray-800 p-6">
          <div className="mb-6 flex w-full max-w-lg space-x-4">
            <div className="flex-1">
              <label
                htmlFor="tier-select"
                className="mb-2 block text-sm font-medium text-gray-400"
              >
                등급 선택
              </label>
              <select
                id="tier-select"
                onChange={handleTierChange}
                value={selectedTier}
                className="w-full rounded-lg border border-gray-600 bg-gray-700 p-2 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              >
                {TIERS.map((tier) => (
                  <option key={tier} value={tier}>
                    {tier} 등급
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label
                htmlFor="item-select"
                className="mb-2 block text-sm font-medium text-gray-400"
              >
                아이템 선택
              </label>
              <select
                id="item-select"
                onChange={handleItemChange}
                value={selectedItem.nameKr}
                className="w-full rounded-lg border border-gray-600 bg-gray-700 p-2 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              >
                {MOCK_ITEMS[selectedTier].map((item, index) => (
                  <option key={index} value={item.nameKr}>
                    {item.nameKr}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div
            className={`w-full max-w-sm transform rounded-lg p-6 text-center shadow-lg transition-transform duration-500 ${itemState.isDestroyed ? 'scale-95 blur-sm' : ''}`}
          >
            <h3 className="mb-2 text-xl font-bold text-white">
              {selectedItem.nameKr}
            </h3>
            <p className="mb-4 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-4xl font-extrabold text-transparent">
              +{itemState.level}
            </p>
            <div className="space-y-1 text-sm">
              <p className="text-gray-400">
                전투 평점: {calculateCombatRating()}
              </p>
              <p className="text-gray-400">
                남은 강화 횟수: {itemState.remainingAttempts} /{' '}
                {selectedItem.maxReinforceCount}
              </p>
            </div>
          </div>

          <div className="mt-6 w-full max-w-lg">
            <h4 className="mb-2 text-lg font-semibold text-white">
              다음 강화 정보
            </h4>
            <div className="grid grid-cols-2 gap-4 rounded-lg bg-gray-700 p-4 text-sm">
              <div>
                <span className="font-medium text-gray-400">성공 확률:</span>
                <span className="ml-2 font-bold text-green-400">
                  {nextLevelRate}%
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-400">실패 시:</span>
                <span className="ml-2 font-bold text-red-400">
                  {formatFailType(nextLevelFailType)}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Simulation Log */}
        <section className="rounded-lg border border-gray-700/50 bg-gray-800 p-6">
          <h3 className="mb-4 text-lg font-semibold text-white">강화 로그</h3>
          <div className="max-h-64 overflow-y-auto rounded-lg bg-gray-700 p-4">
            <ul className="space-y-1 text-sm text-gray-300">
              {log.length > 0 ? (
                log.map((entry, index) => (
                  <li
                    key={index}
                    className={
                      entry.includes('성공')
                        ? 'text-green-400'
                        : entry.includes('파괴')
                          ? 'text-red-400'
                          : 'text-gray-300'
                    }
                  >
                    {entry}
                  </li>
                ))
              ) : (
                <li className="py-4 text-center text-gray-500">
                  아이템을 선택하고 강화 버튼을 눌러 시뮬레이션을 시작하세요.
                </li>
              )}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
