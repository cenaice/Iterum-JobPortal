import cx from "clsx";
import { Title, Text, Container, Button, Overlay } from "@mantine/core";
import { SearchBar } from "./SearchBar";
import classes from "./HeroSearchBar.module.css";

export function HeroSearchBar({searchQuery, setSearchQuery}) {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Start your career today.
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            Using our search functionality combined with AI/ML to fit your liking.
          </Text>
        </Container>

        <div className={classes.controls}>
        <SearchBar pb={10} onSearch={(query) => setSearchQuery(query)} />
        </div>
      </div>
    </div>
  );
}
