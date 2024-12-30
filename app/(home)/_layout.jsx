import { Stack } from "expo-router";


export default function Layout(){
    return (
        <Stack screenOptions={{headerShown:false}}>
            <Stack.Screen name="index"/>
            <Stack.Screen name="employees"/>
            <Stack.Screen name="addDetails"/>
            <Stack.Screen name="markAttendence"/>
            <Stack.Screen name="[user]"/>
        </Stack>
    )
}