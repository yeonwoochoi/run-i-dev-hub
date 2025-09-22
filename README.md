# Run-i Game Dev Hub

Run-i Game Dev Hub는 스타트업 환경에서 **개발 병목 현상**을 해결하기 위해 만든 웹 툴입니다.
기획자가 **코딩 없이 게임 데이터를 생성·관리**하고, 핵심 시스템(전투, 아이템 드랍, 강화)을 **실시간으로 시뮬레이션**할 수 있도록 지원합니다.
팀 전체의 개발 생산성을 극대화하는 것을 목표로 합니다.

---

## 프로젝트 주요 기능

**Asset Studio**
- 캐릭터, 아이템, 스킬 등 모든 게임 에셋 생성 및 관리
- Unity용 JSON Export 지원

**Combat Lab**
- 1:1 및 1:N 전투 시뮬레이션
- 상세 로그 제공

**Loot Lab**
- 등급 기반 아이템 드랍 시뮬레이션
- 통계적 검증 가능

**Forge Lab**
- 아이템 강화 시뮬레이션
- 성공 확률 및 재화 기대값 계산

---

## 기술 스택

| 구분        | 기술                                | 도입 이유 |
|------------|-----------------------------------|-----------|
| Core       | Next.js 14 (App Router), TypeScript | BFF 패턴과 안정적 타입 시스템으로 개발 안정성 확보 |
| 상태 관리   | TanStack Query, Zustand             | 서버/클라이언트 상태 분리 및 효율적 데이터 관리 |
| API 통신   | Axios, OpenAPI(Swagger)             | 명세 기반 안정적 프론트-백 협업 |
| 스타일링    | Tailwind CSS, Storybook             | 빠른 UI 개발 및 체계적 컴포넌트 문서화 |
| 폼 관리    | React-Hook-Form, Zod                | 복잡한 폼 최적화 및 강력한 유효성 검증 |
| 개발 환경   | pnpm, ESLint, Prettier, Husky       | 코드 품질 유지 및 개발 워크플로우 자동화 |
| CI/CD      | GitHub Actions, Vercel              | 테스트·빌드·배포 자동화 |

---

## 아키텍처

- **FSD(Feature-Sliced Design)** 기반, 기능 단위 모듈화
- **엄격한 계층 구조**: 상위 레이어 → 하위 레이어 의존성
- **BFF(Backend for Frontend)**: Next.js API Routes 활용, 프론트엔드와 백엔드 독립성 확보

---

## 시작하기

### 전제 조건
- Node.js v20.x 이상
- pnpm v9.x 이상

### 설치 및 실행
```bash
# 레포지토리 클론
git clone https://github.com/[Your-Username]/run-i-dev-hub.git
cd run-i-dev-hub

# 의존성 설치
pnpm install

# 환경 변수 설정
cp .env.example .env.local
# .env.local 파일에 필요한 환경 변수 입력

# 개발 서버 실행
pnpm dev
```
브라우저에서 `http://localhost:3000` 접속

---

### 주요 명령어
- `pnpm dev` : 개발 서버 실행 (Webpack)
- `pnpm dev:turbo` : 개발 서버 실행 (Turbopack, 빠른 HMR)
- `pnpm build` : 프로덕션 빌드
- `pnpm lint` : 코드 품질 검사
- `pnpm format` : 코드 스타일 자동 정리