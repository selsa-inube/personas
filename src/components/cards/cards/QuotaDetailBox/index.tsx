import { inube } from "@design/tokens";
import { Divider, Stack, Text } from "@inubekit/inubekit";
import { IAttribute } from "src/model/entity/product";
import { currencyFormat } from "src/utils/currency";
import { StyledQuotaDetailBox } from "./styles";

interface QuotaDetailBoxProps {
  title: string;
  paymentItems: IAttribute[];
  totalPayment: number;
}

function QuotaDetailBox(props: QuotaDetailBoxProps) {
  const { title, paymentItems, totalPayment } = props;

  return (
    <StyledQuotaDetailBox>
      <Stack direction="column" gap={inube.spacing.s250}>
        <Text type="title" size="small">
          {title}
        </Text>
        <Stack direction="column" gap={inube.spacing.s150}>
          {paymentItems.map(
            (item, index) =>
              item.value !== 0 && (
                <Stack key={index} justifyContent="space-between">
                  <Text type="label" size="medium">
                    {item.label}:
                  </Text>
                  <Text type="body" size="small" appearance="gray">
                    {currencyFormat(Number(item.value))}
                  </Text>
                </Stack>
              ),
          )}
        </Stack>
      </Stack>

      <Stack direction="column" gap={inube.spacing.s250}>
        <Divider />
        <Stack justifyContent="space-between">
          <Text type="title" size="medium" appearance="gray">
            Total:
          </Text>
          <Text type="title" size="medium">
            {currencyFormat(totalPayment)}
          </Text>
        </Stack>
      </Stack>
    </StyledQuotaDetailBox>
  );
}

export { QuotaDetailBox };
export type { QuotaDetailBoxProps };
