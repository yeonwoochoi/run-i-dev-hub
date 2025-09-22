// eslint.config.mjs

// 기본적으로 필요한 모듈들
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

// 우리가 추가할 Prettier 관련 모듈들
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

// Next.js가 제공하는 기본 설정 (그대로 사용)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import('eslint').Linter.FlatConfig[]} */
const eslintConfig = [
  // 1. Next.js의 기본 설정들을 불러옵니다. (core-web-vitals, typescript 등)
  ...compat.extends('next/core-web-vitals', 'plugin:@typescript-eslint/recommended'),

  // 2. Prettier의 스타일 충돌 방지 설정을 추가합니다.
  prettierConfig,

  // 3. Prettier 규칙을 ESLint 규칙으로 통합하고, 커스텀 규칙을 정의합니다.
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      // Prettier 규칙 위반 시 에러 발생
      'prettier/prettier': 'error',

      // (선택) 프로젝트에서 필요 없는 규칙들은 여기서 비활성화할 수 있습니다.
      'prefer-const': 'warn', // const 대신 let을 쓰면 경고 표시
      '@typescript-eslint/no-explicit-any': 'warn', // any 타입 사용 시 경고 표시
      '@typescript-eslint/no-unused-vars': 'warn', // 사용하지 않는 변수 경고 표시
    },
  },
];

export default eslintConfig;