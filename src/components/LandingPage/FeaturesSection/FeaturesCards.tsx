import { Title, Text, Card, SimpleGrid, rem } from "@mantine/core";
import {
  IconWorldSearch,
  IconTools,
  IconDevices,
  IconGauge,
  IconShieldLock,
  IconHeadset,
} from "@tabler/icons-react";
import { useFeaturesStyles } from "./Features.styles";

const mockdata = [
  {
    title: "Customization",
    description:
      "We specialize in creating unique and tailored websites that meet your specific business needs.",
    icon: IconTools,
  },
  {
    title: "Responsive Design",
    description:
      "With the increasing use of mobile devices, it's crucial to have a website that looks great and functions seamlessly across all screen sizes.",
    icon: IconDevices,
  },
  {
    title: "Search Engine Optimization",
    description:
      "We implement SEO best practices during the development process to ensure your website is search engine friendly.",
    icon: IconWorldSearch,
  },
  {
    title: "Performance Optimization",
    description:
      "We understand the importance of fast-loading websites. Our development process includes optimizing your site for speed and performance.",
    icon: IconGauge,
  },
  {
    title: "Maintenance and Support",
    description:
      "Our relationship doesn't end once your website is live. We offer ongoing maintenance and support services to ensure your website remains up-to-date, secure, and functioning smoothly. ",
    icon: IconHeadset,
  },
  {
    title: "Security",
    description:
      "Security is a top priority for us. We follow industry-standard security practices to protect your website from vulnerabilities and data breaches.",
    icon: IconShieldLock,
  },
];

function FeaturesCards() {
  const { classes, theme } = useFeaturesStyles();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <feature.icon
        size={rem(50)}
        stroke={1.5}
        color={theme.fn.primaryColor()}
      />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <div className={classes.root}>
      <div className={classes.inner}>
        <Title order={2} className={classes.title} ta="center" mt="sm">
          Integrate effortlessly with any technology stack
        </Title>

        <Text color="dimmed" className={classes.description} ta="center" mt="md">
          Every once in a while, you’ll see a Golbat that’s missing some fangs.
          This happens when hunger drives it to try biting a Steel-type Pokémon.
        </Text>

        <SimpleGrid
          cols={3}
          spacing="xl"
          mt={50}
          breakpoints={[{ maxWidth: "md", cols: 2 },{ maxWidth: "sm", cols: 1 }]}
          
        >
          {features}
        </SimpleGrid>
      </div>{" "}
      {/* <img
        src="/images/features-section.png"
        alt="hero"
        className={classes.image}
      /> */}
    </div>
  );
}

export default FeaturesCards;
