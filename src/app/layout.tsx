// Root layout.tsx for Next.js 14

import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inochamp 01',
  description: 'A project built with Next.js 14',
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
      }}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;