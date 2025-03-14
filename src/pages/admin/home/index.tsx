import { useMediaQuery } from "@hooks/useMediaQuery";
import { useAuth } from "@inube/auth";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "src/context/app";
import { CardsContext } from "src/context/cards";
import { CreditsContext } from "src/context/credits";
import { SavingsContext } from "src/context/savings";
import { IProduct } from "src/model/entity/product";
import { getCardsForUser } from "src/services/iclient/cards/getCards";
import { getCreditsForUser } from "src/services/iclient/credits/getCredits";
import { getSavingsCommitmentsForUser } from "src/services/iclient/savings/getCommitments";
import { getSavingsForUser } from "src/services/iclient/savings/getSavings";
import { HomeUI } from "./interface";

function Home() {
  const { credits, setCredits } = useContext(CreditsContext);
  const { cards, setCards } = useContext(CardsContext);
  const { commitments, savings, setCommitments, setSavings } =
    useContext(SavingsContext);
  const { accessToken } = useAuth();
  const { user } = useContext(AppContext);
  const [loadingSavings, setLoadingSavings] = useState(false);
  const [loadingCredits, setLoadingCredits] = useState(false);
  const [loadingCards, setLoadingCards] = useState(false);

  const isTablet = useMediaQuery("(max-width: 1100px)");

  const validateProducts = async () => {
    if (!accessToken || !user.identification) return;

    const combinedSavings = [
      ...savings.savingsAccounts,
      ...savings.savingsContributions,
      ...savings.cdats,
      ...savings.programmedSavings,
    ];

    credits.length === 0 && setLoadingCredits(true);

    getCreditsForUser(user.identification, accessToken)
      .then((credits) => {
        setCredits(credits);
      })
      .finally(() => {
        setLoadingCredits(false);
      });

    let savingAccountsResume: IProduct[] = savings.savingsAccounts.map(
      (savingAccount) => ({
        id: savingAccount.id,
        title: savingAccount.title,
        description: savingAccount.description,
        type: savingAccount.type,
        attributes: savingAccount.attributes,
      }),
    );

    getSavingsCommitmentsForUser(user.identification, accessToken).then(
      (commitments) => {
        setCommitments(commitments);
      },
    );

    combinedSavings.length === 0 && setLoadingSavings(true);
    cards.length === 0 && setLoadingCards(true);
    try {
      const newSavings = await getSavingsForUser(
        user.identification,
        accessToken,
      );

      setSavings(newSavings);
      savingAccountsResume = newSavings.savingsAccounts.map(
        (savingAccount) => ({
          id: savingAccount.id,
          title: savingAccount.title,
          description: savingAccount.description,
          type: savingAccount.type,
          attributes: savingAccount.attributes,
        }),
      );
    } catch (error) {
      console.info(error);
    } finally {
      setLoadingSavings(false);
    }

    getCardsForUser(user.identification, accessToken, savingAccountsResume)
      .then((credits) => {
        setCards(credits);
      })
      .finally(() => {
        setLoadingCards(false);
      });
  };

  useEffect(() => {
    validateProducts();
  }, [user, accessToken]);

  return (
    <HomeUI
      commitments={commitments}
      savingsAccounts={savings.savingsAccounts}
      savingsContributions={savings.savingsContributions}
      cdats={savings.cdats}
      programmedSavings={savings.programmedSavings}
      credits={credits}
      cards={cards}
      loadingSavings={loadingSavings}
      loadingCredits={loadingCredits}
      loadingCards={loadingCards}
      isTablet={isTablet}
    />
  );
}

export { Home };
