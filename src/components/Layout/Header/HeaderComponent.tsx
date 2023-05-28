import { useState } from "react";
import { Header, Group, Burger, Flex } from "@mantine/core";
import { useDisclosure, useHeadroom } from "@mantine/hooks";
import { useHeaderStyles } from "./Header.styles";

interface HeaderSimpleProps {
  links: { link: string; label: string }[];
}

const HeaderComponent = (props: HeaderSimpleProps) => {
  const [opened, { toggle }] = useDisclosure(false);
  const pinned = useHeadroom({ fixedAt: 70 });
  const { classes, cx } = useHeaderStyles(pinned);
  const [active, setActive] = useState(props.links[0].link);

  const items = props.links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));
  return (
    <Header
      height={70}
      className={classes.pinned}
      classNames={{ root: classes.root }}
    >
      <Flex justify="space-between" align="center" className={classes.header}>
        <img src="/logo512.png" style={{ height: "52px" }} />
        <Group spacing={25} className={classes.links}>
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />
      </Flex>
    </Header>
  );
};

export default HeaderComponent;
