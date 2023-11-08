import { TextInput, TextInputProps, ActionIcon, useMantineTheme, rem } from '@mantine/core';
import { IconSearch, IconArrowRight } from '@tabler/icons-react';
import { useState, useEffect } from 'react';
import { useDebouncedValue } from '@mantine/hooks';

export function SearchBar({ onSearch }) {

  // This search bar needs to send text input to filter out the data inside our database 
  /* 
  Three things needed to handle this:
  1. State Management - hold and manage user input
  2. Event Handling - TO handle changes in the search input and initiate searches
  3. Data Fetching - Retrieve filtered data from database based on search query and present it on screen.
  
  */
  const theme = useMantineTheme();
  const [query, setQuery] = useState('');
  const [debouncedQuery] = useDebouncedValue(query, 300);

  useEffect(() => {
    onSearch(debouncedQuery);
  }, [debouncedQuery, onSearch]);


  return (
    <TextInput
      radius="xl"
      size="md"
      placeholder="Search Jobs"
      rightSectionWidth={42}
      leftSection={<IconSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
      rightSection={
        <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled">
          <IconArrowRight style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        </ActionIcon>
      }
      value={query}
      onChange={(event) => setQuery(event.currentTarget.value)}
    />
  );
}
