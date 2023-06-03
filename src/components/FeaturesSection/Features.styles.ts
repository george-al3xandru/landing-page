import { createStyles, rem } from "@mantine/core";

export const useFeaturesStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    paddingTop: `calc(${theme.spacing.xl} * 3)`,
    paddingBottom: `calc(${theme.spacing.xl} * 3)`,
    background: "linear-gradient(0deg, rgb(2,22,36,1) 0%, rgba(0,0,0,1) 69%)",
  },

  inner: {
    position: "relative",
    zIndex: 10,
    margin: "0 15%",

    [theme.fn.smallerThan("xl")]: {
      margin: "0 10%",
    },

    [theme.fn.smallerThan("lg")]: {
      margin: "0 5%",
    },
  },

  title: {
    color: theme.white,
    fontSize: rem(34),
    fontWeight: 900,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(24),
    },
  },

  description: {
    maxWidth: 600,
    margin: "auto",

    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  card: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    border: `${rem(1)} solid ${theme.colors.dark[5]}`,
  },

  cardTitle: {
    color: theme.white,

    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
    },
  },

  image: {
    position: "absolute",
    width: "25%",
    maxWidth: "1200px",
    objectFit: "cover",
    top: 0,
    left: -60,
  },
}));
