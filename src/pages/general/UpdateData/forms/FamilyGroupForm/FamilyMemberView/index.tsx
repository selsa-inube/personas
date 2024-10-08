import { IEntry } from "@design/data/Table/types";
import { FormikProps } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { IFamilyGroupEntries, IFamilyGroupEntry } from "../types";
import { FamilyMemberViewUI } from "./interface";

const getFamilyMember = (
  member: IFamilyGroupEntry,
  formik: FormikProps<IFamilyGroupEntries>,
) => {
  const memberToView = formik.values.entries.find(
    (entry: IFamilyGroupEntry) => entry.id === member.id,
  );

  if (memberToView) {
    formik.setValues({
      entries: formik.values.entries,
      ...memberToView,
    });
  }
};

interface FamilyMemberViewProps {
  member: IEntry;
  formik: FormikProps<IFamilyGroupEntries>;
  validationSchema: Yup.ObjectSchema<Yup.AnyObject>;
  onDeleteMember: () => void;
  onEditMember: (member: IFamilyGroupEntry) => void;
}

function FamilyMemberView(props: FamilyMemberViewProps) {
  const { member, formik, validationSchema, onDeleteMember, onEditMember } =
    props;

  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleModalView = () => {
    setShowModal(true);
    getFamilyMember(member, formik);
  };

  const handleToggleDeleteModal = () => {
    setShowModal(!showModal);
    setShowDeleteModal(false);
  };

  const handleDeleteModal = () => {
    setShowModal(false);
    setShowDeleteModal(true);
  };

  const handleToggleEditModal = () => {
    setShowModal(!showModal);
    setShowEditModal(false);
  };

  const handleEditModal = () => {
    setShowModal(false);
    setShowEditModal(true);
  };

  const handleConfirm = () => {
    onEditMember(member);
    handleToggleEditModal();
  };

  return (
    <FamilyMemberViewUI
      showModal={showModal}
      formik={formik}
      member={member}
      showDeleteModal={showDeleteModal}
      showEditModal={showEditModal}
      validationSchema={validationSchema}
      onCloseModal={handleToggleModal}
      onShowModal={handleModalView}
      onDeleteModal={handleDeleteModal}
      onEditModal={handleEditModal}
      onDeleteMember={onDeleteMember}
      onConfirm={handleConfirm}
      onCloseDeleteModal={handleToggleDeleteModal}
      onCloseEditModal={handleToggleEditModal}
    />
  );
}

export { FamilyMemberView };
