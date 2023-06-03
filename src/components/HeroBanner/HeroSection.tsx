import { Button, Text } from "@mantine/core";
import { useHeroBannerStyles } from "./HeroBanner.styles";
import HeroTitle from "./HeroTitle";

const HeroSection = () => {
  const { classes } = useHeroBannerStyles();
  return (
    <div className={classes.root}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <HeroTitle
            beginning=""
            highlight="Stand out"
            ending="in the digital landscape with our custom website solutions."
          />

          <Text className={classes.description} mt={30}>
            Turning your ideas into captivating online experiences.
          </Text>

          <Button
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            size="xl"
            className={classes.control}
            mt={40}
          >
            Get started
          </Button>
        </div>
      </div>
      <img
        src="/images/hero-section.png"
        alt="hero"
        className={classes.image}
      />
    </div>
  );
};

export default HeroSection;
