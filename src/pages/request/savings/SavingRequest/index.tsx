import { QuickAccess } from "@components/cards/QuickAccess";
import { RequestCard } from "@components/cards/RequestCard";
import { quickLinks } from "@config/quickLinks";
import { Text } from "@design/data/Text";
import { Title } from "@design/data/Title";
import { Grid } from "@design/layout/Grid";
import { Stack } from "@design/layout/Stack";
import { Breadcrumbs } from "@design/navigation/Breadcrumbs";
import { inube } from "@design/tokens";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { savingRequestCards } from "./config/cards";
import { crumbsSavingRequest } from "./config/navigation";

function SavingRequest() {
  const navigate = useNavigate();

  const isDesktop = useMediaQuery("(min-width: 1400px)");

  const handleCardNavigate = (path: string) => {
    navigate(`/savings/${path}`);
  };

  return (
    <>
      <Stack direction="column" gap="s300">
        <Breadcrumbs crumbs={crumbsSavingRequest} />
        <Title
          title="Solicitud de ahorro"
          subtitle="Genera tu solicitud de ahorro"
          icon={<MdArrowBack />}
          navigatePage="/"
        />
      </Stack>

      <Grid
        gap="s600"
        margin={
          isDesktop ? `${inube.spacing.s600} 0 0` : `${inube.spacing.s300} 0 0`
        }
        templateColumns={isDesktop ? "1fr 250px" : "1fr"}
      >
        <Stack direction="column" gap={isDesktop ? "s400" : "s250"}>
          <Text type="title" size="small">
            Aquí encontraras las opciones que puedes usar para realizar tu
            solicitud de crédito.
          </Text>

          <Stack direction="column" gap="s300">
            {savingRequestCards.map((card, index) => (
              <RequestCard
                key={index}
                title={card.title}
                descriptions={card.descriptions}
                onClick={() => handleCardNavigate(card.navigateTo)}
              />
            ))}
          </Stack>
        </Stack>
        {isDesktop && <QuickAccess links={quickLinks} />}
      </Grid>
    </>
  );
}

export { SavingRequest };
