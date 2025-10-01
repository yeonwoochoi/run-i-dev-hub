'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/clsx';
import { ButtonHTMLAttributes, forwardRef } from 'react';

const buttonVariants = cva(
  // --- 모든 버튼에 적용될 기본 스타일 ---
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        // --- Primary: 신규 생성 등 핵심 액션 버튼 ---
        // ex. AssetStudioPage의 '신규 생성' 버튼 스타일
        primary:
          'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:ring-indigo-500 focus-visible:ring-offset-gray-900',

        // --- Secondary: 페이지 이동 등 보조 액션 버튼 ---
        // ex. AssetStudioPage의 Pagination 버튼 스타일
        secondary:
          'border border-gray-600 bg-gray-700 text-gray-200 hover:bg-gray-600 focus-visible:ring-gray-500 focus-visible:ring-offset-gray-900',

        // --- Destructive: 삭제 등 위험한 액션 버튼 ---
        destructive:
          'bg-red-600 text-white hover:bg-red-400 focus-visible:ring-red-500 focus-visible:ring-offset-gray-900',

        // --- Ghost: 배경 없이 아이콘 등에 사용될 버튼 ---
        ghost: 'hover:bg-gray-700 hover:text-gray-100',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
