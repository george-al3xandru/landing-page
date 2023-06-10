import { Flex } from "@mantine/core";
import ContactForm from "./ContactForm";
import ContactInformation from "./ContactInformation";
import { useContactStyles } from "./Contact.styles";

const Contact = () => {
  const { classes } = useContactStyles();

  return (
    <div className={classes.root}>
      <div className={classes.inner}>
        <div className={classes.wrapper}>
          <ContactInformation />
          <ContactForm />
        </div>
      </div>

      <img
        src="/images/contact-section.png"
        alt="contact"
        className={classes.image}
      />
    </div>
  );
};

export default Contact;
