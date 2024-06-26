import { Text } from "@design/data/Text";
import { Spinner } from "@design/feedback/Spinner";
import { Blanket } from "@design/layout/Blanket";
import { StyledLoadingCard } from "./styles";

interface LoadingModalProps {
  title: string;
  message: string;
}

function LoadingModal(props: LoadingModalProps) {
  const { title, message } = props;

  return (
    <Blanket>
      <StyledLoadingCard>
        <Spinner size="large" />
        <Text type="title" size="large">
          {title}
        </Text>
        <Text type="body" size="large" appearance="gray" textAlign="center">
          {message}
        </Text>
      </StyledLoadingCard>
    </Blanket>
  );
}

export { LoadingModal };
