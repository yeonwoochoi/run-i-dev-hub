import { ReactNode } from 'react';

export default function Layout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <div className="flex h-screen flex-col">{children}</div>;
}
