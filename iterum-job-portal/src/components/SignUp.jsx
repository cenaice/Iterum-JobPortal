import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
} from '@mantine/core';
import { GoogleButton } from './GoogleButton';
import { TwitterButton } from './TwitterButton';
import { auth, signInWithGoogle } from '../firebase/firebase.js'; // update the path accordingly
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { initializeApp } from 'firebase/app';


export function AuthenticationForm({ closeModal, onUserChange, ...props }) {
  const [type, toggle] = useToggle(['login', 'register']);
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
    },
  });




  const handleAuth = async () => {
    try {
      if (type === 'register') {
        await createUserWithEmailAndPassword(auth, form.values.email, form.values.password);

        const user = getAuth().currentUser;

        if (user) {
          await updateProfile(user, {
            displayName: form.values.name
          });
        } else {
          console.error("No authenticated user found.");
        }
      } else {
        await signInWithEmailAndPassword(auth, form.values.email, form.values.password);
      }

      const user = getAuth().currentUser;
      onUserChange(user);
      closeModal();
    } catch (error) {
      console.error("Authentication Error:", error.message);
    }
  };



  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      onUserChange(user);  // This will ensure that the displayName is sent back to your Navbar or wherever you want to display it
      closeModal();
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
    }
  };



  return (
    <Paper radius="md" p="xl" withBorder {...props}>
      <Text size="lg" fw={500}>
        Welcome!
      </Text>

      <Group grow mb="md" mt="md">
        <GoogleButton onClick={handleGoogleSignIn} radius="xl">Google</GoogleButton>
        <TwitterButton radius="xl">Github</TwitterButton>
      </Group>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />

      <form onSubmit={form.onSubmit(handleAuth)}>
        <Stack>
          {type === 'register' && (
            <TextInput
              label="Name"
              placeholder="Your name"
              value={form.values.name}
              onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
              radius="md"
            />
          )}

          <TextInput
            required
            label="Email"
            placeholder="example@domain.com"
            value={form.values.email}
            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
            error={form.errors.email && 'Invalid email'}
            radius="md"
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
            error={form.errors.password && 'Password should include at least 6 characters'}
            radius="md"
          />

          {type === 'register' && (
            <Checkbox
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
            />
          )}
        </Stack>

        <Group justify="space-between" mt="xl">
          <Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">
            {type === 'register'
              ? 'Already have an account? Login'
              : "Don't have an account? Register"}
          </Anchor>
          <Button type="submit" radius="xl">
            {upperFirst(type)}
          </Button>
        </Group>
      </form>
    </Paper>
  );
}
