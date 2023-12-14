import {
  Container,
  Title,
  Text,
  Button,
  Center,
  Anchor,
  Box,
  rem,
} from "@mantine/core";
import { SearchBar } from "../components/JobPortalComponents/SearchBar";
import { PositionFilter } from "../components/JobPortalComponents/PositionFilter";
import { HeroSearchBar } from "../components/JobPortalComponents/HeroSearchBar";
import { IconNumber10Small } from "@tabler/icons-react";
import { useState } from "react";
import { JobCard } from "../components/JobPortalComponents/JobTableComponents/JobCard";

// <SearchBar pb={10} onSearch={(query) => setSearchQuery(query)} />
export function JobPortal() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Container fluid>
      <HeroSearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Container size="lg">

        <Box pb={20}>
          <Center pt={20} pb={20}>
            <PositionFilter />
          </Center>
          <JobCard searchQuery={searchQuery} />
        </Box>
        
        <Center>
          <a href="https://www.glassdoor.com/index.htm">
            powered by{" "}
            <img
              src="https://www.glassdoor.com/static/img/api/glassdoor_logo_80.png"
              title="Job Search"
            />
          </a>
        </Center>
      </Container>
    </Container>
  );
}
