import { Paper, Text } from "@mantine/core";
import { IconAt, IconPhone } from "@tabler/icons-react";
import { useContactStyles } from "./Contact.styles";
import ContactOption from "./ContactOption";

const options = [
  { icon: IconAt, label: "Email", value: "baroanageorge@gmail.com", copy: true },
  { icon: IconPhone, label: "Phone", value: "+40 733 957 844" },
];

const ContactInformation = () => {
  const { classes } = useContactStyles();

  const contactOptions = options.map((contactOption) => (
    <ContactOption contactOption={contactOption} />
  ));

  return (
    <Paper p="xl" radius="md" className={classes.contacts}>
      <Text fz="lg" fw={700} className={classes.title}>
        Contact information
      </Text>
      {contactOptions}
    </Paper>
  );
};

export default ContactInformation;
