import { Stack } from "expo-router";
import { useState } from "react";
import ThemeContext from "@/contexts/ThemeContext";

export default function RootLayout() {
  const [theme, setTheme] = useState('orange')
  return (
  <ThemeContext.Provider value={{theme: theme, setTheme: setTheme}}>  
  <Stack
    screenOptions={{
      headerStyle: { backgroundColor: theme },
      headerTintColor: '#fff',
      headerTitle: 'Beanie Store',
    }}
   />;
 </ThemeContext.Provider>
  )
}
