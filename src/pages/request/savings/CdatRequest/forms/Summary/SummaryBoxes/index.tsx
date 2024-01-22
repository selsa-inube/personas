import { BoxAttribute } from "@components/cards/BoxAttribute";
import { Stack } from "@design/layout/Stack";
import { IContactChannelsEntry } from "@forms/ContactChannelsForm/types";
import { activeDM } from "src/model/domains/general/activedm";
import { currencyFormat } from "src/utils/currency";
import { IFormsCdatRequest } from "../../../types";
import { IInvestmentEntry } from "../../InvestmentForm/types";
import { IConditionsEntry } from "../../ConditionsForm/types";
import { peridiocityDM } from "src/model/domains/general/peridiocity";

import { IInvestmentNameEntry } from "../../InvestmentNameForm/types";
import { IRefundEntry } from "../../RefundForm/types";
import { getValueOfDomain } from "@mocks/domains/domainService.mocks";

const renderInvestmentSummary = (
  values: IInvestmentEntry,
  isTablet: boolean,
) => (
  <Stack direction="column" gap={isTablet ? "s200" : "s250"} width="100%">
    <BoxAttribute
      label="Valor de la inversión:"
      value={currencyFormat(Number(values.valueInvestment))}
    />
  </Stack>
);

const renderConditionsSummary = (values: IConditionsEntry) => (
  <Stack direction="column" gap="s100" width="100%">
    <BoxAttribute
      label="Pago de intereses:"
      value={peridiocityDM.valueOf(values.interestPayment)?.value}
    />
    <BoxAttribute label="Número de días:" value={values.deadlineDays} />
  </Stack>
);

const renderRefundSummary = (values: IRefundEntry) => {
  return (
    <Stack direction="column" gap="s100" width="100%">
      <BoxAttribute
        label="Forma de reembolso:"
        value={getValueOfDomain(values.refundMethod, "refundMethod")?.value}
      />
      <BoxAttribute label="Cuenta:" value={values.accountDescription} />
    </Stack>
  );
};

const renderInvestmentNameSummary = (
  values: IInvestmentNameEntry,
  isTablet: boolean,
) => (
  <Stack direction="column" gap={isTablet ? "s200" : "s250"} width="100%">
    <BoxAttribute label="Nombre del producto:" value={values.productName} />
  </Stack>
);

const renderContactChannelsSummary = (values: IContactChannelsEntry) => (
  <Stack width="100%" direction="column" gap="s100">
    <BoxAttribute label="Teléfono:" value={values.landlinePhone} />
    <BoxAttribute label="Celular:" value={values.cellPhone} />
    <BoxAttribute label="Correo:" value={values.email} />
    <BoxAttribute
      label="Acepta política de tratamiento de datos:"
      value={values.acceptDataPolicy ? activeDM.Y.value : activeDM.N.value}
    />
    <BoxAttribute
      label="Autoriza recibir información:"
      value={values.acceptNotifications ? activeDM.Y.value : activeDM.N.value}
    />
  </Stack>
);

interface SummaryBoxesProps {
  cdatRequest: IFormsCdatRequest;
  stepKey: string;
  isTablet: boolean;
}

function SummaryBoxes(props: SummaryBoxesProps) {
  const { cdatRequest, stepKey, isTablet } = props;
  return (
    <>
      {stepKey === "investment" &&
        renderInvestmentSummary(cdatRequest.investment.values, isTablet)}
      {stepKey === "conditions" &&
        renderConditionsSummary(cdatRequest.conditions.values)}
      {stepKey === "refund" && renderRefundSummary(cdatRequest.refund.values)}
      {stepKey === "investmentName" &&
        renderInvestmentNameSummary(
          cdatRequest.investmentName.values,
          isTablet,
        )}
      {stepKey === "contactChannels" &&
        renderContactChannelsSummary(cdatRequest.contactChannels.values)}
    </>
  );
}

export { SummaryBoxes };
