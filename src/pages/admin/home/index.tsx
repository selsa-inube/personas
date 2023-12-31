import { useAuth } from "@inube/auth";
import { IMessage } from "@ptypes/messages.types";
import { useContext, useEffect, useState } from "react";
import { MdSentimentNeutral } from "react-icons/md";
import { CreditsContext } from "src/context/credits";
import { getCreditsForUser } from "src/services/iclient/credits";
import { initialMessageState } from "src/utils/messages";
import { HomeUI } from "./interface";
import {
  getInvestmentsProducts,
  productsCommitments,
  savingsAccountsMock,
  savingsStatutoryContributionsMock,
} from "./utils";

function Home() {
  const { credits, setCredits } = useContext(CreditsContext);
  const { user } = useAuth();
  const [message, setMessage] = useState<IMessage>(initialMessageState);

  const cdats = user && getInvestmentsProducts(user.identification, "CD");
  const programmedSavings =
    user && getInvestmentsProducts(user.identification, "AP");

  useEffect(() => {
    if (user) {
      getCreditsForUser(user?.identification)
        .then((credits) => {
          setCredits(credits);
        })
        .catch((error) => {
          setMessage({
            show: true,
            title: "¡Uy, algo salió mal!",
            description: error.message,
            icon: <MdSentimentNeutral size={18} />,
            appearance: "error",
          });
        });
    }
  }, []);

  const handleCloseMessage = () => {
    setMessage(initialMessageState);
  };

  return (
    <HomeUI
      productsCommitments={productsCommitments}
      savingsAccountsMock={savingsAccountsMock}
      savingsStatutoryContributionsMock={savingsStatutoryContributionsMock}
      cdats={cdats}
      programmedSavings={programmedSavings}
      credits={credits}
      message={message}
      onCloseMessage={handleCloseMessage}
    />
  );
}

export { Home };
