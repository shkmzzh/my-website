import React, { ReactNode } from 'react';
import Header from '@/components/header';

export default function Container({ children }: { children?: ReactNode }) {
  return (
    <section className="max-w-content min-w-content min-h-screen mx-auto">
      <Header></Header>
      {children}
    </section>
  );
}
