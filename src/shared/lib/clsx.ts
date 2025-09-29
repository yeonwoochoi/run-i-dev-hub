import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Tailwind CSS 클래스를 병합하고 조건부 클래스를 적용하는 유틸리티 함수입니다.
 *
 * clsx: 조건부 클래스를 포함한 여러 클래스 입력을 하나의 문자열로 편리하게 결합합니다.
 *       (예: { 'bg-red-500': true } -> 'bg-red-500')
 *
 * twMerge: clsx로 결합된 클래스 문자열 내의 충돌을 해결합니다. Tailwind의 규칙에 따라
 *          논리적으로 마지막에 적용되어야 할 클래스만 남깁니다.
 *          (예: 'p-2 p-4' -> 'p-4')
 *
 * 이 두 가지를 함께 사용함으로써, 재사용 가능한 컴포넌트에서 기본 스타일과
 * 외부에서 주입된 스타일이 충돌 없이 안전하게 병합되도록 보장합니다.
 *
 * @param inputs - 클래스 문자열, 객체, 배열 등 clsx가 지원하는 모든 타입의 입력
 * @returns 최종적으로 병합 및 정리된 클래스 문자열
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
