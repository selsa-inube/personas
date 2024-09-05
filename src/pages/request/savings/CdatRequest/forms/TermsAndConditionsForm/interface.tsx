import { inube } from "@design/tokens";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { Link } from "@inubekit/link";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { FormikProps } from "formik";
import {
  StyledTermsAndConditionsContainer,
  StyledTermsAndConditionsInfo,
} from "./styles";
import { ITermsAndConditionsEntry } from "./types";
import { Toggle } from "@inubekit/toggle";

const getTermsAndConditionsParag = (texts: string[]) => {
  return texts.map((text, index) => (
    <Text key={index} type="body" size="small">
      {text}
    </Text>
  ));
};

interface TermsAndConditionsFormUIProps {
  formik: FormikProps<ITermsAndConditionsEntry>;
  loading?: boolean;
}

function TermsAndConditionsFormUI(props: TermsAndConditionsFormUIProps) {
  const { formik, loading } = props;

  const isMobile = useMediaQuery("(max-width: 560px)");

  return (
    <form>
      <Stack
        direction="column"
        alignItems="flex-start"
        gap={isMobile ? inube.spacing.s200 : inube.spacing.s300}
      >
        <StyledTermsAndConditionsContainer $isMobile={isMobile}>
          <StyledTermsAndConditionsInfo $isMobile={isMobile}>
            {getTermsAndConditionsParag(formik.values.termsConditions)}
          </StyledTermsAndConditionsInfo>
        </StyledTermsAndConditionsContainer>
        <Toggle
          id="accept"
          name="accept"
          size={isMobile ? "small" : "large"}
          onChange={formik.handleChange}
          checked={formik.values.accept}
          disabled={loading}
          margin="0"
          padding="0"
        >
          Acepto los términos y condiciones
        </Toggle>
        <Toggle
          id="acceptDataPolicy"
          name="acceptDataPolicy"
          size={isMobile ? "small" : "large"}
          onChange={formik.handleChange}
          checked={formik.values.acceptDataPolicy}
          disabled={loading}
          margin="0"
          padding="0"
        >
          Acepto la{" "}
          <Link
            type="label"
            size="large"
            path={formik.values.dataPolicyUrl}
            target="_blank"
            rel="noreferrer"
          >
            Política de tratamiento de datos
          </Link>
        </Toggle>
      </Stack>
    </form>
  );
}

export { TermsAndConditionsFormUI };
