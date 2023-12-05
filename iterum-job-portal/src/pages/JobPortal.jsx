import { Container, Title, Text, Button, Center, Anchor, Box, rem, } from "@mantine/core";
import { JobTable } from "../components/JobPortalComponents/JobTable";
import { SearchBar } from '../components/JobPortalComponents/SearchBar';
import { PositionFilter } from "../components/JobPortalComponents/PositionFilter";
import { HeroSearchBar } from "../components/JobPortalComponents/HeroSearchBar";
import { IconNumber10Small } from "@tabler/icons-react";
import { useState } from 'react';

export function JobPortal() {
  const [searchQuery, setSearchQuery] = useState('');


  return (
    <Container >
    <HeroSearchBar/>
      <Container size="lg">
      
        <h1>Search Now</h1>
        <SearchBar pb={10} onSearch={(query) => setSearchQuery(query)} />
        <Box pb={20}>
          <Center pb={20}>
            <PositionFilter />
          </Center>
          <JobTable searchQuery={searchQuery} />
        </Box>
        <Center>

          <a href='https://www.glassdoor.com/index.htm'>powered by <img src='https://www.glassdoor.com/static/img/api/glassdoor_logo_80.png' title='Job Search' /></a>
        </Center>
      </Container>
    </Container>
  );
}
