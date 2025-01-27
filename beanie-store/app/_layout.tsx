import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack
    screenOptions={{
      headerStyle: { backgroundColor: '#800000' },
      headerTintColor: '#fff',
      headerTitle: 'Beanie Store',
    }}
   />;
}
