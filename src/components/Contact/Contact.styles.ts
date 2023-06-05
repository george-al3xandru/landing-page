import { createStyles, rem } from "@mantine/core";

export const useContactStyles = createStyles((theme) => {
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

    copyIconContainer: {
      padding: "3px 5px 5px",
      cursor: "pointer",
      maxHeight: "26px",
    },
  };
});
