import {
  Button,
  Group,
  SimpleGrid,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useContactStyles } from "./Contact.styles";

const ContactForm = () => {
  const { classes } = useContactStyles();
  return (
    <form className={classes.form} onSubmit={(event) => event.preventDefault()}>
      <Text fz="lg" fw={700} className={classes.title}>
        Get in touch
      </Text>

      <div className={classes.fields}>
        <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
          <TextInput
            labelProps={{ className: classes.inputLabel }}
            label="Your name"
            placeholder="Your name"
          />
          <TextInput
            labelProps={{ className: classes.inputLabel }}
            label="Your email"
            placeholder="hello@mantine.dev"
            required
          />
        </SimpleGrid>

        <TextInput
          labelProps={{ className: classes.inputLabel }}
          mt="md"
          label="Subject"
          placeholder="Subject"
          required
        />

        <Textarea
          mt="md"
          labelProps={{ className: classes.inputLabel }}
          label="Your message"
          placeholder="Please include all relevant information"
          minRows={3}
        />

        <Group position="right" mt="md">
          <Button type="submit" className={classes.control}>
            Send message
          </Button>
        </Group>
      </div>
    </form>
  );
};

export default ContactForm;
