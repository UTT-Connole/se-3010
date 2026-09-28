import { CheeseContextProvider } from "@/contexts/CheeseContext";
import { Stack } from "expo-router";


export default function RootLayout() {
  return (
    <CheeseContextProvider>
        <Stack />
    </CheeseContextProvider>
  )
}
