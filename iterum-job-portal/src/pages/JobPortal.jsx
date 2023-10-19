import { Container, Title, Text, Button, Center, Anchor, Box, rem, } from "@mantine/core";
import { JobTable } from "../components/JobPortalComponents/JobTable";
import { SearchBar } from '../components/JobPortalComponents/SearchBar';
import { PositionFilter } from "../components/JobPortalComponents/PositionFilter";
import { IconNumber10Small } from "@tabler/icons-react";


export function JobPortal() {
  return (
    <div>
      <Container size="lg">
        <h1>Search Now</h1>
        <SearchBar pb={10} />
        <Box pb={20}>
          <Center pb={20}>
            <PositionFilter />
          </Center>
          <JobTable />
        </Box>
        <Center>

          <a href='https://www.glassdoor.com/index.htm'>powered by <img src='https://www.glassdoor.com/static/img/api/glassdoor_logo_80.png' title='Job Search' /></a>
        </Center>
      </Container>
    </div>
  );
}
