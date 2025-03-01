import { OutlineCard } from "@components/cards/OutlineCard";
import { inube } from "@design/tokens";
import { Icon, Stack, Text } from "@inubekit/inubekit";
import { MdSearch } from "react-icons/md";

function EmptyRecords() {
  return (
    <OutlineCard>
      <Stack
        direction="column"
        padding={inube.spacing.s250}
        gap={inube.spacing.s250}
        alignItems="center"
        width="100%"
        justifyContent="center"
      >
        <Icon
          icon={<MdSearch />}
          appearance="gray"
          size="40px"
          spacing="narrow"
        />
        <Text type="title" size="medium">
          Sin registros
        </Text>
        <Text type="body" size="medium" appearance="gray">
          Aun no has realizado solicitudes, haz clic en el botón “Crear PQRS”
          para empezar.
        </Text>
      </Stack>
    </OutlineCard>
  );
}

export { EmptyRecords };
