import { Container } from "@mantine/core";
import ContactForm from "./ContactForm";
import ContactInformation from "./ContactInformation";
import { useContactStyles } from "./Contact.styles";

const Contact = () => {
  const { classes } = useContactStyles();

  return (
    <div style={{ background: "rgb(2,22,36)" }}>
      <Container fluid maw={800}>
        <div className={classes.wrapper}>
          <ContactInformation />
          <ContactForm />
        </div>
      </Container>
    </div>
  );
};

export default Contact;
