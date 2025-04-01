

import type { Metadata } from 'next';
import LayoutHandler from './components/Layout/Layout';
import './globals.css';

export const metadata: Metadata = {
  title: 'blood donation',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LayoutHandler> 
          {children}
        </LayoutHandler>
      </body>
    </html>
  );
}