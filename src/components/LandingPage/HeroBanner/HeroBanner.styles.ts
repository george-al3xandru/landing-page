import { createStyles, rem } from "@mantine/core";

export const useHeroBannerStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    paddingTop: `calc(${theme.spacing.xl} * 3)`,
    paddingBottom: `calc(${theme.spacing.xl} * 3)`,
    overflow: "hidden",
    background: "#000000"
  },

  inner: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    zIndex: 10,
    marginLeft: "15%",

    [theme.fn.smallerThan("xl")]: {
      marginLeft: "10%",
    },

    [theme.fn.smallerThan("lg")]: {
      marginLeft: "5%",
    },

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      marginRight: "5%",
    },
  },

  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
    maxWidth: "1200px",
    objectFit: "cover",
    bottom: 0,
    right: -56,
  },

  content: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: rem(500),
    fontSize: rem(48),

    [theme.fn.smallerThan("lg")]: {
      fontSize: rem(38),
      lineHeight: 1.15,
    },

    [theme.fn.smallerThan("md")]: {
      fontSize: rem(32),
      maxWidth: "50%",
      lineHeight: 1.15,
    },

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: rem(500),

    [theme.fn.smallerThan("md")]: {
      maxWidth: "50%",
    },

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
    },
  },

  control: {
    paddingLeft: rem(50),
    paddingRight: rem(50),
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(22),

    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },
}));
