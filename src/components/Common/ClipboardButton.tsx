import { Box, Tooltip } from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import "../../css/clipboard.css";
import ClipboardIcon from "./ClipboardIcon";

interface ClipboardButtonProps {
  text: string;
}

const ClipboardButton = (props: ClipboardButtonProps) => {
  const clipboard = useClipboard({ timeout: 2000 });

  return (
    <Tooltip
      label={clipboard.copied ? "Copied" : "Copy"}
      transitionProps={{ transition: "pop", duration: 300 }}
    >
      <Box
        mt="md"
        className={`clipboard ${clipboard.copied ? "copied" : ""}`}
        onClick={() => clipboard.copied === false && clipboard.copy(props.text)}
      >
        <ClipboardIcon />
      </Box>
    </Tooltip>
  );
};

export default ClipboardButton;
