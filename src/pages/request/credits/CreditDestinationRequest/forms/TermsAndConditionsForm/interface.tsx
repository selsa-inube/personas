import { Text } from "@design/data/Text";
import { Switch } from "@design/input/Switch";
import { inube } from "@design/tokens";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { Stack } from "@inubekit/stack";
import { FormikValues } from "formik";
import { termsAndConditionsTexts } from "./config/termsAndConditions";
import {
  StyledLinkPolicy,
  StyledTermsAndConditionsContainer,
  StyledTermsAndConditionsInfo,
} from "./styles";

const getTermsAndConditionsParag = (texts: string[]) => {
  return texts.map((text, index) => (
    <Text key={index} type="body" size="small">
      {text}
    </Text>
  ));
};

function CustomLabelPolicy() {
  return (
    <Text type="label" size="large">
      Acepto la{" "}
      <StyledLinkPolicy to="about:blank" target="_blank" rel="noreferrer">
        Política de tratamiento de datos
      </StyledLinkPolicy>
    </Text>
  );
}

interface TermsAndConditionsFormUIProps {
  formik: FormikValues;
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
            {getTermsAndConditionsParag(termsAndConditionsTexts)}
          </StyledTermsAndConditionsInfo>
        </StyledTermsAndConditionsContainer>
        <Switch
          id="accept"
          name="accept"
          label="Acepto los términos y condiciones"
          size={isMobile ? "small" : "large"}
          onChange={formik.handleChange}
          checked={formik.values.accept}
          disabled={loading}
        />
        <Switch
          id="acceptDataPolicy"
          name="acceptDataPolicy"
          customLabel={<CustomLabelPolicy />}
          label="Acepto la Política de tratamiento de datos"
          size={isMobile ? "small" : "large"}
          onChange={formik.handleChange}
          checked={formik.values.acceptDataPolicy}
          disabled={loading}
        />
      </Stack>
    </form>
  );
}

export { TermsAndConditionsFormUI };
