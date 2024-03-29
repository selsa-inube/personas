import { useAuth } from "@inube/auth";
import { useContext, useEffect, useState } from "react";
import { CreditsContext } from "src/context/credits";

import { MyCreditsUI } from "./interface";
import { getCreditsForUser } from "src/services/iclient/credits/getCredits";

function MyCredits() {
  const { credits, setCredits } = useContext(CreditsContext);
  const [loading, setLoading] = useState(false);
  const { user, accessToken } = useAuth();

  useEffect(() => {
    if (user && accessToken && credits.length === 0) {
      setLoading(true);
      getCreditsForUser(user?.identification, accessToken)
        .then((credits) => {
          setCredits(credits);
        })
        .catch((error) => {
          console.info(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [user, accessToken, credits]);

  return <MyCreditsUI loading={loading} credits={credits} />;
}

export { MyCredits };
