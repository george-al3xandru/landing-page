import { Text, Title } from "@mantine/core";
import { useHeroBannerStyles } from "./HeroBanner.styles";

interface HeroTitleProps {
  beginning: string;
  highlight: string;
  ending: string;
}

const HeroTitle = ({ beginning, highlight, ending }: HeroTitleProps) => {
  const { classes } = useHeroBannerStyles();
  return (
    <Title className={classes.title}>
      {beginning}{" "}
      <Text
        component="span"
        inherit
        variant="gradient"
        gradient={{ from: "blue", to: "cyan" }}
      >
        {highlight}
      </Text>{" "}
      {ending}
    </Title>
  );
};

export default HeroTitle;
