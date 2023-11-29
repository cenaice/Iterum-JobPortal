import { Container, Grid, SimpleGrid, Skeleton, rem } from '@mantine/core';
import { StatsCard } from './StatsCard';
import { UserInfoIcons } from './UserInfoIcons';

const PRIMARY_COL_HEIGHT = rem(300);

export function MainGrid() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

  return (
    <Container my="md">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        <StatsCard height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
        <Grid gutter="md">

          <Grid.Col span={6}>
            <UserInfoIcons height={SECONDARY_COL_HEIGHT} radius="md" />
          </Grid.Col>
          <Grid.Col>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>

        </Grid>
      </SimpleGrid>
    </Container>
  );
}
