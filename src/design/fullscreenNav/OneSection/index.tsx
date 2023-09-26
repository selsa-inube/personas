import { Stack } from "@design/layout/Stack";
import { INavigation } from "../types";
import { NavLink } from "@design/navigation/NavLink";

interface OneSectionProps {
  navigation: INavigation;
  onClose: () => void;
}

function OneSection(props: OneSectionProps) {
  const { navigation, onClose } = props;
  const sectionValue = Object.values(navigation.sections)[0];

  return (
    <Stack direction="column">
      {Object.values(sectionValue.links).map((linkValue) => (
        <NavLink
          key={linkValue.id}
          children={linkValue.label}
          icon={linkValue.icon}
          path={linkValue.path}
          onClick={onClose}
        />
      ))}
    </Stack>
  );
}

export { OneSection };
