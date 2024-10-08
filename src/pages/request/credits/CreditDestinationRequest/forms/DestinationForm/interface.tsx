import { DestinationCard } from "@components/cards/credits/DestinationCard";
import { Select } from "@design/input/Select";
import { inube } from "@design/tokens";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { Grid } from "@inubekit/grid";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { FormikProps } from "formik";
import { getFieldState } from "src/utils/forms/forms";
import { loadingProductsData } from "./config/loading";
import { IDestinationEntry, IDestinationProduct } from "./types";

interface DestinationFormUIProps {
  formik: FormikProps<IDestinationEntry>;
  loading?: boolean;
  loadingProducts: boolean;
  onChangeProduct: (value: IDestinationProduct) => void;
  onChangeDestination: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

function DestinationFormUI(props: DestinationFormUIProps) {
  const {
    formik,
    loading,
    loadingProducts,
    onChangeProduct,
    onChangeDestination,
  } = props;

  const isMobile = useMediaQuery("(max-width: 750px)");

  return (
    <form>
      <Stack direction="column" gap={inube.spacing.s300}>
        <Stack direction="column" gap={inube.spacing.s200}>
          <Text type="title" size="small">
            ¿Cuál es el destino del crédito?
          </Text>
          <Select
            name="creditDestination"
            id="creditDestination"
            value={formik.values.destination?.id || ""}
            size="compact"
            isFullWidth
            options={formik.values.destinations}
            onBlur={formik.handleBlur}
            errorMessage={formik.errors.destination}
            isDisabled={loading}
            state={getFieldState(formik, "creditDestination")}
            onChange={onChangeDestination}
            placeholder="Selecciona el destino del dinero"
          />
        </Stack>
        {formik.values.destination &&
          formik.values.destination.id !== "other" && (
            <Stack direction="column" gap={inube.spacing.s200}>
              <>
                <Text type="title" size="small">
                  ¿Cuál es el producto que deseas?
                </Text>

                {formik.values.products.length === 0 && !loadingProducts && (
                  <Text type="body" size="medium" appearance="gray">
                    El destino que selecciónate no tiene productos relacionados.
                  </Text>
                )}

                <Grid
                  templateColumns={`repeat(${isMobile ? 1 : 2}, 1fr)`}
                  autoRows="auto"
                  gap={inube.spacing.s200}
                >
                  {loadingProducts &&
                    loadingProductsData.map((product, index) => (
                      <DestinationCard
                        id={product.id}
                        title={product.title}
                        description={product.description || ""}
                        checked={false}
                        maxAmount={product.maxAmount}
                        maxRate={product.maxRate}
                        maxDeadline={product.maxDeadline}
                        key={index}
                        onClick={() => true}
                        loading
                      />
                    ))}

                  {formik.values.products.map((product) => (
                    <DestinationCard
                      id={product.id}
                      title={product.title}
                      description={product.description || ""}
                      checked={formik.values.product?.id === product.id}
                      maxAmount={product.maxAmount}
                      maxRate={product.maxRate}
                      maxDeadline={product.maxDeadline}
                      key={product.id}
                      onClick={() => onChangeProduct(product)}
                    />
                  ))}
                </Grid>
              </>
            </Stack>
          )}
      </Stack>
    </form>
  );
}

export { DestinationFormUI };
