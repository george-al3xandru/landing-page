import { createStyles, rem } from "@mantine/core";

export const useHeaderStyles = createStyles((theme, pinned: boolean) => ({
  root: {
    background: "rgb(0,0,0, 0.7)",
    border: 0,
  },
  header: {
    height: "100%",
    padding: "0 15%",

    [theme.fn.smallerThan("xl")]: {
      padding: "0 10%",
    },

    [theme.fn.smallerThan("lg")]: {
      padding: "0 5%",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("xs")]: {
      display: "none",
    },
  },

  link: {
    position: "relative",
    display: "block",
    lineHeight: 1,
    color: theme.white,
    textDecoration: "none",
    textTransform: "uppercase",
    fontSize: theme.fontSizes.md,
    fontWeight: 500,

    [theme.fn.smallerThan("lg")]: {
      fontSize: theme.fontSizes.sm,
    },
    "&:before": {
      content: '""',
      position: "absolute",
      left: 0,
      bottom: -5,
      width: 0,
      height: "2px",
      backgroundColor: "#228be6",
      transition: "width 0.25s ease-out",
    },

    "&:hover": {
      "&:before": {
        width: "100%",
      },
    },
  },

  linkActive: {
    "&:before": {
      width: "100%",
    },
  },

  pinned: {
    transform: `translate3d(0, ${pinned ? 0 : rem(-70)}, 0)`,
    transition: "transform 400ms ease",
  },
}));
