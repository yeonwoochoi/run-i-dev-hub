'use client';

import React, { useState, useRef, useEffect } from 'react';

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
const Trash2Icon = (props) => (
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
    <path d="M3 6h18" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
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

// --- DATA ---
// Mock data for stats
const mockStats = [
  { id: 1, name: 'STR' },
  { id: 2, name: 'DEX' },
  { id: 3, name: 'INT' },
  { id: 4, name: 'LUK' },
  { id: 5, name: 'MaxHP' },
  { id: 6, name: 'MaxMP' },
];

const mockItemNames = {
  S: [
    '안파견의 곧은 생각',
    '안파견의 심판',
    '안파견의 집행',
    '안파견의 구원',
    '왕검의 축복',
    '왕검의 자애',
    '왕검의 억강',
    '왕검의 부약',
    '왕검의 대동정신',
    '부루의 번영',
    '부루의 명성',
    '부루의 영광',
    '부루의 화목',
    '해모수의 청룡관',
    '해모수의 용광의 칼',
    '해모수의 용비늘방패',
    '해모수의 용가죽 바지',
    '해모수의 용날개',
    '해부루의 안광',
    '해부루의 태양불꽃',
    '해부루의 열화',
    '해부루의 태양축복',
    '해부루의 홍염',
    '추모의 정복',
    '추모의 철옹성',
    '추모의 끈질긴 맹공',
    '추모의 자긍심',
    '추모의 균형자',
    '오지의 눈',
    '자오지의 정신',
    '자오지의 무게',
    '자오지의 광채',
    '자오지의 토대',
    '근우지의 승천',
    '근우지의 박차',
    '근우지의 손짓',
    '궁홀의 선견지명',
    '궁홀의 두개골망토',
    '궁홀의 독창',
    '치두남의 지혜',
    '치두남의 용기',
    '치두남의 평화',
    '치두남의 자애',
    '고무서의 면류관',
    '고무서의 활력',
    '고무서의 흰노루가죽망토',
    '금와의 영원한 통치',
    '금와의 손아귀',
    '금와의 권력',
    '대소의 도륙칼',
    '대소의 추진력',
    '대소의 인고',
    '웅백다의 순교',
    '웅백다의 신념',
    '웅백다의 침묵',
    '웅백다의 압력',
    '불여래의 포옹',
    '불여래의 집중',
    '불여래의 자제',
  ],
  A: [
    '혁서의 영혼',
    '주우양의 백호검',
    '지위리의 해부자',
    '거발한의 맥궁',
    '가륵의 매',
    '오사구의 부엉이',
    '달문의 갈래창',
    '우서한의 혀',
    '아술의 지진',
    '노을의 방패',
    '도해의 징',
    '아한의 청동거울',
    '흘달의 찰갑',
    '고불의 판갑',
    '대음의 용갑옷',
    '색불루의 도롱이',
    '아홀의 해골치마',
    '내휴의 청동치마',
    '매륵의 운혜',
    '구물의 태사혜',
    '여루의 징신',
    '고열가의 조용한 정의',
    '모수리의 무자비',
    '고해사의 활력',
    '고우루의 끝없는 경계',
    '고두막의 맹공',
  ],
  B: [
    '고시리의 속임수',
    '석제임의 초승달 검',
    '구을리의 고리자루큰칼',
    '구을의 비늘 단도',
    '한율의 용맹',
    '위나의 위엄',
    '여을의 저주 단도',
    '동엄의 곡도',
    '구모소의 호박도',
    '고흘의 백두대도',
    '소태의 가지창',
    '연나의 얼음 송곳',
    '솔나의 살무사창',
    '추로의 청룡장창',
    '두밀의 뇌운',
    '해모의 저승창',
    '마휴의 회오리',
    '등올의 주작창',
    '추밀의 현무창',
    '감물의 호랑이발톱창',
    '오루문의 명사수',
    '사벌의 청룡대궁',
    '물리의 주작대궁',
    '보을의 소나무 합성궁',
    '아라사의 무당개구리활',
    '여원흥의 말벌대궁',
    '맹남의 복어독쌍궁',
    '이전의 초승달 활',
    '소전의 대재앙',
    '노단의 영원한 독',
  ],
  C: [
    '거불리의 눈빛',
    '우야고의 검',
    '모사라의 장검',
    '태우의의 증오',
    '다의발의 혀',
    '거련의 절단기',
    '안부련의 광란',
    '양운의 독침',
    '갈고의 지옥불',
    '거야발의 천둥',
    '주무신의 파괴',
    '사와라의 사냥 활',
    '치액특의 독침활',
    '축다리의 바람활',
    '혁다세의 대궁',
    '거불단의 소나무 활',
    '마물의 복수',
    '다물의 덫',
    '두홀의 종말',
    '달음의 관통활',
    '음차의 단궁',
    '을우지의 지옥노',
    '덕리의 삼지창',
    '두라문의 금속창',
    '을불리의 작살',
    '을우지의 가시궁',
    '호의 깃발',
    '막연의 각성',
    '아화의 비명',
    '사리의 정의',
    '아리의 전쟁창',
    '갈지의 심판',
    '을아의 수호',
    '두막해의 방어벽',
    '독로의 전투방패',
    '아루의 가호',
    '아실여의 반사',
    '아도의 솥뚜껑',
    '아화지의 대노',
    '아사지의 지옥뼈',
    '아리손의 안개',
    '소이의 황사',
    '사우의 명령',
    '동기의 두개골',
    '다도의 가면',
    '사라의 저승가면',
    '가섭라의 왕관',
    '가리의 머리 보호',
    '대전나의 화관',
    '진을례의 뿔',
    '물길의 투구',
    '애친의 머리장식',
    '도무의 두건',
    '호갑의 얼굴 가리개',
    '오라의 손아귀',
    '이조의 주먹',
    '거세의 발톱',
    '자오사의 의지',
    '산신의 손목싸개',
    '백전의 손아귀',
    '중전의 무쇠',
    '사엄의 손길',
    '서한의 손등장갑',
    '물가의 손톱',
    '막진의 손보호구',
    '진단의 황금 가죽',
    '감정의 조끼',
    '소밀의 털옷',
    '사두막의 작업복',
    '갑비의 셔츠',
    '오립루의 인내력',
    '서시의 뼈갑옷',
    '안시의 상어이빨갑옷',
    '해모라의 곰가죽옷',
    '소정의 짧은 조끼',
    '아락의 곰가죽바지',
    '솔귀의 주술바지',
    '임나의 치마바지',
    '마밀의 쫄바지',
    '을나의 속바지',
    '마휴의 긴바지',
    '등나의 수호자',
    '해수의 멧돼지 치마',
    '오루문의 범가죽바지',
    '누사의 빤쓰',
    '이벌의 번개',
    '아륵의 태풍',
    '마휴의 폭주',
    '다두의 걸음',
    '내이의 덧신',
    '차음의 핏발자국',
    '불리의 질주',
    '여을의 재빠름',
    '엄루의 발톱',
    '감위의 나막신',
    '술리의 발굽',
    '고태의 쇠고랑',
    '소태이의 족쇄',
    '마건의 탐색',
    '천한의 팔찌',
    '노물의 수호',
    '도을의 가죽팔찌',
    '술휴의 팔목보호대',
    '사량의 염주',
    '지한의 약속',
    '인한의 피',
    '서위의 은장도',
    '가색의 악의',
    '해인의 정복',
    '수한의 단궁',
    '기욱의 각궁',
    '기석의 속박',
    '기윤의 광기',
    '기비의 재앙',
    '기준의 독설',
  ],
  M: [
    '수군의 뾰족칼',
    '수군의 단도',
    '수군의 송곳칼',
    '수군의 소검',
    '수군의 꼬챙이',
    '수군의 회칼',
    '수군의 주머니칼',
    '수군의 검',
    '수군의 장도',
    '수군의 흔한 칼',
    '수군의 쑤시개',
    '수군의 송곳창',
    '수군의 작살',
    '수군의 죽창',
    '수군의 삼지창',
    '수군의 뾰족한 창',
    '수군의 도깨비창',
    '수군의 전쟁창',
    '수군의 창',
    '수군의 장창',
    '수군의 무적방패',
    '수군의 작은방패',
    '수군의 사각방패',
    '수군의 나무방패',
    '수군의 뼈방패',
    '수군의 원방패',
    '수군의 가죽방패',
    '수군의 대나무 방패',
    '수군의 대형방패',
    '수군의 골각방패',
    '수군의 빨간 두건',
    '수군의 투모',
    '수군의 가죽 두건',
    '수군의 나무 투구',
    '수군의 지옥가면',
    '수군의 모자',
    '수군의 뼈투구',
    '수군의 뿔투구',
    '수군의 철투구',
    '수군의 천 두건',
    '수군의 더러운옷',
    '수군의 철갑옷',
    '수군의 전투갑옷',
    '수군의 가죽웃옷',
    '수군의 천웃옷',
    '수군의 철판 갑옷',
    '수군의 나무갑옷',
    '수군의 골편갑옷',
    '수군의 상어가죽옷',
    '수군의 고래가죽옷',
    '수군의 천 바지',
    '수군의 상어가죽바지',
    '수군의 무늬바지',
    '수군의 다리보호구',
    '수군의 허벅지 보호구',
    '수군의 다리싸개',
    '수군의 더러운 바지',
    '수군의 비단바지',
    '수군의 고래가죽바지',
    '수군의 팔 보호구',
    '수군의 손목 보호구',
    '수군의 가죽 손목띠',
    '수군의 팔 싸개',
    '수군의 완장',
    '수군의 손목대',
    '수군의 손목 싸개',
    '수군의 철 손목띠',
    '수군의 나무 보호구',
    '수군의 천 손목띠',
    '수군의 신발',
    '수군의 가죽장화',
    '수군의 군장화',
    '수군의 비단신',
    '수군의 무거운 신발',
    '수군의 장화',
    '수군의 짚신',
    '수군의 가죽 신발',
    '수군의 떨어진 신발',
    '수군의 소가죽신',
    '수군의 팔목장갑',
    '수군의 소가죽장갑',
    '수군의 천장갑',
    '수군의 비단장갑',
    '수군의 무늬장갑',
    '수군의 무거운 장갑',
    '수군의 철장갑',
    '수군의 행운장갑',
    '수군의 상어가죽장갑',
    '수군의 짧은 장갑',
    '수군의 어깨 보호구',
    '수군의 가죽 어깨걸이',
    '수군의 어깨갑옷',
    '수군의 어깨장식',
    '수군의 해골 견갑',
    '수군의 상어뼈견갑',
    '수군의 고래뼈견갑',
    '수군의 철견갑',
    '수군의 가죽견장',
    '수군의 비단견장',
    '수군의 상어가죽망토',
    '수군의 소가죽망토',
    '수군의 고래가죽망토',
    '수군의 천망토',
    '수군의 비단망토',
    '수군의 털망토',
    '수군의 긴 망토',
    '수군의 황금빛 망토',
    '수군의 붉은 빛 망토',
    '수군의 검은 망토',
    '수군의 가죽도포',
    '수군의 하얀도포',
    '수군의 비단도포',
    '수군의 누더기',
    '수군의 무명 가운',
    '수군의 무명',
    '수군의 우의',
    '수군의 장옷',
    '수군의 낡은 가운',
    '수군의 노란색 가운',
    '수군의 빨간색 가운',
    '수군의 대나무 활',
    '수군의 쌍궁',
    '수군의 저격궁',
    '수군의 원사궁',
    '수군의 낡은 활',
    '수군의 대궁',
    '수군의 전투활',
    '수군의 사냥활',
    '수군의 장궁',
    '수군의 단궁',
  ],
  N: [
    '수적의 뾰족칼',
    '수적의 단도',
    '수적의 송곳칼',
    '수적의 소검',
    '수적의 꼬챙이',
    '수적의 회칼',
    '수적의 주머니칼',
    '수적의 검',
    '수적의 장도',
    '수적의 흔한 칼',
    '수적의 쑤시개',
    '수적의 송곳창',
    '수적의 작살',
    '수적의 죽창',
    '수적의 삼지창',
    '수적의 뾰족한 창',
    '수적의 도깨비창',
    '수적의 전쟁창',
    '수적의 창',
    '수적의 장창',
    '수적의 무적방패',
    '수적의 작은방패',
    '수적의 사각방패',
    '수적의 나무방패',
    '수적의 뼈방패',
    '수적의 원방패',
    '수적의 가죽방패',
    '수적의 대나무 방패',
    '수적의 대형방패',
    '수적의 골각방패',
    '수적의 파란 두건',
    '수적의 투모',
    '수적의 가죽 두건',
    '수적의 나무 투구',
    '수적의 지옥가면',
    '수적의 모자',
    '수적의 뼈투구',
    '수적의 뿔투구',
    '수적의 철투구',
    '수적의 천 두건',
    '수적의 더러운옷',
    '수적의 철갑옷',
    '수적의 전투갑옷',
    '수적의 가죽웃옷',
    '수적의 천웃옷',
    '수적의 철판 갑옷',
    '수적의 나무갑옷',
    '수적의 골편갑옷',
    '수적의 상어가죽옷',
    '수적의 고래가죽옷',
    '수적의 천 바지',
    '수적의 상어가죽바지',
    '수적의 무늬바지',
    '수적의 다리보호구',
    '수적의 허벅지 보호구',
    '수적의 다리싸개',
    '수적의 더러운 바지',
    '수적의 비단바지',
    '수적의 고래가죽바지',
    '수적의 팔 보호구',
    '수적의 손목 보호구',
    '수적의 가죽 손목띠',
    '수적의 팔 싸개',
    '수적의 완장',
    '수적의 손목대',
    '수적의 손목 싸개',
    '수적의 철 손목띠',
    '수적의 나무 보호구',
    '수적의 천 손목띠',
    '수적의 신발',
    '수적의 가죽장화',
    '수적의 군장화',
    '수적의 비단신',
    '수적의 무거운 신발',
    '수적의 장화',
    '수적의 짚신',
    '수적의 가죽 신발',
    '수적의 떨어진 신발',
    '수적의 소가죽신',
    '수적의 팔목장갑',
    '수적의 소가죽장갑',
    '수적의 천장갑',
    '수적의 비단장갑',
    '수적의 무늬장갑',
    '수적의 무거운 장갑',
    '수적의 철장갑',
    '수적의 행운장갑',
    '수적의 상어가죽장갑',
    '수적의 짧은 장갑',
    '수적의 어깨 보호구',
    '수적의 가죽 어깨걸이',
    '수적의 어깨갑옷',
    '수적의 어깨장식',
    '수적의 해골 견갑',
    '수적의 상어뼈견갑',
    '수적의 고래뼈견갑',
    '수적의 철견갑',
    '수적의 가죽견장',
    '수적의 비단견장',
    '수적의 상어가죽망토',
    '수적의 소가죽망토',
    '수적의 고래가죽망토',
    '수적의 천망토',
    '수적의 비단망토',
    '수적의 털망토',
    '수적의 긴 망토',
    '수적의 황금빛 망토',
    '수적의 붉은 빛 망토',
    '수적의 검은 망토',
    '수적의 가죽도포',
    '수적의 하얀도포',
    '수적의 비단도포',
    '수적의 누더기',
    '수적의 무명 가운',
    '수적의 무명',
    '수적의 우의',
    '수적의 장옷',
    '수적의 낡은 가운',
    '수적의 노란색 가운',
    '수적의 빨간색 가운',
    '수적의 대나무 활',
    '수적의 쌍궁',
    '수적의 저격궁',
    '수적의 원사궁',
    '수적의 낡은 활',
    '수적의 대궁',
    '수적의 전투활',
    '수적의 사냥활',
    '수적의 장궁',
    '수적의 단궁',
  ],
};

// Function to generate the comprehensive mock item data
const generateItems = () => {
  let id = 10000;
  const items = [];
  for (const rank in mockItemNames) {
    mockItemNames[rank].forEach((name) => {
      items.push({ id: id++, name });
    });
  }
  return items;
};

const extendedMockItems = generateItems();

// --- FORM FIELD COMPONENTS ---
const InputField = ({ label, id, ...props }) => (
  <div>
    <label
      htmlFor={id}
      className="mb-1 block text-sm font-medium text-gray-400"
    >
      {label}
    </label>
    <input
      id={id}
      {...props}
      className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
    />
  </div>
);

const TextareaField = ({ label, id, ...props }) => (
  <div>
    <label
      htmlFor={id}
      className="mb-1 block text-sm font-medium text-gray-400"
    >
      {label}
    </label>
    <textarea
      id={id}
      {...props}
      rows="3"
      className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
    ></textarea>
  </div>
);

const SelectField = ({ label, id, children, ...props }) => (
  <div>
    <label
      htmlFor={id}
      className="mb-1 block text-sm font-medium text-gray-400"
    >
      {label}
    </label>
    <select
      id={id}
      {...props}
      className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
    >
      {children}
    </select>
  </div>
);

const CheckboxField = ({ label, id, ...props }) => (
  <div className="flex items-center">
    <input
      id={id}
      type="checkbox"
      {...props}
      className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-indigo-600 focus:ring-indigo-500"
    />
    <label htmlFor={id} className="ml-2 block text-sm text-gray-300">
      {label}
    </label>
  </div>
);

// --- NEW SEARCHABLE SELECT COMPONENT ---
const SearchableSelect = ({ label, id, value, onChange, items }) => {
  const [searchValue, setSearchValue] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const wrapperRef = useRef(null);

  const selectedItem = items.find((item) => item.id === value);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    setIsDropdownOpen(true);
  };

  const handleItemClick = (item) => {
    onChange(item.id);
    setIsDropdownOpen(false);
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="relative" ref={wrapperRef}>
      <label
        htmlFor={id}
        className="mb-1 block text-sm font-medium text-gray-400"
      >
        {label}
      </label>
      <input
        id={id}
        type="text"
        className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        value={isDropdownOpen ? searchValue : selectedItem?.name || ''}
        onChange={handleSearchChange}
        onFocus={() => {
          setIsDropdownOpen(true);
          setSearchValue('');
        }}
        placeholder="Search for an item..."
      />
      {isDropdownOpen && (
        <ul className="absolute z-10 mt-1 max-h-60 w-full overflow-y-auto rounded-md border border-gray-600 bg-gray-800 shadow-lg">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <li
                key={item.id}
                onClick={() => handleItemClick(item)}
                className="cursor-pointer px-3 py-2 hover:bg-indigo-600 hover:text-white"
              >
                {item.name}
              </li>
            ))
          ) : (
            <li className="px-3 py-2 text-gray-500">No results found.</li>
          )}
        </ul>
      )}
    </div>
  );
};

// --- DYNAMIC FORMS ---
const BuffForm = () => (
  <div className="space-y-4">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <InputField
        label="Name (Korean)"
        id="nameKr"
        type="text"
        placeholder="출혈"
      />
      <InputField
        label="Name (English)"
        id="nameEn"
        type="text"
        placeholder="Bleed"
      />
    </div>
    <TextareaField
      label="Description (Korean)"
      id="descriptionKr"
      placeholder="매초 지속적인 피해를 입습니다."
    />
    <TextareaField
      label="Description (English)"
      id="descriptionEn"
      placeholder="Takes continuous damage every second."
    />
    <CheckboxField label="Is Debuff?" id="isDebuff" />
  </div>
);

const EnemyForm = () => {
  const [dropItems, setDropItems] = useState([
    { itemId: 10000, probability: 0.1 },
  ]);
  const [stats, setStats] = useState([{ statId: 1, amount: 5 }]);

  const handleDropItemChange = (index, field, value) => {
    const newItems = [...dropItems];
    const val = field === 'itemId' ? parseInt(value) : parseFloat(value);
    newItems[index][field] = val;
    setDropItems(newItems);
  };

  const addDropItem = () =>
    setDropItems([...dropItems, { itemId: 10000, probability: 0.01 }]);
  const removeDropItem = (index) =>
    setDropItems(dropItems.filter((_, i) => i !== index));

  const handleStatChange = (index, field, value) => {
    const newStats = [...stats];
    newStats[index][field] = parseInt(value);
    setStats(newStats);
  };

  const addStat = () => setStats([...stats, { statId: 1, amount: 0 }]);
  const removeStat = (index) => setStats(stats.filter((_, i) => i !== index));

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <InputField
            label="Name (Korean)"
            id="nameKr"
            type="text"
            placeholder="호 최고위 수적1"
          />
          <InputField
            label="Name (English)"
            id="nameEn"
            type="text"
            placeholder="Hoh Top Brass Pirate1"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <SelectField label="Type" id="type">
            <option value="0">Normal</option>
            <option value="1">Elite</option>
            <option value="2">Boss</option>
          </SelectField>
          <InputField label="Level" id="level" type="number" placeholder="5" />
          <InputField
            label="Image ID"
            id="image"
            type="text"
            placeholder="sp_icon_hoh_top_brass_pirate_1"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <InputField label="EXP" id="exp" type="number" placeholder="15" />
          <InputField
            label="Max HP"
            id="maxHp"
            type="number"
            placeholder="150"
          />
          <InputField
            label="Max MP"
            id="maxMp"
            type="number"
            placeholder="20"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <InputField
            label="Min Money"
            id="money_min"
            type="number"
            placeholder="10"
          />
          <InputField
            label="Max Money"
            id="money_max"
            type="number"
            placeholder="25"
          />
          <InputField
            label="Prefab Name"
            id="prefabName"
            type="text"
            placeholder="PF_Enemy_Hoh_Top_Brass_Pirate_1"
          />
        </div>
        <fieldset className="rounded-md border border-gray-600 p-4">
          <legend className="px-2 text-sm font-medium text-gray-400">
            Base Stats
          </legend>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <InputField
              label="WATK"
              id="base_watk"
              type="number"
              placeholder="20"
            />
            <InputField
              label="MATK"
              id="base_matk"
              type="number"
              placeholder="0"
            />
            <InputField
              label="WDEF"
              id="base_wdef"
              type="number"
              placeholder="10"
            />
            <InputField
              label="MDEF"
              id="base_mdef"
              type="number"
              placeholder="5"
            />
          </div>
        </fieldset>
      </div>

      {/* Drop Items */}
      <fieldset className="rounded-md border border-gray-600 p-4">
        <legend className="px-2 text-sm font-medium text-gray-400">
          Drop Items
        </legend>
        <div className="space-y-3">
          {dropItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 rounded-md bg-gray-700/50 p-2"
            >
              <div className="flex-1">
                <SearchableSelect
                  label={`Item ${index + 1}`}
                  id={`drop_item_${index}`}
                  value={item.itemId}
                  onChange={(value) =>
                    handleDropItemChange(index, 'itemId', value)
                  }
                  items={extendedMockItems}
                />
              </div>
              <div className="w-40">
                <InputField
                  label="Probability"
                  id={`drop_prob_${index}`}
                  type="number"
                  step="0.01"
                  min="0"
                  max="1"
                  value={item.probability}
                  onChange={(e) =>
                    handleDropItemChange(index, 'probability', e.target.value)
                  }
                />
              </div>
              <button
                onClick={() => removeDropItem(index)}
                className="mt-6 p-2 text-gray-400 transition-colors hover:text-rose-400"
              >
                <Trash2Icon className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={addDropItem}
          className="mt-4 flex items-center rounded-lg bg-gray-600 px-3 py-1.5 text-sm font-semibold text-gray-200 transition-colors hover:bg-gray-500"
        >
          <PlusIcon className="mr-1 h-4 w-4" /> Add Drop Item
        </button>
      </fieldset>

      {/* Stats */}
      <fieldset className="rounded-md border border-gray-600 p-4">
        <legend className="px-2 text-sm font-medium text-gray-400">
          Stats
        </legend>
        <div className="space-y-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center gap-2 rounded-md bg-gray-700/50 p-2"
            >
              <div className="flex-1">
                <SelectField
                  label={`Stat ${index + 1}`}
                  id={`stat_id_${index}`}
                  value={stat.statId}
                  onChange={(e) =>
                    handleStatChange(index, 'statId', e.target.value)
                  }
                >
                  {mockStats.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
                </SelectField>
              </div>
              <div className="w-40">
                <InputField
                  label="Amount"
                  id={`stat_amount_${index}`}
                  type="number"
                  value={stat.amount}
                  onChange={(e) =>
                    handleStatChange(index, 'amount', e.target.value)
                  }
                />
              </div>
              <button
                onClick={() => removeStat(index)}
                className="mt-6 p-2 text-gray-400 transition-colors hover:text-rose-400"
              >
                <Trash2Icon className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={addStat}
          className="mt-4 flex items-center rounded-lg bg-gray-600 px-3 py-1.5 text-sm font-semibold text-gray-200 transition-colors hover:bg-gray-500"
        >
          <PlusIcon className="mr-1 h-4 w-4" /> Add Stat
        </button>
      </fieldset>
    </div>
  );
};

// Placeholder for other forms
const GenericForm = ({ type }) => (
  <div className="py-12 text-center text-gray-500">
    <p>{type} 생성 폼이 여기에 표시됩니다.</p>
  </div>
);

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

// --- NEW ASSET PAGE COMPONENT ---
export default function App() {
  const [assetType, setAssetType] = useState('Enemy');

  const renderForm = () => {
    switch (assetType) {
      case 'Buff':
        return <BuffForm />;
      case 'Enemy':
        return <EnemyForm />;
      // Add cases for other types, using GenericForm as a placeholder
      case 'Item':
      case 'Map':
      case 'Npc':
      case 'Quest':
      case 'Set-Item':
      case 'Stat':
        return <GenericForm type={assetType} />;
      default:
        return null;
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
            <h2 className="text-3xl font-bold text-white">New Asset</h2>
            <p className="mt-1 text-gray-400">
              새로운 게임 에셋 데이터를 생성합니다.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/asset-studio-sample"
              className="rounded-lg bg-gray-700 px-4 py-2 font-semibold text-gray-300 transition-colors duration-300 hover:bg-gray-600"
            >
              취소
            </a>
            <button className="rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white shadow-lg shadow-indigo-600/30 transition-colors duration-300 hover:bg-indigo-500">
              {assetType} 생성
            </button>
          </div>
        </header>

        {/* Asset Type Selector */}
        <section className="mb-8">
          <SelectField
            label="Asset Type"
            id="assetType"
            value={assetType}
            onChange={(e) => setAssetType(e.target.value)}
          >
            {domains.map((domain) => (
              <option key={domain} value={domain}>
                {domain}
              </option>
            ))}
          </SelectField>
        </section>

        {/* Dynamic Form Area */}
        <section className="rounded-lg border border-gray-700/50 bg-gray-800 p-6">
          <h3 className="mb-6 border-b border-gray-700 pb-4 text-lg font-semibold text-white">
            {assetType} Details
          </h3>
          {renderForm()}
        </section>
      </main>
    </div>
  );
}
