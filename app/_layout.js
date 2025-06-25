import { Slot, Stack } from "expo-router";

export default function Layout(){
    
    return <Stack
        screenOptions={{
            headerStyle:  {

        } 
        }}
    >
        <Stack.Screen name="index" options={{
            headerTitle: "teste",
            headerShown: false
        }} />

    </Stack>
}