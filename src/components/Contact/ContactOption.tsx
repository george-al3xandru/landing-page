import { Box, CopyButton, Flex, Text, Tooltip } from "@mantine/core";
import { IconCheck, IconCopy, TablerIconsProps } from "@tabler/icons-react";
import { useContactStyles } from "./Contact.styles";

interface Option {
  icon: (props: TablerIconsProps) => JSX.Element;
  label: string;
  value: string;
  copy?: boolean;
}

interface ContactOptionProps {
  contactOption: Option;
}

const ContactOption = (props: ContactOptionProps) => {
  const { classes } = useContactStyles();
  return (
    <Flex align="center" c="white" gap="sm" mb="lg">
      <props.contactOption.icon size={26} />
      <Flex direction="column">
        <Text fz="xs">{props.contactOption.label}</Text>
        <Flex gap="5px">
          <Text fz="md">{props.contactOption.value}</Text>
          {props.contactOption.copy && (
            <CopyButton value={props.contactOption.value} timeout={2000}>
              {({ copied, copy }) => (
                <Tooltip
                  label={copied ? "Copied" : "Copy"}
                  withArrow
                  position="right"
                >
                  <Box className={classes.copyIconContainer} onClick={copy}>
                    {copied ? (
                      <IconCheck size="1rem" color="green" />
                    ) : (
                      <IconCopy size="1rem" />
                    )}
                  </Box>
                </Tooltip>
              )}
            </CopyButton>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ContactOption;
