import { Table, Progress, Anchor, Text, Group } from '@mantine/core';
import classes from './JobTable.module.css';

const data = [
  {
    apply_link: 'Foundation',
    company_name: 'Palantir',
    date_posted: 1951,
    location: { positive: 2223, negative: 259 },
    role: "Morning Star Development Program",
  },
  {
    apply_link: 'Frankenstein',
    company_name: 'Mary Shelley',
    date_posted: 1818,
    location: { positive: 5677, negative: 1265 },
    role: "Lorem Ipsum Co."
  },
  {
    apply_link: 'Solaris',
    company_name: 'Stanislaw Lem',
    date_posted: 1961,
    location: { positive: 3487, negative: 1845 },
    role: "Lorem Ipsum University"
  },
  {
    apply_link: 'Dune',
    company_name: 'Frank Herbert',
    date_posted: 1965,
    location: { positive: 8576, negative: 663 },
    role: "Lorem Ipsum Store"
  },
  {
    apply_link: 'The Left Hand of Darkness',
    company_name: 'Ursula K. Le Guin',
    date_posted: 1969,
    location: { positive: 6631, negative: 993 },
    role: "Lorem Ipsum Solar"
  },
  {
    apply_link: 'A Scanner Darkly',
    company_name: 'Philip K Dick',
    date_posted: 1977,
    location: { positive: 8124, negative: 1847 },
    role: "Lorem Ipsum Ipsum Lorem"
  },
];

export function JobTable() {
  const rows = data.map((row) => {
    const totalReviews = row.location.negative + row.location.positive;
    const positiveReviews = (row.location.positive / totalReviews) * 100;
    const negativeReviews = (row.location.negative / totalReviews) * 100;

    return (
      <Table.Tr key={row.company_name}>
        <Table.Td>
          <Anchor component="button" fz="sm">
            {row.company_name}
          </Anchor>
        </Table.Td>
        <Table.Td>{row.date_posted}</Table.Td>
        <Table.Td>
          <Anchor component="button" fz="sm">
            {row.date_posted}
          </Anchor>
        </Table.Td>
        <Table.Td>{Intl.NumberFormat().format(totalReviews)}</Table.Td>
        <Table.Td>
          <Group justify="space-between">
            <Text fz="xs" c="teal" fw={700}>
              {positiveReviews.toFixed(0)}%
            </Text>
            <Text fz="xs" c="red" fw={700}>
              {negativeReviews.toFixed(0)}%
            </Text>
          </Group>
          <Progress.Root>
            <Progress.Section
              className={classes.progressSection}
              value={positiveReviews}
              color="teal"
            />

            <Progress.Section
              className={classes.progressSection}
              value={negativeReviews}
              color="red"
            />
          </Progress.Root>
        </Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Table.ScrollContainer minWidth={800}>
      <Table verticalSpacing="xs">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Company</Table.Th>
            <Table.Th>Date Posted</Table.Th>
            <Table.Th>Position</Table.Th>
            <Table.Th>Reviews</Table.Th>
            <Table.Th>Reviews distribution</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
