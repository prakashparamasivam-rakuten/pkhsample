import { Stack } from "expo-router"
import { Provider } from "react-redux";
import { store } from "../state/store";

const RootLayout = () => {
    return (
        <Provider store={store}>
        <Stack>
            <Stack.Screen name="(tabs)" options={{
                headerShown:false
            }}/>
        </Stack>
    </Provider>
    );
};

export default RootLayout;