'use client';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';

interface LayoutProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

const Providers: React.FC<LayoutProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>{children}</SessionProvider>
    </QueryClientProvider>
  );
};

export default Providers;
