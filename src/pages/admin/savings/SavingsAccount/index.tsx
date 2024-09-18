import { ISelectOption } from "@design/input/Select/types";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { useAuth } from "@inube/auth";
import { useFlag } from "@inubekit/flag";
import { sendTransferRequest } from "@pages/admin/transfers/TransferOptions/utils";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "src/context/app";
import { SavingsContext } from "src/context/savings";
import { SavingsAccountUI } from "./interface";
import {
  IBeneficiariesModalState,
  ICommitmentsModalState,
  IReimbursementModalState,
  ISelectedProductState,
} from "./types";
import { validateSaving } from "./utils";

function SavingsAccount() {
  const { product_id } = useParams();
  const [selectedProduct, setSelectedProduct] =
    useState<ISelectedProductState>();
  const [productsOptions, setProductsOptions] = useState<ISelectOption[]>([]);
  const navigate = useNavigate();
  const { accessToken } = useAuth();
  const { user } = useContext(AppContext);
  const { savings, commitments, setSavings } = useContext(SavingsContext);
  const [beneficiariesModal, setBeneficiariesModal] =
    useState<IBeneficiariesModalState>({
      show: false,
      data: [],
    });
  const [reimbursementModal, setReimbursementModal] =
    useState<IReimbursementModalState>({
      show: false,
      data: [],
    });
  const [commitmentsModal, setCommitmentsModal] =
    useState<ICommitmentsModalState>({
      show: false,
      data: [],
    });
  const [showRechargeModal, setShowRechargeModal] = useState(false);
  const [showActionsModal, setShowActionsModal] = useState(false);

  const [loadingSend, setLoadingSend] = useState(false);
  const { getFlag } = useContext(AppContext);
  const { addFlag } = useFlag();

  const isMobile = useMediaQuery("(max-width: 750px)");

  const getBeneficiaries = () => {
    if (!selectedProduct) return;

    const beneficiariesAttribute = selectedProduct.saving.attributes.find(
      (attr) => attr.id === "beneficiaries",
    );

    if (beneficiariesAttribute && Array.isArray(beneficiariesAttribute.value)) {
      setBeneficiariesModal({
        ...beneficiariesModal,
        data: beneficiariesAttribute.value,
      });
    }
  };

  const getReimbursement = () => {
    if (!selectedProduct) return;

    const reimbursementAttributes = selectedProduct.saving.attributes.filter(
      (attr) =>
        attr.id === "bank_entity" ||
        attr.id === "account_type" ||
        attr.id === "account_number",
    );

    if (reimbursementAttributes) {
      setReimbursementModal({
        ...reimbursementModal,
        data: reimbursementAttributes,
      });
    }
  };

  const getCommitments = async () => {
    if (!selectedProduct || !accessToken) return;

    const foundCommitments = commitments.filter(
      (commitment) =>
        commitment.id ===
        selectedProduct.saving.commitments?.find(
          (commitmentId) => commitmentId === commitment.id,
        ),
    );

    setCommitmentsModal({
      ...commitmentsModal,
      data: foundCommitments,
    });
  };

  const handleSortProduct = async () => {
    if (!product_id || !user || !accessToken) return;

    const { selectedSaving, newSavings, combinedSavings } =
      await validateSaving(
        savings,
        product_id,
        user.identification,
        accessToken,
      );

    setSavings(newSavings);

    if (!selectedSaving) return;

    setSelectedProduct({
      saving: selectedSaving || [],
      option: selectedSaving.id,
    });

    setProductsOptions(
      combinedSavings.map((saving) => ({
        id: saving.id,
        value: saving.description,
      })),
    );
  };

  useEffect(() => {
    getBeneficiaries();
    getReimbursement();
    getCommitments();
  }, [selectedProduct]);

  useEffect(() => {
    handleSortProduct();
  }, [user, accessToken, product_id]);

  const handleChangeProduct = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value: id } = event.target;
    navigate(`/my-savings/account/${id}`);
  };

  const handleToggleBeneficiariesModal = () => {
    setBeneficiariesModal((prevState) => ({
      ...prevState,
      show: !prevState.show,
    }));
  };

  const handleToggleReimbursementModal = () => {
    setReimbursementModal((prevState) => ({
      ...prevState,
      show: !prevState.show,
    }));
  };

  const handleToggleCommitmentsModal = () => {
    setCommitmentsModal((prevState) => ({
      ...prevState,
      show: !prevState.show,
    }));
  };

  const handleSubmitRecharge = (savingAccount: string, amount: number) => {
    if (!accessToken) return;

    setShowRechargeModal(false);
    setLoadingSend(true);

    sendTransferRequest(user, savingAccount, amount, accessToken).catch(() => {
      addFlag({
        title: "El depósito no pudo ser procesado",
        description:
          "Ya fuimos notificados y estamos revisando. Intenta de nuevo más tarde.",
        appearance: "danger",
        duration: 5000,
      });

      setLoadingSend(false);
    });
  };

  const handleToggleRechargeModal = () => {
    setShowRechargeModal(!showRechargeModal);
  };

  const handleToggleActionsModal = () => {
    setShowActionsModal(!showActionsModal);
  };

  const handleChangeQuota = () => {
    return true;
  };

  const handleModifyAction = () => {
    return true;
  };

  const handleCancelSaving = () => {
    return true;
  };

  if (!selectedProduct) return null;

  const withTransfers = getFlag(
    "admin.transfers.deposit.deposit-accounts",
  ).value;

  return (
    <SavingsAccountUI
      productsOptions={productsOptions}
      selectedProduct={selectedProduct}
      isMobile={isMobile}
      productId={product_id}
      beneficiariesModal={beneficiariesModal}
      commitmentsModal={commitmentsModal}
      reimbursementModal={reimbursementModal}
      showRechargeModal={showRechargeModal}
      loadingSend={loadingSend}
      withTransfers={withTransfers}
      showActionsModal={showActionsModal}
      onToggleBeneficiariesModal={handleToggleBeneficiariesModal}
      onChangeProduct={handleChangeProduct}
      onToggleCommitmentsModal={handleToggleCommitmentsModal}
      onToggleReimbursementModal={handleToggleReimbursementModal}
      onToggleRechargeModal={handleToggleRechargeModal}
      onSubmitRecharge={handleSubmitRecharge}
      onToggleActionsModal={handleToggleActionsModal}
      onChangeQuota={handleChangeQuota}
      onModifyAction={handleModifyAction}
      onCancelSaving={handleCancelSaving}
    />
  );
}

export { SavingsAccount };
