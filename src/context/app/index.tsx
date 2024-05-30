import { useAuth } from "@inube/auth";
import { IUser } from "@inube/auth/dist/types/user";
import { superUsers } from "@pages/admin/switchUser/config/users";
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { IFeatureFlag } from "src/model/entity/featureFlag";
import { saveTrafficTracking } from "src/services/analytics/saveTrafficTracking";
import { IAppContext } from "./types";
import { getAppFeatureFlags } from "./utils";

const AppContext = createContext<IAppContext>({} as IAppContext);

interface AppProviderProps {
  children: React.ReactNode;
}

function AppProvider(props: AppProviderProps) {
  const { children } = props;

  const [featureFlags, setFeatureFlags] = useState<IFeatureFlag[]>([]);

  const { user: authUser } = useAuth();

  const [user, setUser] = useState<IUser>({
    company: authUser?.company || "",
    email: authUser?.email || "",
    identification: authUser?.identification || "",
    phone: authUser?.phone || "",
    firstLastName: authUser?.firstLastName || "",
    secondLastName: authUser?.secondLastName || "",
    firstName: authUser?.firstName || "",
    secondName: authUser?.secondName || "",
    id: authUser?.id || "",
    type: authUser?.type || "",
  });

  useEffect(() => {
    getAppFeatureFlags().then((flags) => {
      setFeatureFlags(flags);
    });

    saveTrafficTracking(user.identification);
  }, []);

  useEffect(() => {
    const consultingUser = sessionStorage.getItem("consultingUser");

    if (consultingUser) {
      const consultingUserJson = JSON.parse(consultingUser);
      setUser((prev) => ({ ...prev, identification: consultingUserJson.id }));
      return;
    }

    const location = window.location;
    if (location.href.includes("switch-user")) return;

    if (superUsers.includes(user.identification)) {
      location.replace(`/switch-user?redirect_to=${location.pathname}`);
    }
  }, []);

  const getFlag = useCallback(
    (flagId: string) => {
      const [scope, category, product, flagCode] = flagId.split(".");

      const foundFlag = featureFlags.find((flag) => {
        return flag[scope]?.[category]?.[product]?.[flagCode];
      });

      if (!foundFlag) {
        return {
          id: flagCode,
          name: "",
          description: "",
          value: false,
        };
      }

      return foundFlag?.[scope][category][product][flagCode];
    },
    [featureFlags],
  );

  const appContext = useMemo(
    () => ({
      user,

      setUser,
      setFeatureFlags,
      getFlag,
    }),
    [user, setUser, setFeatureFlags, getFlag],
  );

  return (
    <AppContext.Provider value={appContext}>{children}</AppContext.Provider>
  );
}

export { AppContext, AppProvider };
export type { AppProviderProps };
