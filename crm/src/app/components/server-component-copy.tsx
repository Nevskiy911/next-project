import { headers } from 'next/headers';
import React from 'react';

export interface ServerComponentProps {
  children?: React.ReactNode;
}

export default function ServerComponentCopy({
  children,
}: ServerComponentProps) {
  const hdrs = headers();

  console.log('Server Component Copy');

  // Вивести як обʼєкт
  console.log(Object.fromEntries(hdrs.entries())); // ✅ працює
  return (
    <div>
      <span>Server Component Copy</span>
      {children}
    </div>
  );
}
