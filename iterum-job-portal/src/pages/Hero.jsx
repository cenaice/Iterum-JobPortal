
import { Container, Title, Text, Button } from "@mantine/core";
import classes from "./Hero.module.css";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

export function Hero() {
  const navigate = useNavigate(); // Get the navigate function

  const handleGetStartedClick = () => {
    navigate("/jobportal"); // Redirect to the desired path
  };

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
              onClick={handleGetStartedClick} // Attach the onClick handler
            >
              Get Started
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

