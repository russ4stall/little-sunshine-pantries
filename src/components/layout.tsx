import React from 'react';

import Header from '@/components/header';
import Footer from '@/components/footer';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mb-auto flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
