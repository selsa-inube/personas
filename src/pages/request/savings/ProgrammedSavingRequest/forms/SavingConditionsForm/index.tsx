import { useAuth } from "@inube/auth";
import { useFlag } from "@inubekit/flag";
import { FormikProps, useFormik } from "formik";
import {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { AppContext } from "src/context/app";
import { periodicityDM } from "src/model/domains/general/periodicityDM";
import { getCalculatedProgramedSavingConditions } from "src/services/iclient/savings/getCalculatedProgramedSavingConditions";
import { ICalculatedProgramedSavingConditionsRequest } from "src/services/iclient/savings/getCalculatedProgramedSavingConditions/types";
import { IProgrammedSavingProduct } from "../DestinationForm/types";
import { SavingConditionsFormUI } from "./interface";
import { ISavingConditionsEntry } from "./types";
import {
  getInitialSavingConditionsValidations,
  getPeriodicities,
  getValuesForSimulate,
  validationSchema,
} from "./utils";

interface SavingConditionsFormProps {
  initialValues: ISavingConditionsEntry;
  product?: IProgrammedSavingProduct;
  loading?: boolean;
  onFormValid: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit?: (values: ISavingConditionsEntry) => void;
}

const SavingConditionsForm = forwardRef(function SavingConditionsForm(
  props: SavingConditionsFormProps,
  ref: React.Ref<FormikProps<ISavingConditionsEntry>>,
) {
  const { initialValues, product, loading, onFormValid, onSubmit } = props;

  const [loadingSimulation, setLoadingSimulation] = useState(false);
  const { accessToken } = useAuth();
  const { user } = useContext(AppContext);
  const [dynamicValidationSchema, setDynamicValidationSchema] =
    useState(validationSchema);
  const { addFlag } = useFlag();

  const formik = useFormik({
    initialValues,
    validationSchema: dynamicValidationSchema,
    validateOnBlur: false,
    onSubmit: onSubmit || (() => true),
  });

  useImperativeHandle(ref, () => formik);

  useEffect(() => {
    if (formik.dirty) {
      formik.validateForm().then((errors) => {
        onFormValid(Object.keys(errors).length === 0);
      });
    }
  }, [formik.values]);

  useEffect(() => {
    if (!product) return;

    setDynamicValidationSchema(getInitialSavingConditionsValidations(product));
  }, []);

  useEffect(() => {
    if (accessToken && user?.identification) {
      getValuesForSimulate(formik, accessToken, user.identification);
    }
  }, [accessToken, user.identification]);

  const handleChangePaymentMethod = async (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { value } = event.target;

    if (!accessToken) return;

    const selectedMethod = formik.values.paymentMethods.find(
      (method) => method.id === value,
    );

    if (selectedMethod) {
      formik.setFieldValue("paymentMethod", {
        id: selectedMethod.id,
        value: selectedMethod.value,
      });

      await getPeriodicities(formik, accessToken, selectedMethod.id);
    }
  };

  const handleChangePeriodicity = async (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { value } = event.target;

    if (!accessToken || !formik.values.paymentMethod) return;

    const selectedPeriodicity = formik.values.periodicities.find(
      (periodicity) => periodicity.id === value,
    );

    if (selectedPeriodicity) {
      formik.setFieldValue("periodicity", {
        id: selectedPeriodicity.id,
        description: selectedPeriodicity.description,
        periodicityInMonths: selectedPeriodicity.periodicityInMonths,
        periodicityInDays: selectedPeriodicity.periodicityInDays,
      });
    }
  };

  const simulateSaving = async () => {
    setLoadingSimulation(true);
    try {
      const paymentMethodId = formik.values.paymentMethod?.id;
      const deadline = formik.values.deadline;
      const quota = formik.values.quota;

      if (
        !paymentMethodId ||
        !accessToken ||
        !deadline ||
        !quota ||
        !formik.values.periodicity.periodicityInMonths ||
        !user?.identification ||
        !product?.id
      ) {
        throw new Error("No se pudo obtener la información necesaria");
      }

      const conditionsRequestData: ICalculatedProgramedSavingConditionsRequest =
        {
          deadline,
          paymentMethod: paymentMethodId,
          periodicity: formik.values.periodicity.periodicityInMonths.toString(),
          productId: product.id,
          quotaValue: quota,
          userIdentification: user.identification,
        };

      const conditionsResponse = await getCalculatedProgramedSavingConditions(
        conditionsRequestData,
        accessToken,
      );

      if (conditionsResponse) {
        formik.setFieldValue("savingAmount", conditionsResponse.netValue);
        formik.setFieldValue("annualRate", conditionsResponse.rate);
        formik.setFieldValue("yields", conditionsResponse.returns);
        formik.setFieldValue(
          "withholdingTax",
          conditionsResponse.withholdingTax,
        );
        formik.setFieldValue("gmf", conditionsResponse.gmf);
        formik.setFieldValue("netValue", conditionsResponse.disbursement);
        formik.setFieldValue("hasResult", true);
      }

      onFormValid(true);
    } catch (error) {
      addFlag({
        title: "La simulación no pudo ser procesada",
        description:
          "Ya fuimos notificados y estamos revisando. Intenta de nuevo más tarde.",
        appearance: "danger",
        duration: 5000,
      });

      onFormValid(false);
    } finally {
      setLoadingSimulation(false);
    }
  };

  const customHandleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    formik.setFieldValue("hasResult", false);
    formik.handleChange(event);
  };

  const periodicityOptions = formik.values.periodicities.map((periodicity) => {
    const matchedDomain = periodicityDM.valueOf(periodicity.id);
    return matchedDomain
      ? { id: matchedDomain.id, value: matchedDomain.value }
      : { id: periodicity.id, value: periodicity.id };
  });

  return (
    <SavingConditionsFormUI
      loading={loading}
      formik={formik}
      loadingSimulation={loadingSimulation}
      periodicityOptions={periodicityOptions}
      product={product}
      simulateSaving={simulateSaving}
      customHandleChange={customHandleChange}
      onFormValid={onFormValid}
      onChangePaymentMethod={handleChangePaymentMethod}
      onChangePeriodicity={handleChangePeriodicity}
    />
  );
});

export { SavingConditionsForm };
export type { SavingConditionsFormProps };