import { Title } from "@design/data/Title";
import { inube } from "@design/tokens";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { Breadcrumbs } from "@inubekit/breadcrumbs";
import { Button } from "@inubekit/button";
import { Grid } from "@inubekit/grid";
import { Stack } from "@inubekit/stack";
import { MdAdd, MdArrowBack, MdHistory } from "react-icons/md";
import { crumbsMyPQRS } from "./config/navigation";
import { IPQRS } from "src/model/entity/pqrs";
import { generateAttributes } from "./config/attributeRecord";
import { Divider } from "@inubekit/divider";
import { StyledContainer } from "./styles";
import { RecordCard } from "@components/cards/RecordCard";
import { EMovementType } from "src/model/entity/product";
import { QuickAccess } from "@components/cards/QuickAccess";
import { quickLinks } from "@config/quickLinks";

interface MyPQRSUIProps {
  pqrsHistory: IPQRS[];
  loading: boolean;
  refreshTime: number;
  goToPQRS: (id: string) => void;
  onRefreshHistory: () => void;
}

function MyPQRSUI(props: MyPQRSUIProps) {
  const { pqrsHistory, loading, refreshTime, goToPQRS, onRefreshHistory } =
    props;
  const isDesktop = useMediaQuery("(min-width: 1400px)");
  return (
    <>
      <Stack direction="column" gap={inube.spacing.s300}>
        <Breadcrumbs crumbs={crumbsMyPQRS} />
        <Title
          title="Mis PQRS"
          subtitle="Realiza seguimiento a las solicitudes de tus productos"
          icon={<MdArrowBack />}
          navigatePage="/"
        />
      </Stack>
      <Grid
        gap={inube.spacing.s600}
        templateColumns={isDesktop ? "1fr 250px" : "1fr"}
        margin={
          isDesktop ? `${inube.spacing.s600} 0 0` : `${inube.spacing.s300} 0 0`
        }
      >
        <Stack direction="column" gap={inube.spacing.s300}>
          <Stack
            justifyContent="flex-end"
            alignItems="flex-end"
            gap={inube.spacing.s150}
          >
            <Button
              appearance="primary"
              variant="outlined"
              spacing="compact"
              iconBefore={<MdHistory />}
              onClick={onRefreshHistory}
              loading={loading}
              disabled={!loading && refreshTime !== 0}
            >
              {refreshTime !== 0 ? `${refreshTime} Seg.` : "Refrescar"}
            </Button>
            <Button
              appearance="primary"
              variant="filled"
              spacing="compact"
              iconBefore={<MdAdd />}
              type="link"
              path="/my-pqrs/create"
            >
              Crear PQRS
            </Button>
          </Stack>
          {pqrsHistory.length > 0 && (
            <>
              <StyledContainer>
                {pqrsHistory.map((pqrs, index) => (
                  <Stack
                    direction="column"
                    width="100%"
                    key={pqrs.id}
                    gap={inube.spacing.s200}
                  >
                    <RecordCard
                      id={pqrs.id}
                      type={EMovementType.PQRS}
                      description={pqrs.title}
                      tag={pqrs.tag}
                      attributes={generateAttributes(pqrs)}
                      datesWithTime
                      withExpandingIcon={pqrs.tag.label === "En revisión"}
                      onClick={() => goToPQRS(pqrs.id)}
                    />
                    {index !== pqrsHistory.length - 1 && <Divider dashed />}
                  </Stack>
                ))}
              </StyledContainer>
              <Stack direction="column" alignItems="center">
                <Button
                  appearance="primary"
                  variant="none"
                  iconBefore={<MdAdd />}
                  loading={loading}
                  disabled={pqrsHistory.length <= 5}
                >
                  Ver más PQRS
                </Button>
              </Stack>
            </>
          )}
        </Stack>
        {isDesktop && <QuickAccess links={quickLinks} />}
      </Grid>
    </>
  );
}

export { MyPQRSUI };