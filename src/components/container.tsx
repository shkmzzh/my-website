import React, { ReactNode } from 'react';

export default function Container({ children }: { children?: ReactNode }) {
  return (
    <section className="max-w-content min-w-content min-h-screen mx-auto">
      {children}
    </section>
  );
}
