import { Text } from "@design/data/Text";
import { TextField } from "@design/input/TextField";
import { Stack } from "@design/layout/Stack";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { IEconomicActivity } from "@mocks/users/economicActivities.mocks";
import { useState } from "react";
import { createPortal } from "react-dom";
import { MdOutlineClose } from "react-icons/md";
import { StyledBody, StyledItem, StyledModal } from "./styles";
import { Divider } from "@inubekit/divider";
import { Blanket } from "@inubekit/blanket";
import { Icon } from "@inubekit/icon";

interface ItemProps {
  id: string;
  description: string;
  onClick: () => void;
}

function Item(props: ItemProps) {
  const { id, description, onClick } = props;
  return (
    <StyledItem onClick={onClick}>
      <Stack direction="column" gap="s050">
        <Text type="label" size="medium">
          {id}
        </Text>
        <Text type="body" size="medium">
          {description}
        </Text>
      </Stack>
    </StyledItem>
  );
}

interface EconomicActivityModalProps {
  portalId: string;
  onCloseModal: () => void;
  activities: IEconomicActivity[];
  selectedActivityId?: string;
  onSelect: (selectedItem: IEconomicActivity) => void;
}

function EconomicActivityModal(props: EconomicActivityModalProps) {
  const { portalId, onCloseModal, activities, selectedActivityId, onSelect } =
    props;
  const [searchTerm, setSearchTerm] = useState("");

  const isMobile = useMediaQuery("(max-width: 550px)");
  const node = document.getElementById(portalId);

  if (node === null) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly.",
    );
  }

  const filteredActivities = activities.filter(
    (activity: IEconomicActivity) =>
      activity.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.description.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return createPortal(
    <Blanket>
      <StyledModal $smallScreen={isMobile}>
        <Stack direction="column" gap="s100">
          <Stack justifyContent="space-between" alignItems="center">
            <Text
              type="title"
              size={isMobile ? "small" : "medium"}
              appearance="dark"
            >
              Búsqueda
            </Text>

            <Icon
              appearance="dark"
              size="20px"
              spacing="narrow"
              icon={<MdOutlineClose />}
              onClick={onCloseModal}
              cursorHover
            />
          </Stack>
          <Text
            type="body"
            size={isMobile ? "small" : "medium"}
            appearance="gray"
          >
            Búsqueda actividad económica CIIU
          </Text>
        </Stack>

        {selectedActivityId &&
          activities.map(
            (activity: IEconomicActivity) =>
              activity.id === selectedActivityId && (
                <Item
                  key={activity.id}
                  id={activity.id}
                  description={activity.description}
                  onClick={() => onSelect(activity)}
                />
              ),
          )}

        <Divider dashed />
        <Stack direction="column" gap={isMobile ? "s200" : "s250"}>
          <Text type="body" size={isMobile ? "small" : "medium"}>
            Digita una palabra clave o código.
          </Text>
          <TextField
            name="searchActivity"
            id="searchActivity"
            placeholder="Digita la palabra clave"
            onChange={(e) => setSearchTerm(e.target.value)}
            size="compact"
            isFullWidth
          />
          {searchTerm !== "" && (
            <StyledBody>
              {filteredActivities.length > 0 ? (
                filteredActivities.map((activity: IEconomicActivity) => (
                  <Item
                    key={activity.id}
                    id={activity.id}
                    description={activity.description}
                    onClick={() => onSelect(activity)}
                  />
                ))
              ) : (
                <Text type="body" size="small" appearance="gray">
                  No se han encontrado actividades para &quot;{searchTerm}&quot;
                </Text>
              )}
            </StyledBody>
          )}
        </Stack>
      </StyledModal>
    </Blanket>,
    node,
  );
}

export { EconomicActivityModal };
