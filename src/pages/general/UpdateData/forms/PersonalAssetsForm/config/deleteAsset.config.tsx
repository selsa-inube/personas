import { buttonAppearance } from "@design/input/Button/types";
import { MdSentimentNeutral, MdThumbUpOffAlt } from "react-icons/md";
import { MessageAppearanceType } from "@design/feedback/SectionMessage/types";

const deleteAssetModal = {
  title: "Eliminar activo",
  description: (asset: string) => `¿Deseas eliminar ${asset} como activo?`,
  actionText: "Eliminar",
  appearance: buttonAppearance[3],
  portalId: "modals",
};

const deleteAssetMessages = {
  success: {
    id: 1,
    icon: <MdThumbUpOffAlt size={18} />,
    title: "Activo eliminado!",
    description: (code?: string) =>
      `Hemos eliminado el activo "${code}" correctamente`,
    appearance: "success" as MessageAppearanceType,
  },
  failed: {
    id: 2,
    icon: <MdSentimentNeutral size={18} />,
    title: "¡Uy, algo salió mal!",
    description: (code?: string) =>
      `Hemos presentado problemas eliminando el activo "${code}".`,
    appearance: "success" as MessageAppearanceType,
  },
};

export { deleteAssetModal, deleteAssetMessages };
