'use client';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactNode } from 'react';

const queryClient = new QueryClient();

interface QueryClientProviderProps {
  children: ReactNode;
}

const QueryClientWrapper = ({ children }: QueryClientProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryClientWrapper;
