import { OutlineCard } from "@components/cards/OutlineCard";
import { inube } from "@design/tokens";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { Blanket } from "@inubekit/blanket";
import { Button } from "@inubekit/button";
import { Divider } from "@inubekit/divider";
import { Icon } from "@inubekit/icon";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { createPortal } from "react-dom";
import {
  MdClear,
  MdOutlineCurrencyExchange,
  MdOutlineDelete,
  MdOutlineDownload,
  MdOutlineEdit,
  MdOutlineShare,
} from "react-icons/md";
import { EProductType } from "src/model/entity/product";
import { StyledModal } from "./styles";
import { useContext } from "react";
import { AppContext } from "src/context/app";

interface ActionsModalProps {
  portalId?: string;
  productType: EProductType;
  onChangeQuota?: () => void;
  onModifyAction?: () => void;
  onCancelSaving?: () => void;
  onDownload?: () => void;
  onShare?: () => void;
  onCloseModal: () => void;
}

function ActionsModal(props: ActionsModalProps) {
  const {
    portalId = "modals",
    productType,
    onChangeQuota,
    onModifyAction,
    onCancelSaving,
    onDownload,
    onShare,
    onCloseModal,
  } = props;

  const isMobile = useMediaQuery("(max-width: 700px)");
  const node = document.getElementById(portalId);
  const { getFlag } = useContext(AppContext);

  const withChangeQuotaOption = getFlag(
    "admin.savings.programmed-savings.modal-option-change-quota",
  ).value;

  const withModifyActionOption = getFlag(
    "admin.savings.programmed-savings.modal-option-modify-action",
  ).value;

  const withCancelSavingOption = getFlag(
    "admin.savings.programmed-savings.modal-option-cancel-saving",
  ).value;

  const withDownloadCertificateOption = getFlag(
    "admin.savings.cdat.modal-option-download-certificate",
  ).value;

  const withShareCertificateOption = getFlag(
    "admin.savings.cdat.modal-option-share-certificate",
  ).value;

  const withCancelInvestmentOption = getFlag(
    "admin.savings.cdat.modal-option-cancel-investment",
  ).value;

  if (node === null) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly.",
    );
  }

  return createPortal(
    <Blanket>
      <StyledModal $smallScreen={isMobile}>
        <Stack direction="column" width="100%" gap={inube.spacing.s100}>
          <Stack justifyContent="space-between" alignItems="center">
            <Text
              type="title"
              appearance="dark"
              size={isMobile ? "small" : "medium"}
              weight="bold"
            >
              Acciones
            </Text>

            <Icon
              appearance="dark"
              icon={<MdClear />}
              onClick={onCloseModal}
              cursorHover={true}
              size="24px"
              spacing="narrow"
            />
          </Stack>

          <Text type="body" size="medium" appearance="gray">
            Explora las opciones adicionales de tu ahorro programado.
          </Text>
        </Stack>

        <Divider dashed />

        <Stack direction="column" gap={inube.spacing.s200}>
          {productType === EProductType.PROGRAMMEDSAVINGS &&
            withChangeQuotaOption && (
              <OutlineCard>
                <Stack
                  justifyContent="space-between"
                  padding={
                    isMobile
                      ? `${inube.spacing.s200} ${inube.spacing.s150}`
                      : inube.spacing.s200
                  }
                  alignItems={isMobile ? "flex-start" : "center"}
                  width="100%"
                  gap={isMobile ? inube.spacing.s100 : inube.spacing.s0}
                  direction={isMobile ? "column" : "row"}
                >
                  <Stack direction="column" gap={inube.spacing.s050}>
                    <Text type="title" size="small" weight="bold">
                      Cambiar cuota
                    </Text>

                    <Text type="body" size="small" appearance="gray">
                      Cambia el valor de la cuota de tu ahorro programado.
                    </Text>
                  </Stack>

                  <Button
                    variant="outlined"
                    iconBefore={<MdOutlineCurrencyExchange />}
                    spacing="compact"
                    onClick={onChangeQuota}
                    fullwidth={isMobile}
                  >
                    Cambiar
                  </Button>
                </Stack>
              </OutlineCard>
            )}

          {productType === EProductType.PROGRAMMEDSAVINGS &&
            withModifyActionOption && (
              <OutlineCard>
                <Stack
                  justifyContent="space-between"
                  padding={inube.spacing.s200}
                  width="100%"
                  direction={isMobile ? "column" : "row"}
                  alignItems={isMobile ? "flex-start" : "center"}
                  gap={isMobile ? inube.spacing.s100 : inube.spacing.s0}
                >
                  <Stack direction="column" gap={inube.spacing.s050}>
                    <Text type="title" size="small" weight="bold">
                      Modificar la acción al vencimiento
                    </Text>

                    <Text type="body" size="small" appearance="gray">
                      Modifica la decisión tomada cuando se vence tu ahorro
                      programado.
                    </Text>
                  </Stack>

                  <Button
                    variant="outlined"
                    iconBefore={<MdOutlineEdit />}
                    spacing="compact"
                    onClick={onModifyAction}
                    fullwidth={isMobile}
                  >
                    Modificar
                  </Button>
                </Stack>
              </OutlineCard>
            )}

          {productType === EProductType.PROGRAMMEDSAVINGS &&
            withCancelSavingOption && (
              <OutlineCard>
                <Stack
                  justifyContent="space-between"
                  padding={inube.spacing.s200}
                  width="100%"
                  direction={isMobile ? "column" : "row"}
                  alignItems={isMobile ? "flex-start" : "center"}
                  gap={isMobile ? inube.spacing.s100 : inube.spacing.s0}
                >
                  <Stack direction="column" gap={inube.spacing.s050}>
                    <Text type="title" size="small" weight="bold">
                      Cancelar ahorro
                    </Text>

                    <Text type="body" size="small" appearance="gray">
                      Cancela de forma definitiva tu ahorro programado.
                    </Text>
                  </Stack>

                  <Button
                    variant="outlined"
                    iconBefore={<MdOutlineDelete />}
                    spacing="compact"
                    onClick={onCancelSaving}
                    fullwidth={isMobile}
                    appearance="danger"
                  >
                    Cancelar
                  </Button>
                </Stack>
              </OutlineCard>
            )}

          {productType === EProductType.CDAT &&
            withDownloadCertificateOption && (
              <OutlineCard>
                <Stack
                  justifyContent="space-between"
                  padding={
                    isMobile
                      ? `${inube.spacing.s200} ${inube.spacing.s150}`
                      : inube.spacing.s200
                  }
                  alignItems={isMobile ? "flex-start" : "center"}
                  width="100%"
                  gap={isMobile ? inube.spacing.s100 : inube.spacing.s0}
                  direction={isMobile ? "column" : "row"}
                >
                  <Stack direction="column" gap={inube.spacing.s050}>
                    <Text type="title" size="small" weight="bold">
                      Descargar certificado
                    </Text>

                    <Text type="body" size="small" appearance="gray">
                      Descarga tu certificado de ahorro.
                    </Text>
                  </Stack>

                  <Button
                    variant="outlined"
                    iconBefore={<MdOutlineDownload />}
                    spacing="compact"
                    onClick={onDownload}
                    fullwidth={isMobile}
                  >
                    Descargar
                  </Button>
                </Stack>
              </OutlineCard>
            )}

          {productType === EProductType.CDAT && withShareCertificateOption && (
            <OutlineCard>
              <Stack
                justifyContent="space-between"
                padding={inube.spacing.s200}
                width="100%"
                direction={isMobile ? "column" : "row"}
                alignItems={isMobile ? "flex-start" : "center"}
                gap={isMobile ? inube.spacing.s100 : inube.spacing.s0}
              >
                <Stack direction="column" gap={inube.spacing.s050}>
                  <Text type="title" size="small" weight="bold">
                    Compartir certificado
                  </Text>

                  <Text type="body" size="small" appearance="gray">
                    Comparte tu certificado de ahorro en otra aplicaciones.
                  </Text>
                </Stack>

                <Button
                  variant="outlined"
                  iconBefore={<MdOutlineShare />}
                  spacing="compact"
                  onClick={onShare}
                  fullwidth={isMobile}
                >
                  Compartir
                </Button>
              </Stack>
            </OutlineCard>
          )}

          {productType === EProductType.CDAT && withCancelInvestmentOption && (
            <OutlineCard>
              <Stack
                justifyContent="space-between"
                padding={inube.spacing.s200}
                width="100%"
                direction={isMobile ? "column" : "row"}
                alignItems={isMobile ? "flex-start" : "center"}
                gap={isMobile ? inube.spacing.s100 : inube.spacing.s0}
              >
                <Stack direction="column" gap={inube.spacing.s050}>
                  <Text type="title" size="small" weight="bold">
                    Cancelar inversión por anticipado
                  </Text>

                  <Text type="body" size="small" appearance="gray">
                    Al cancelar tu solicitud, podría aplicarse una penalización
                    a tus intereses.
                  </Text>
                </Stack>

                <Button
                  variant="outlined"
                  iconBefore={<MdOutlineDelete />}
                  spacing="compact"
                  onClick={onCancelSaving}
                  fullwidth={isMobile}
                  appearance="danger"
                >
                  Cancelar
                </Button>
              </Stack>
            </OutlineCard>
          )}
        </Stack>
      </StyledModal>
    </Blanket>,
    node,
  );
}

export { ActionsModal };
export type { ActionsModalProps };
