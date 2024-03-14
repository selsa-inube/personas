import { Box } from "@components/cards/Box";
import { BoxAttribute } from "@components/cards/BoxAttribute";
import { QuickAccess } from "@components/cards/QuickAccess";
import { UsedQuotaModal } from "@components/modals/card/UsedQuotaModal";
import { quickLinks } from "@config/quickLinks";
import { Title } from "@design/data/Title";
import { Select } from "@design/input/Select";
import { ISelectOption } from "@design/input/Select/types";
import { Grid } from "@design/layout/Grid";
import { Stack } from "@design/layout/Stack";
import { Breadcrumbs } from "@design/navigation/Breadcrumbs";
import { inube } from "@design/tokens";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { MdArrowBack, MdOpenInNew, MdOutlineAttachMoney } from "react-icons/md";
import { currencyFormat } from "src/utils/currency";
import { crumbsCreditQuota } from "./config/navigation";
import {
  extractQuotaDetailsAttrs,
  formatQuotaDetailsAttrs,
} from "./config/product";
import { ISelectedProductState, IUsedQuotaModalState } from "./types";

interface CreditQuotaUIProps {
  cardId?: string;
  creditQuotaId?: string;
  productsOptions: ISelectOption[];
  selectedProduct: ISelectedProductState;
  usedQuotaModal: IUsedQuotaModalState;
  handleToggleUsedQuotaModal: () => void;
  handleChangeProduct: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

function CreditQuotaUI(props: CreditQuotaUIProps) {
  const {
    cardId,
    creditQuotaId,
    selectedProduct,
    productsOptions,
    usedQuotaModal,
    handleToggleUsedQuotaModal,
    handleChangeProduct,
  } = props;

  const isDesktop = useMediaQuery("(min-width: 1400px)");
  const isMobile = useMediaQuery("(max-width: 750px)");

  const attributes =
    selectedProduct && extractQuotaDetailsAttrs(selectedProduct.creditQuota);

  const formatedAttributes = formatQuotaDetailsAttrs(attributes);

  return (
    <>
      <Stack direction="column" gap="s300">
        <Breadcrumbs crumbs={crumbsCreditQuota(cardId, creditQuotaId)} />
        <Title
          title="Detalles de cupo"
          subtitle="Detalle del cupo de crédito"
          icon={<MdArrowBack />}
          navigatePage={`/my-cards/${cardId}`}
        />
      </Stack>

      <Grid
        gap="s600"
        margin={
          isDesktop ? `${inube.spacing.s600} 0 0` : `${inube.spacing.s300} 0 0`
        }
        templateColumns={isDesktop ? "1fr 250px" : "1fr"}
      >
        <Stack direction="column" gap="s300">
          <Select
            id="quotas"
            onChange={handleChangeProduct}
            label="Selección de producto"
            options={productsOptions}
            value={selectedProduct.creditQuota.id}
            isFullWidth
            readOnly={productsOptions.length == 1 ? true : false}
          />

          <Box
            title={selectedProduct.creditQuota.title}
            subtitle={selectedProduct.creditQuota.description}
            tags={selectedProduct.creditQuota.tags}
            icon={<MdOutlineAttachMoney size={34} />}
            collapsing={{ start: true, allow: false }}
          >
            <Grid templateColumns={isMobile ? "1fr" : "1fr 1fr"} gap="s100">
              {formatedAttributes.slice(0, 1).map((quotaDetail) => (
                <BoxAttribute
                  key={quotaDetail.id}
                  label={quotaDetail.label}
                  value={quotaDetail.value}
                />
              ))}
              {usedQuotaModal.data && (
                <BoxAttribute
                  label="Cupo usado:"
                  buttonIcon={<MdOpenInNew />}
                  buttonValue={currencyFormat(
                    usedQuotaModal.data.usedQuotaValue,
                  )}
                  onClickButton={handleToggleUsedQuotaModal}
                  withButton
                />
              )}

              {formatedAttributes.slice(1).map((quotaDetail) => (
                <BoxAttribute
                  key={quotaDetail.id}
                  label={quotaDetail.label}
                  value={quotaDetail.value}
                />
              ))}
            </Grid>
          </Box>
        </Stack>
        {isDesktop && <QuickAccess links={quickLinks} />}
      </Grid>
      {usedQuotaModal.show && usedQuotaModal.data && (
        <UsedQuotaModal
          portalId="modals"
          onCloseModal={handleToggleUsedQuotaModal}
          usedQuotaData={usedQuotaModal.data}
        />
      )}
    </>
  );
}

export { CreditQuotaUI };