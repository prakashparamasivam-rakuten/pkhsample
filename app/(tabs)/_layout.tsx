import { Tabs } from "expo-router";
import MessageItem from "@components/list-item/MessageItem";

const TabsLayout = () => {
    return (
    <Tabs>
        <Tabs.Screen name="index" options={{
            headerTitle:"Home",
            title:"Home"
        }}/>
        <Tabs.Screen name="pkhUsers/[id]" options={{
            headerTitle:"UserPage",
            title:"UserPage",
            headerStyle:{
                backgroundColor:"red"
            }
        }} />
    </Tabs>
    );
};

export default TabsLayout;