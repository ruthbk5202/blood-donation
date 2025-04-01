'use client';

import { usePathname } from 'next/navigation';
import Nav from '../navfirst/Nav';      
import Footer from '../Footer/footer';

export default function LayoutHandler({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <Nav />}
      <main>{children}</main>
      {!isAdminRoute && <Footer />}
    </>
  );
}