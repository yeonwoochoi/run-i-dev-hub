'use client';

import React, { useState, useEffect, useRef } from 'react';

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
const BoltIcon = (props) => (
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
    <path d="M11.66 2.05a.25.25 0 0 1 .49 0l.96 2.06c.09.2.27.33.48.33h2.24c.2 0 .38.1.48.27l1.72 2.92a.25.25 0 0 1-.16.38l-2.06.49a.25.25 0 0 0-.18.17l-.88 2.37c-.09.2-.27.33-.48.33h-2.24c-.2 0-.38-.1-.48-.27L6.82 9.1a.25.25 0 0 1 .16-.38l2.06-.49a.25.25 0 0 0 .18-.17l.88-2.37zM15.42 12.52a.25.25 0 0 1 .49 0l.96 2.06c.09.2.27.33.48.33h2.24c.2 0 .38.1.48.27l1.72 2.92a.25.25 0 0 1-.16.38l-2.06.49a.25.25 0 0 0-.18.17l-.88 2.37c-.09.2-.27.33-.48.33h-2.24c-.2 0-.38-.1-.48-.27l-1.72-2.92a.25.25 0 0 1 .16-.38l2.06-.49a.25.25 0 0 0 .18-.17z" />
  </svg>
);
const PlusIcon = (props) => (
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
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
);
const XIcon = (props) => (
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
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
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
const StopCircleIcon = (props) => (
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
    <circle cx="12" cy="12" r="10" />
    <rect x="9" y="9" width="6" height="6" />
  </svg>
);

// --- MOCK DATA ---
const mockPlayer = {
  id: 1,
  name: '이소',
  hp: 500,
  atk: 50,
  def: 30,
  spd: 15,
  combatRating: 1500,
  potionHeal: 100,
  potionCooldown: 5000,
};
const mockEnemies = [
  {
    id: 1,
    name: '호 최고위 수적',
    hp: 110,
    atk: 28,
    def: 30,
    spd: 15,
    combatRating: 300,
  },
  {
    id: 2,
    name: '호 중간 수적',
    hp: 95,
    atk: 22,
    def: 20,
    spd: 10,
    combatRating: 400,
  },
  {
    id: 3,
    name: '호 일반 수적',
    hp: 85,
    atk: 30,
    def: 8,
    spd: 18,
    combatRating: 350,
  },
  {
    id: 4,
    name: '모도라 최고위 수적',
    hp: 95,
    atk: 26,
    def: 18,
    spd: 11,
    combatRating: 320,
  },
];

const workerCode = `
  let intervalId;

  self.onmessage = function(e) {
    if (e.data.type === 'start') {
      // Clear any existing interval to prevent multiple simulations
      if (intervalId) {
        clearInterval(intervalId);
      }
      
      const { player, enemyGroups, simulationInterval } = e.data.payload;

      // Initial State Setup
      const allEnemies = enemyGroups.flatMap((group, groupIndex) =>
        Array.from({ length: group.count }).map((_, enemyIndex) => ({
          ...group.enemy,
          id: \`\${group.enemy.id}-\${groupIndex}-\${enemyIndex}\`,
          name: \`\${group.enemy.name} #\${enemyIndex + 1}\`,
          currentHp: group.enemy.hp,
          totalDamageReceived: 0,
          lastAttackTime: 0,
          deathTime: null,
        }))
      );
      const playerState = {
        ...player,
        currentHp: player.hp,
        totalDamageReceived: 0,
        totalHealing: 0,
        enemiesKilled: 0,
        lastAttackTime: 0,
        lastPotionTime: 0,
      };
      const combatLog = [];
      let elapsedTime = 0;

      // Main simulation loop (time-based)
      intervalId = setInterval(() => {
        // Player's actions
        if (playerState.currentHp > 0) {
          const now = elapsedTime;
          const aliveEnemies = allEnemies.filter(e => e.currentHp > 0);
          
          // Player Attack
          const playerAttackInterval = Math.max(1, 1000 / (playerState.spd * 0.1));
          if (now - playerState.lastAttackTime >= playerAttackInterval) {
            if (aliveEnemies.length > 0) {
              const targetEnemy = aliveEnemies[Math.floor(Math.random() * aliveEnemies.length)];
              const damage = Math.max(0, playerState.atk - targetEnemy.def);
              targetEnemy.currentHp = Math.max(0, targetEnemy.currentHp - damage);
              targetEnemy.totalDamageReceived += damage;
              const logEntry = \`[\${(elapsedTime / 1000).toFixed(1)}s] \${playerState.name}이(가) \${targetEnemy.name}에게 \${damage}의 피해를 입혔습니다.\`;
              self.postMessage({ type: 'log', payload: { logEntry } });

              if (targetEnemy.currentHp <= 0 && targetEnemy.deathTime === null) {
                targetEnemy.deathTime = elapsedTime / 1000;
                playerState.enemiesKilled++;
                const deathLogEntry = \`[\${(elapsedTime / 1000).toFixed(1)}s] \${targetEnemy.name}이(가) 전투 불능 상태가 되었습니다.\`;
                self.postMessage({ type: 'log', payload: { logEntry: deathLogEntry } });
              }
            }
            playerState.lastAttackTime = now;
          }

          // Player Potion Use (if HP is low and potion is off cooldown)
          if (playerState.currentHp < playerState.hp * 0.5 && now - playerState.lastPotionTime >= player.potionCooldown) {
            const healing = player.potionHeal;
            playerState.currentHp = Math.min(player.hp, playerState.currentHp + healing);
            playerState.totalHealing += healing;
            playerState.lastPotionTime = now;
            const potionLogEntry = \`[\${(elapsedTime / 1000).toFixed(1)}s] \${playerState.name}이(가) 물약을 사용해 \${healing}만큼 회복했습니다. (현재 HP: \${playerState.currentHp})\`;
            self.postMessage({ type: 'log', payload: { logEntry: potionLogEntry } });
          }
        }

        // Enemies' actions
        const aliveEnemies = allEnemies.filter(e => e.currentHp > 0);
        aliveEnemies.forEach(enemy => {
          const now = elapsedTime;
          const enemyAttackInterval = Math.max(1, 1000 / (enemy.spd * 0.1));
          if (now - enemy.lastAttackTime >= enemyAttackInterval) {
            if (playerState.currentHp > 0) {
              const damage = Math.max(0, enemy.atk - playerState.def);
              playerState.currentHp = Math.max(0, playerState.currentHp - damage);
              playerState.totalDamageReceived += damage;
              const logEntry = \`[\${(elapsedTime / 1000).toFixed(1)}s] \${enemy.name}이(가) \${playerState.name}에게 \${damage}의 피해를 입혔습니다.\`;
              self.postMessage({ type: 'log', payload: { logEntry } });
            }
            enemy.lastAttackTime = now;
          }
        });

        elapsedTime += simulationInterval;

        // Check for end conditions
        const allEnemiesDead = allEnemies.every(e => e.currentHp <= 0);
        const playerDead = playerState.currentHp <= 0;

        if (playerDead || allEnemiesDead) {
          clearInterval(intervalId);
          intervalId = null; // Clear the reference
          let winner = playerDead ? 'enemies' : 'player';

          self.postMessage({
            type: 'result',
            payload: {
              winner,
              elapsedTime: elapsedTime / 1000,
              playerStats: playerState,
              enemyStats: allEnemies.map(e => ({
                name: e.name,
                totalDamageReceived: e.totalDamageReceived,
                isDead: e.currentHp <= 0,
                deathTime: e.deathTime,
              })),
            }
          });
        }
      }, simulationInterval);
    } else if (e.data.type === 'stop') {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }
  };
`;

// --- COMBAT LAB PAGE COMPONENT ---
export default function CombatLabPage() {
  const [player, _] = useState(mockPlayer);
  const [enemyGroups, setEnemyGroups] = useState([
    { enemy: mockEnemies[0], count: 1 },
  ]);
  const [combatRatingFormula, setCombatRatingFormula] = useState('');
  const [currentStage, setCurrentStage] = useState('Stage 1');
  const [simulationResult, setSimulationResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [realtimeLog, setRealtimeLog] = useState([]);

  const workerRef = useRef(null);

  // Set up Web Worker on component mount
  useEffect(() => {
    const blob = new Blob([workerCode], { type: 'application/javascript' });
    const workerUrl = URL.createObjectURL(blob);
    workerRef.current = new Worker(workerUrl);

    workerRef.current.onmessage = (e) => {
      const { type, payload } = e.data;
      if (type === 'log') {
        setRealtimeLog((prevLogs) => [...prevLogs, payload.logEntry]);
      } else if (type === 'result') {
        setSimulationResult(payload);
        setIsLoading(false);
      }
    };

    // Cleanup: Terminate worker when component unmounts
    return () => {
      if (workerRef.current) {
        workerRef.current.terminate();
        URL.revokeObjectURL(workerUrl);
      }
    };
  }, []);

  const addEnemyGroup = () => {
    if (enemyGroups.length < 4) {
      setEnemyGroups([...enemyGroups, { enemy: mockEnemies[0], count: 1 }]);
    }
  };

  // Update enemy group (type or count)
  const updateEnemyGroup = (index, key, value) => {
    const newGroups = [...enemyGroups];
    if (key === 'enemy') {
      const selectedEnemy = mockEnemies.find((e) => e.id === parseInt(value));
      if (selectedEnemy) {
        newGroups[index].enemy = selectedEnemy;
      }
    } else if (key === 'count') {
      newGroups[index].count = parseInt(value);
    }
    setEnemyGroups(newGroups);
  };

  // Remove an enemy group
  const removeEnemyGroup = (index) => {
    const newGroups = enemyGroups.filter((_, i) => i !== index);
    setEnemyGroups(newGroups);
  };

  // Function to start battle, sending data to the worker
  const simulateBattle = () => {
    if (!workerRef.current) return;
    setIsLoading(true);
    setSimulationResult(null);
    setRealtimeLog([]);

    const simulationInterval = 100; // ms
    workerRef.current.postMessage({
      type: 'start',
      payload: { player, enemyGroups, simulationInterval },
    });
  };

  // Function to stop the battle
  const stopSimulation = () => {
    if (!workerRef.current) return;
    workerRef.current.postMessage({ type: 'stop' });
    setIsLoading(false);
    setSimulationResult({
      winner: 'stopped',
      elapsedTime: 0,
      playerStats: mockPlayer,
      enemyStats: [],
    });
    setRealtimeLog((prevLogs) => [
      ...prevLogs,
      '[시스템] 시뮬레이션이 중단되었습니다.',
    ]);
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
            className="flex items-center rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white"
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
            <h2 className="text-3xl font-bold text-white">Combat Lab</h2>
            <p className="mt-1 text-gray-400">
              1:1 및 1:N 전투 시뮬레이션을 실행합니다.
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={simulateBattle}
              disabled={isLoading}
              className="rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white shadow-lg shadow-indigo-600/30 transition-colors duration-300 hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isLoading ? '시뮬레이션 중...' : '전투 시뮬레이션 시작'}
            </button>
            {isLoading && (
              <button
                onClick={stopSimulation}
                className="rounded-lg bg-rose-600 px-4 py-2 font-semibold text-white shadow-lg shadow-rose-600/30 transition-colors duration-300 hover:bg-rose-500"
              >
                <StopCircleIcon className="mr-2 inline-block h-5 w-5" /> 중단
              </button>
            )}
          </div>
        </header>

        {/* Global Settings */}
        <section className="mb-6 rounded-lg border border-gray-700/50 bg-gray-800 p-6">
          <h3 className="mb-4 text-lg font-semibold text-white">
            시뮬레이션 설정
          </h3>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex-1">
              <label
                htmlFor="stage-input"
                className="mb-1 block text-sm font-medium text-gray-400"
              >
                현재 스테이지:
              </label>
              <select
                id="stage-input"
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                value={currentStage}
                onChange={(e) => setCurrentStage(Number(e.target.value))}
              >
                {Array.from({ length: 23 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    Stage {i + 1}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex-1">
              <label
                htmlFor="formula-input"
                className="mb-1 block text-sm font-medium text-gray-400"
              >
                전투 평점 함수 수식:
              </label>
              <input
                id="formula-input"
                type="text"
                value={combatRatingFormula}
                placeholder="예: log(x) + 5"
                onChange={(e) => setCombatRatingFormula(e.target.value)}
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
          </div>
        </section>

        {/* Combatant Selection */}
        <section className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Player A */}
          <div className="rounded-lg border border-gray-700/50 bg-gray-800 p-6">
            <h3 className="mb-4 flex items-center text-lg font-semibold text-white">
              <span className="mr-2 text-indigo-400">Player A</span>{' '}
              <BoltIcon className="h-5 w-5 text-indigo-400" />
            </h3>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-700 p-4">
                <h4 className="text-md mb-2 font-semibold text-white">
                  {player.name}
                </h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>
                    <span className="font-medium text-gray-400">HP:</span>{' '}
                    {player.hp}
                  </li>
                  <li>
                    <span className="font-medium text-gray-400">
                      전투 평점:
                    </span>{' '}
                    {player.combatRating}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Enemies */}
          <div className="rounded-lg border border-gray-700/50 bg-gray-800 p-6">
            <h3 className="mb-4 flex items-center justify-between text-lg font-semibold text-white">
              <span className="text-rose-400">Enemies</span>
              <button
                onClick={addEnemyGroup}
                disabled={enemyGroups.length >= 4}
                className="rounded-lg bg-gray-700 px-3 py-1 text-sm font-semibold text-gray-300 transition-colors duration-300 hover:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <PlusIcon className="mr-1 inline h-4 w-4" /> 적 추가
              </button>
            </h3>
            <div className="space-y-4">
              {enemyGroups.map((group, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 rounded-lg bg-gray-700 p-3"
                >
                  <div className="flex-1">
                    <label
                      htmlFor={`enemy-select-${index}`}
                      className="mb-1 block text-sm font-medium text-gray-400"
                    >
                      적 캐릭터:
                    </label>
                    <select
                      id={`enemy-select-${index}`}
                      className="w-full rounded-md border border-gray-500 bg-gray-600 px-3 py-2 text-white focus:ring-2 focus:ring-rose-500 focus:outline-none"
                      value={group.enemy.id}
                      onChange={(e) =>
                        updateEnemyGroup(index, 'enemy', e.target.value)
                      }
                    >
                      {mockEnemies.map((char) => (
                        <option key={char.id} value={char.id}>
                          {char.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="w-24">
                    <label
                      htmlFor={`count-input-${index}`}
                      className="mb-1 block text-sm font-medium text-gray-400"
                    >
                      수량:
                    </label>
                    <input
                      id={`count-input-${index}`}
                      type="number"
                      min="1"
                      max="10"
                      value={group.count}
                      onChange={(e) =>
                        updateEnemyGroup(index, 'count', e.target.value)
                      }
                      className="w-full rounded-md border border-gray-500 bg-gray-600 px-3 py-2 text-white focus:ring-2 focus:ring-rose-500 focus:outline-none"
                    />
                  </div>
                  <button
                    onClick={() => removeEnemyGroup(index)}
                    className="p-2 text-gray-400 transition-colors hover:text-white"
                  >
                    <XIcon className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Simulation Results */}
        <section className="rounded-lg border border-gray-700/50 bg-gray-800 p-6">
          <h3 className="mb-4 text-lg font-semibold text-white">
            전투 시뮬레이션 결과
          </h3>
          {isLoading && !simulationResult ? (
            <div className="flex items-center justify-center py-12">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-t-4 border-indigo-500"></div>
            </div>
          ) : simulationResult ? (
            <div>
              {/* Summary */}
              <div
                className={`mb-4 rounded-lg p-4 text-center font-bold text-white ${simulationResult.winner === 'player' ? 'bg-indigo-600' : simulationResult.winner === 'stopped' ? 'bg-gray-600' : 'bg-rose-600'}`}
              >
                <h4 className="text-xl">
                  {simulationResult.winner === 'player'
                    ? '승리!'
                    : simulationResult.winner === 'stopped'
                      ? '시뮬레이션 중단'
                      : '패배!'}
                </h4>
                <p className="mt-2 text-sm">
                  {simulationResult.winner === 'player'
                    ? `${simulationResult.playerStats.enemiesKilled}명의 적을 처치했습니다!`
                    : simulationResult.winner === 'stopped'
                      ? '사용자에 의해 시뮬레이션이 중단되었습니다.'
                      : '모든 아군 캐릭터가 쓰러졌습니다!'}
                </p>
                {simulationResult.elapsedTime > 0 && (
                  <p className="mt-1 text-xs">
                    총 전투 시간: {simulationResult.elapsedTime.toFixed(1)}초
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Player Results */}
                <div className="rounded-lg bg-gray-700 p-4">
                  <h4 className="mb-3 font-semibold text-gray-200">
                    {player.name}
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>
                      <span className="font-medium text-gray-400">
                        받은 총 피해량:
                      </span>{' '}
                      {simulationResult.playerStats.totalDamageReceived}
                    </li>
                    <li>
                      <span className="font-medium text-gray-400">회복량:</span>{' '}
                      {simulationResult.playerStats.totalHealing}
                    </li>
                    <li>
                      <span className="font-medium text-gray-400">
                        처치한 적 수:
                      </span>{' '}
                      {simulationResult.playerStats.enemiesKilled}
                    </li>
                    <li>
                      <span className="font-medium text-gray-400">
                        전투 종료 시 HP:
                      </span>{' '}
                      {Math.max(0, simulationResult.playerStats.currentHp)}
                    </li>
                  </ul>
                </div>

                {/* Enemies Results */}
                <div className="rounded-lg bg-gray-700 p-4">
                  <h4 className="mb-3 font-semibold text-gray-200">적 진영</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {simulationResult.enemyStats.map((enemy, index) => (
                      <li key={index} className="border-b border-gray-600 pb-2">
                        <span className="font-medium text-gray-400">
                          {enemy.name}:
                        </span>
                        <div className="ml-4">
                          <p>
                            상태:{' '}
                            <span
                              className={
                                enemy.isDead
                                  ? 'text-rose-400'
                                  : 'text-green-400'
                              }
                            >
                              {enemy.isDead ? '사망' : '생존'}
                            </span>
                          </p>
                          {enemy.isDead && (
                            <p>사망 시간: {enemy.deathTime.toFixed(1)}초</p>
                          )}
                          <p>받은 총 피해량: {enemy.totalDamageReceived}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="py-12 text-center text-gray-500">
              <p>
                캐릭터와 적을 설정하고 &apos;전투 시뮬레이션 시작&apos; 버튼을
                클릭하세요.
              </p>
            </div>
          )}

          {/* Real-time Log & Final Log */}
          <div className="mt-6 max-h-64 overflow-y-auto rounded-lg bg-gray-700 p-4">
            <h4 className="mb-2 font-semibold text-gray-400">전투 로그</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              {realtimeLog.map((entry, index) => (
                <li key={index}>{entry}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
