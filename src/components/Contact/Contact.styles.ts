import { createStyles, rem } from "@mantine/core";

export const useContactStyles = createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan("sm");

  return {
    root: {
      position: "relative",
      paddingTop: `calc(${theme.spacing.xl} * 3)`,
      paddingBottom: `calc(${theme.spacing.xl} * 3)`,
      overflow: "hidden",
      background: "rgb(2,22,36)",
    },

    inner: {
      marginRight: "15%",
      display: "flex",
      justifyContent: "flex-end",
      [theme.fn.smallerThan("xl")]: {
        marginRight: "10%",
      },

      [theme.fn.smallerThan("lg")]: {
        marginRight: "5%",
      },

      [theme.fn.smallerThan(1270)]: {
        justifyContent: "center",
        marginRight: "0%",
      },
    },

    image: {
      position: "absolute",
      maxWidth: "300px",
      objectFit: "cover",
      bottom: 144,
      marginLeft: "10%",

      [theme.fn.smallerThan(1620)]: {
        marginLeft: "0%",
        left: 70,
      },

      [theme.fn.smallerThan(1350)]: {
        left: 30,
      },

      [theme.fn.smallerThan(1270)]: {
        left: 0,
        transform: "translateX(-50%)"
      },
    },

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

    copyIconContainer: {
      padding: "3px 5px 5px",
      cursor: "pointer",
      maxHeight: "26px",
    },
  };
});
