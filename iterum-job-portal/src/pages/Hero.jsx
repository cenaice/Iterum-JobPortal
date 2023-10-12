import { Container, Title, Text, Button } from "@mantine/core";
import classes from "./Hero.module.css";

export function Hero() {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Tech{" "}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "pink", to: "yellow" }}
              >
                Opportunities
              </Text>{" "}
              For Everyone
            </Title>

            <Text className={classes.description} mt={30}>
              Find true entry level tech jobs catered to you
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: "pink", to: "yellow" }}
              size="xl"
              className={classes.control}
              mt={40}
            >
              Get Started
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
