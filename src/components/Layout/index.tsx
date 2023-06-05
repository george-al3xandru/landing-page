import { Outlet } from "react-router-dom";
import { AppShell } from "@mantine/core";
import HeaderComponent from "./Header/HeaderComponent";
import FooterComponent from "./Footer/FooterComponent";
import { useTranslation } from "react-i18next";
import { useLayoutStyles } from "./Layout.styles";

const data = [
  {
    title: "First Section",
    links: [
      { label: "Link 1", link: "https://example.com/link1" },
      { label: "Link 2", link: "https://example.com/link2" },
      { label: "Link 3", link: "https://example.com/link3" },
    ],
  },
  {
    title: "Second Section",
    links: [
      { label: "Link 4", link: "https://example.com/link4" },
      { label: "Link 5", link: "https://example.com/link5" },
    ],
  },
];

const Layout = () => {
  const { t } = useTranslation();
  const { classes, theme } = useLayoutStyles();
  const links = [
    { link: "/", label: t("home") },
    { link: "/portfolio", label: t("portfolio") },
    { link: "/contact", label: t("contact") },
  ];

  const AppShellProps = {
    styles: {
      main: {
        minHeight: "calc(100vh - 180px)",
        background: "#000000",
        padding: "70px 0 0 0",
      },
    },
    header: <HeaderComponent links={links} />,
    footer: <FooterComponent data={data} />,
  };

  return (
    <AppShell {...AppShellProps}>
      <Outlet />
    </AppShell>
  );
};

export default Layout;
