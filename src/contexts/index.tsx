import React, { ReactNode } from 'react';

import { CountdownProvider } from './CountdownContexts';
import { ChallengesProvider } from './ChallengesContexts';

interface ContextsProviderProps {
  children: ReactNode;
}

function ContextsProvider({ children }: ContextsProviderProps) {
  return (
    <ChallengesProvider>
      <CountdownProvider>
        {children}
      </CountdownProvider>
    </ChallengesProvider>
  );
}

export default ContextsProvider;
