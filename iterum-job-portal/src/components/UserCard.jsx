import { Card, Avatar, Text, Group, Button } from '@mantine/core';
import classes from './UserCard.module.css';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const stats = [
  { value: '0', label: 'Jobs Applied' },
  { value: '0', label: 'Jobs Saved' },
];

export function UserCardImage() {

  const auth = getAuth();
  const user = auth.currentUser;
  // The user object has basic properties such as    display name, email, etc.
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;
  const navigate = useNavigate();


  const handleProfilePageClick = () => {
    navigate("/profilepage");
  };



  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Text ta="center" fz="lg" fw={500}>
        {stat.value}
      </Text>
      <Text ta="center" fz="sm" c="dimmed" lh={1}>
        {stat.label}
      </Text>
    </div>
  ));

  return (
    <Card withBorder padding="xl" radius="md" className={classes.card}>
      <Card.Section
        h={140}
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80)',
        }}
      />
      <Avatar
        src={photoURL}
        size={80}
        radius={80}
        mx="auto"
        mt={-30}
        className={classes.avatar}
      />
      <Text ta="center" fz="lg" fw={500} mt="sm">
        {displayName}
      </Text>
      <Text ta="center" fz="sm" c="dimmed">
        Member
      </Text>
      <Group mt="md" justify="center" gap={30}>
        {items}
      </Group>
      <Button fullWidth radius="md" mt="xl" size="md" variant="default" onClick={handleProfilePageClick}>

        Profile
      </Button>
    </Card>
  );
}
