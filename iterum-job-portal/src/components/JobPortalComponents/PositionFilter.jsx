import { SegmentedControl } from '@mantine/core';
import classes from './PositionFilter.module.css';

export function PositionFilter() {
  return (
    <SegmentedControl
      radius="xl"
      size="md"
      data={['All', 'Software Engineer', 'Intern', 'AI/ML', 'Data Scientist', 'Big Tech', 'Web Developer']}
      classNames={classes}
    />
  );
}
