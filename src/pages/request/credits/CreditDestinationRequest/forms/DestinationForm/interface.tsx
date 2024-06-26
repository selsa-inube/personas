import { DestinationCard } from "@components/cards/credits/DestinationCard";
import { Text } from "@design/data/Text";
import { Select } from "@design/input/Select";
import { ISelectOption } from "@design/input/Select/types";
import { Grid } from "@design/layout/Grid";
import { Stack } from "@design/layout/Stack";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { FormikProps } from "formik";
import { getFieldState } from "src/utils/forms/forms";
import { IDestinationEntry, IDestinationProduct } from "./types";

interface DestinationFormUIProps {
  formik: FormikProps<IDestinationEntry>;
  loading?: boolean;
  destinations: ISelectOption[];
  onChangeProduct: (value: IDestinationProduct) => void;
  onChangeDestination: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

function DestinationFormUI(props: DestinationFormUIProps) {
  const {
    formik,
    loading,
    destinations,
    onChangeProduct,
    onChangeDestination,
  } = props;

  const isMobile = useMediaQuery("(max-width: 750px)");

  return (
    <form>
      <Stack direction="column" gap="s300">
        <Stack direction="column" gap="s200">
          <Text type="title" size="small">
            ¿Cuál es la destinación del crédito?
          </Text>
          <Select
            name="creditDestination"
            id="creditDestination"
            value={formik.values.creditDestination}
            size="compact"
            isFullWidth
            options={destinations}
            onBlur={formik.handleBlur}
            errorMessage={formik.errors.creditDestination}
            isDisabled={loading}
            state={getFieldState(formik, "creditDestination")}
            onChange={onChangeDestination}
          />
        </Stack>
        <Stack direction="column" gap="s200">
          {formik.values.creditDestination &&
            formik.values.creditDestination !== "other" && (
              <>
                <Text type="title" size="small">
                  ¿Cuál es el producto que deseas?
                </Text>

                <Grid templateColumns={isMobile ? "1fr" : "1fr 1fr"} gap="s200">
                  {formik.values.products.map(
                    (product) =>
                      product && (
                        <DestinationCard
                          id={formik.values.creditDestination}
                          title={product.title}
                          description={product.description || ""}
                          checked={
                            formik.values.selectedProduct?.id === product.id
                          }
                          maxAmount={product.maxAmount}
                          maxRate={product.maxRate}
                          maxDeadline={product.maxDeadline}
                          key={product.id}
                          onClick={() => onChangeProduct(product)}
                        />
                      ),
                  )}
                </Grid>
              </>
            )}
        </Stack>
      </Stack>
    </form>
  );
}

export { DestinationFormUI };
