import { createContext, useMemo, useState } from "react";
import { ISavingsContext, ISavingsState } from "./types";

const SavingsContext = createContext<ISavingsContext>({} as ISavingsContext);

interface SavingsProviderProps {
  children: React.ReactNode;
}

function SavingsProvider(props: SavingsProviderProps) {
  const { children } = props;
  const [savings, setSavings] = useState<ISavingsState>({
    savingsAccounts: [],
    programmedSavings: [],
    savingsContributions: [],
    cdats: [],
    commitments: [],
  });

  const authContext = useMemo(
    () => ({
      savings,
      setSavings,
    }),
    [savings, setSavings],
  );

  return (
    <SavingsContext.Provider value={authContext}>
      {children}
    </SavingsContext.Provider>
  );
}

export { SavingsContext, SavingsProvider };
export type { SavingsProviderProps };
