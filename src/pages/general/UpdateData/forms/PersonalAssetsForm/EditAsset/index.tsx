import { IEntry } from "@design/data/Table/types";
import { FormikProps } from "formik";
import { useState } from "react";
import { IPersonalAssetEntries, IPersonalAssetEntry } from "../types";
import { EditAssetUI } from "./interface";

interface EditAssetProps {
  asset: IEntry;
  formik: FormikProps<IPersonalAssetEntries>;
}

const getEditAsset = (
  asset: IPersonalAssetEntry,
  formik: FormikProps<IPersonalAssetEntries>,
) => {
  const assetToEdit = formik.values.entries.find(
    (entry: IPersonalAssetEntry) => entry.id === asset.id,
  );

  if (assetToEdit) {
    formik.setValues({
      entries: formik.values.entries,
      ...assetToEdit,
    });
  }
};

function EditAsset(props: EditAssetProps) {
  const { asset, formik } = props;

  const [showModal, setShowModal] = useState(false);

  const handleEditAsset = async () => {
    await formik.validateForm();

    if (formik.isValid && formik.values.assetType) {
      setShowModal(false);
      const updatedEntries = formik.values.entries.map(
        (entry: IPersonalAssetEntry) => {
          if (entry.id === asset.id) {
            return {
              id: asset.id,
              assetType: formik.values.assetType,
              assetName: formik.values.assetName,
              commercialValue: formik.values.commercialValue,
              debtBalance: formik.values.debtBalance,
              financialEntity: formik.values.financialEntity,
              quota: formik.values.quota,
              observations: formik.values.observations,
            };
          }
          return entry;
        },
      );

      formik.setFieldValue("entries", updatedEntries);
    }
  };

  const handleToggleModal = () => {
    setShowModal(!showModal);
    const fieldsToClear = [
      "assetType",
      "assetName",
      "commercialValue",
      "debtBalance",
      "financialEntity",
      "quota",
      "observations",
    ];

    fieldsToClear.forEach((field) => formik.setFieldValue(field, ""));
  };

  const handleEditModal = () => {
    setShowModal(true);
    getEditAsset(asset, formik);
  };

  return (
    <EditAssetUI
      formik={formik}
      showModal={showModal}
      handleEditModal={handleEditModal}
      handleEditAsset={handleEditAsset}
      closeModal={handleToggleModal}
    />
  );
}

export { EditAsset };
