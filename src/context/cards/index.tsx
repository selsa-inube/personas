import { createContext, useMemo, useState } from "react";
import { IProduct } from "src/model/entity/product";
import { ICardsContext } from "./types";

const CardsContext = createContext<ICardsContext>({} as ICardsContext);

interface CardsProviderProps {
  children: React.ReactNode;
}

function CardsProvider(props: CardsProviderProps) {
  const { children } = props;
  const [cards, setCards] = useState<IProduct[]>([]);
  const [consumptions, setConsumptions] = useState<IProduct[]>([]);

  const [creditQuotas, setCreditQuotas] = useState<IProduct[]>([]);

  const authContext = useMemo(
    () => ({
      cards,
      creditQuotas,
      consumptions, 

      setCards,
      setCreditQuotas,
      setConsumptions
    }),
    [cards, creditQuotas, consumptions, setCards, setCreditQuotas, setConsumptions],
  );

  return (
    <CardsContext.Provider value={authContext}>
      {children}
    </CardsContext.Provider>
  );
}

export { CardsContext, CardsProvider };
export type { CardsProviderProps };
