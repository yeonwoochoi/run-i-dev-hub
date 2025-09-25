import { ReactNode } from 'react';
import '@/shared/styles/tailwind.css';

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
