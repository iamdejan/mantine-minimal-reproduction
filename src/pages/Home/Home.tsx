import { Box, Paper, SimpleGrid, Title } from "@mantine/core";
import { JSX } from "react";

type LandingPaper = {
  title: string;
  text: string;
};

const landingPaperItems: LandingPaper[] = [
  {
    title: "Secure",
    text: "No one can access unintended permissions.",
  },
  {
    title: "Blazingly Fast",
    text: "You don't need to wait for hours or even minutes for the configuration to be applied.",
  },
  {
    title: "Save Your Cost",
    text: "As easy as you can imagine. You don't need to hire a professional to manage your Identity Access and Management.",
  },
  {
    title: "Professional Support",
    text: "Got any problem? We have a professional team that will help you to solve your problem.",
  }
];

export default function Home(): JSX.Element {
  return (
    <Box
      style={{
        display: "flex",
        width: "10vh%",
        height: "90vh",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Box style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        gap: "2rem"
      }}>
        <Title order={1} style={{
          fontWeight: "bold"
        }}>
          You don't have to worry about Identity Access and Management...
        </Title>

        <Title order={2} style={{
          fontWeight: "normal"
        }}>
          Because we take care of it for you!
        </Title>

        <SimpleGrid
          cols={{
            base: 1,
            sm: 2,
            md: 4
          }}
        >
          {landingPaperItems.map((item, index) => (
            <Paper
              key={index}
              shadow="xs"
              pt="1rem"
              px="0.5rem"
            >
              <Title order={5}>{item.title}</Title>
              <p>{item.text}</p>
            </Paper>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
