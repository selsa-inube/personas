import { Text } from "@design/data/Text";
import { Blanket } from "@design/layout/Blanket";
import { StyledLoadingCard } from "./styles";
import { Spinner } from "@inubekit/spinner";

interface LoadingModalProps {
  title: string;
  message: string;
}

function LoadingModal(props: LoadingModalProps) {
  const { title, message } = props;

  return (
    <Blanket>
      <StyledLoadingCard>
        <Spinner appearance="primary" size="large" transparent={false}/>
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
