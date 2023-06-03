import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
  createStyles,
  rem,
  Container,
  Flex,
} from "@mantine/core";
import ClipboardButton from "../Common/ClipboardButton";

const useStyles = createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan("sm");

  return {
    wrapper: {
      padding: "72px 0",
      display: "flex",
      gap: "15px",
      [BREAKPOINT]: {
        flexDirection: "column",
      },
    },

    form: {
      flex: 1,
      padding: theme.spacing.xl,
      borderRadius: rem(8),
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      border: `${rem(1)} solid ${theme.colors.dark[5]}`,

      [BREAKPOINT]: {
        padding: theme.spacing.md,
        paddingLeft: theme.spacing.md,
      },
    },

    fields: {
      marginTop: rem(-12),
    },

    fieldInput: {
      flex: 1,

      "& + &": {
        marginLeft: theme.spacing.md,

        [BREAKPOINT]: {
          marginLeft: 0,
          marginTop: theme.spacing.md,
        },
      },
    },

    inputLabel: {
      color: theme.colors.gray[5],
    },

    fieldsGroup: {
      display: "flex",

      [BREAKPOINT]: {
        flexDirection: "column",
      },
    },

    contacts: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      border: `${rem(1)} solid ${theme.colors.dark[5]}`,
      flex: `0 0 ${rem(280)}`,
    },

    title: {
      marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
      color: theme.white,

      "&::after": {
        content: '""',
        display: "block",
        backgroundColor: theme.fn.primaryColor(),
        width: rem(45),
        height: rem(2),
        marginTop: theme.spacing.sm,
      },

      [BREAKPOINT]: {
        marginBottom: theme.spacing.xl,
      },
    },

    control: {
      [BREAKPOINT]: {
        flex: 1,
      },
    },
  };
});

const ContactForm = () => {
  const { classes } = useStyles();

  return (
    <div style={{ background: "rgb(2,22,36)" }}>
      <Container fluid maw={800}>
        <div className={classes.wrapper}>
          <Paper p="xl" radius="md" className={classes.contacts}>
            <Text fz="lg" fw={700} className={classes.title}>
              Contact information
            </Text>
            <ClipboardButton text="salut" />
            <Flex></Flex>
          </Paper>

          <form
            className={classes.form}
            onSubmit={(event) => event.preventDefault()}
          >
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
        </div>
      </Container>
    </div>
  );
};

export default ContactForm;
